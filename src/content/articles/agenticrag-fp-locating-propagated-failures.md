---
title: "When Failures Propagate: finding the first faulty retrieval"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-15"
summary: "A retrieval mistake can surface several steps later, or be repaired along the way. AgenticRAG-FP injects a known fault and checks whether a diagnoser can still find it after the remaining steps run. That gives trace search a stronger target than a plausible explanation."
tags: ["agentic-search", "fault-injection", "trace-evaluation"]
connections: []
featured: false
draft: false
---

Source: [When Failures Propagate: Causal Failure Attribution in Agentic Retrieval-Augmented Generation](https://arxiv.org/abs/2608.20627) — Lauren Pothuru and colleagues.

## Brief

Pothuru and colleagues inject a known retrieval fault, rerun later steps, and evaluate whether diagnosis identifies the injected hop. A coverage heuristic mainly selects the earliest hop and misses deeper faults. Read sections 4–5 and 9 of the November 10 revision; allow eight minutes.

## Why it matters

My inference: semantic similarity to the final error is a weak proxy for locating its cause. An observability benchmark should distinguish the injected fault, downstream symptoms, and recovery instead of treating every suspicious span as equally useful.

## A design question

Corrupt a retrieval result in a copied agent run at different depths. Pair each replay with a no-change replay, and report exact fault location, recovery, and final answer accuracy as separate outcomes.

## Evidence and caveat

The clean corpus can heal corrupted trace content. No-change replay controls are described as follow-up work, so stochastic failures remain a concern. Small samples and oracle-assisted repair probes limit generalization; the reported judge-versus-repair difference is not statistically significant.

