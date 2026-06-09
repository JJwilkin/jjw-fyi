---
title: Optimizing Database Inserts
number: 23
gallery: systems
medium: Systems Engineering
date: 2026-06-01
summary: Reducing insert latency by 95% through a storage-engine redesign — and what the profiler quietly refused to tell me.
tags:
  - databases
  - performance
  - storage engines
connections:
  - the-shape-of-a-queue
  - on-complexity
  - sidings-at-dawn
---

For most of a year, a single number sat on a dashboard and slowly drove me out of my mind: the
p99 latency of a write. Ingest was the whole product — sensors upstream, queries downstream — and
in the middle, our database took **42 milliseconds** at the tail to accept one row it had no
business agonising over. The mean was a respectable 3ms. The tail was where users lived.

This is the story of getting that 42ms down to 2ms. It is mostly a story about being wrong, in
public, for several weeks.

## What the profiler said, and why it lied

The first instinct is to attach a profiler and believe it. The flame graph was unambiguous: we
spent our time in `b-tree split` and `fsync`. Obviously, then, the fix was to split less and sync
less. I spent a fortnight tuning page sizes and fill factors. The mean improved. The tail did not
move at all.

The profiler was telling the truth about *where* CPU went and lying by omission about *why the
tail was the tail*. Averages hide the shape of a distribution, and the tail of a write path is
almost never about the work — it's about waiting for a resource that someone else is holding. I
had been optimising the cook when the problem was the queue at the door.

> The mean tells you what the machine does. The tail tells you what the machine does *to each
> other* — which lock, which buffer, which flush everyone is waiting behind.

## The actual problem: one log, many writers

Every insert appended to a single write-ahead log, and the log was guarded by one mutex. Under
light load, you grab it, append, release — 3ms. Under real load, you queue behind everyone else's
`fsync`, and a slow disk flush at the head of the queue stalls every writer behind it. The 42ms
wasn't *our* work. It was the sum of other people's flushes.

The redesign had three moves, in order of how much they mattered:

1. **Group commit.** Stop letting each writer call `fsync`. Let one writer flush on behalf of a
   batch, then wake the batch together. The disk does the same total work; the *queue* collapses.
2. **Sharded WAL.** Split the single log into N logs by key range, each with its own lock, so
   independent writers stop contending at all.
3. **Decouple durability from acknowledgement.** Acknowledge on enqueue, flush on a fixed cadence,
   and be honest in the docs about the window of loss that buys.

Move 1 alone got us most of the way:

```sql
-- before: every statement is its own transaction, its own fsync
INSERT INTO readings (sensor_id, ts, value) VALUES ($1, $2, $3);

-- after: amortise the flush across a window of writers
BEGIN;
  INSERT INTO readings (sensor_id, ts, value) VALUES
    ($1, $2, $3), ($4, $5, $6), ($7, $8, $9); -- the batcher fills this
COMMIT; -- one fsync wakes the whole group
```

The batcher itself is unglamorous — a bounded channel and a timer:

```rust
loop {
    let first = rx.recv().await?;          // block until there is work
    let mut batch = vec![first];
    let deadline = Instant::now() + Duration::from_micros(500);
    while let Ok(Some(row)) = timeout_at(deadline, rx.recv()).await {
        batch.push(row);
        if batch.len() >= MAX_BATCH { break; }
    }
    append_and_flush(&batch).await?;        // one fsync for all of them
}
```

That 500µs window is the entire trick: long enough to gather a crowd, short enough that no one
notices the wait.

## The numbers

| Stage                     | mean | p99  | p99.9 |
| ------------------------- | ---- | ---- | ----- |
| Baseline                  | 3ms  | 42ms | 110ms |
| + group commit            | 2ms  | 6ms  | 14ms  |
| + sharded WAL             | 2ms  | 3ms  | 7ms   |
| + decoupled durability    | 1ms  | 2ms  | 4ms   |

A 95% cut at the tail, and — the part I didn't expect — a *lower* mean, because the CPU we'd been
burning on lock contention came back to us for free.

## What I actually learned

The engineering was ordinary. The lesson wasn't. Every move that worked was a move that reduced
**coordination** — fewer things forced to agree before progress could be made. None of them made
the disk faster. They made the writers stop waiting on each other.

I think this is the recurring shape of systems work, and possibly of more than systems work: the
expensive thing is rarely the work itself. It's the agreement. I've written about that pattern at
length in [On Complexity](/articles/on-complexity/), and watched the same queue-behaviour from the
other side in [The Shape of a Queue](/articles/the-shape-of-a-queue/). I even went looking for it
with a camera, in the [railway sidings at dawn](/articles/sidings-at-dawn/) — a whole system whose
entire job is to let trains wait without blocking each other.
