---
title: The Shape of a Queue
number: 24
gallery: systems
medium: Systems Engineering
date: 2026-04-18
summary: Why a queue at 80% utilisation is calm and a queue at 95% is on fire — a small amount of arithmetic that changed how I read every dashboard.
tags:
  - distributed systems
  - queueing theory
  - observability
connections:
  - optimizing-database-inserts
  - on-complexity
  - a-walk-to-clear-the-cache
---

Here is a fact that took me far too long to feel in my bones: as a queue approaches full
utilisation, the wait does not climb gently. It goes vertical.

The back-of-the-envelope version is Kingman's formula, but the shape is the thing to remember. If
the average wait is proportional to `ρ / (1 − ρ)`, where `ρ` is utilisation, then look at what
happens near the end:

- At 50% busy, the factor is 1.
- At 80% busy, it is 4.
- At 90% busy, it is 9.
- At 95% busy, it is 19.
- At 99% busy, it is 99.

Nothing *broke* between 90% and 99%. You added a little more load to a system that looked, on the
CPU graph, like it had headroom. And the wait quintupled. This is why the on-call pager is so
often a surprise: the metric you were watching (utilisation) was linear and reassuring right up to
the moment the metric you cared about (latency) became a cliff.

## Read the second derivative

The practical consequence is that **utilisation is a terrible leading indicator and a fine
trailing one.** By the time it's high, you're already on the steep part. What you actually want on
the wall is the *rate of change* of latency, and a hard ceiling on utilisation — 70%, say — that
you treat as full, because the last 30% is a lie you tell yourself.

This is the same disease I diagnosed in [Optimizing Database
Inserts](/articles/optimizing-database-inserts/): the tail latency that nearly broke me was a
queue sitting in the red, and every fix was really just a way of buying back utilisation headroom
by removing contention.

## The uncomfortable corollary

Queues exist to absorb variance. A system with no queue anywhere is a system that drops work the
instant arrival rate wobbles. So you can't delete the queue — you can only choose where it lives
and how honestly it reports. The healthiest systems I've worked on were the ones that queued in
exactly one obvious place and screamed about it, rather than the ones that queued invisibly in
nine.

There's a tidy philosophical version of this hiding underneath, which is really a statement about
[complexity and the wish for less of it](/articles/on-complexity/). And there's an embarrassing
practical version, which is that I worked all of the above out properly only after I stopped
staring at the dashboard and [went for a walk](/articles/a-walk-to-clear-the-cache/).
