---
title: On Complexity, and the Wish for Less of It
number: 11
gallery: philosophy
medium: Reflection
date: 2026-02-09
summary: Complexity is not the enemy; uninvited complexity is. A short defence of the difference, written after one too many rewrites that solved nothing.
tags:
  - complexity
  - design
  - simplicity
connections:
  - optimizing-database-inserts
  - the-shape-of-a-queue
  - in-praise-of-slow-tools
---

We talk about complexity as if it were dirt — something that accumulates through carelessness and
can be cleaned away with enough discipline. I no longer believe this. Some complexity is *essential*:
it is the irreducible difficulty of the problem you chose. The rest is *accidental*: difficulty
you introduced, usually while trying to be clever about the first kind.

The trouble is that the two feel identical from the inside. Standing in front of a tangled system,
you cannot tell by inspection which knots are load-bearing and which are habits. The temptation is
to declare all of it accidental and rewrite — which is how you arrive, eighteen months later, at a
*different* tangle that happens to be yours.

## A test I keep returning to

Before removing a piece of complexity, I try to answer one question: **what did the person who
added this know that I don't?** Most of the time the honest answer is "a specific failure I haven't
hit yet." Chesterton's fence, in code. The complexity was a scar, and scars are evidence.

This is not an argument against simplification. It is an argument for earning it. The cleanest
system I ever built got clean only *after* I understood exactly why it had been complicated — the
[insert latency work](/articles/optimizing-database-inserts/) was simple in the end, but only
because I'd first paid for the knowledge of where the real contention lived. Simplicity that
arrives before understanding is just a different complexity wearing nicer clothes.

## The wish, examined

So where does the wish for less complexity come from? Partly fatigue, which is legitimate. But
partly, I think, a category error: we conflate *how a thing feels to hold in the mind* with *how
hard the underlying problem is*. A queue at 95% utilisation is not complicated —
[its behaviour is a single curve](/articles/the-shape-of-a-queue/) — but it feels chaotic, because
the curve is steep and we are bad at steep curves.

The mature wish, then, is not for less complexity. It is for complexity that is **legible**:
present where the problem demands it, absent where it doesn't, and honest about which is which.
That's a craft, not a cleanup. It is most of why I'm drawn to [slow
tools](/articles/in-praise-of-slow-tools/) — they don't hide the difficulty, they just refuse to
add any of their own.
