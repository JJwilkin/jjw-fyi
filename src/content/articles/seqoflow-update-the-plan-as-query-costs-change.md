---
title: "SeqoFlow: update the plan as query costs change"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-10"
summary: "A semantic query can become more expensive as it reaches different data, while other queries wait for the same model. SeqoFlow adjusts plans and scheduling together at batch boundaries, offering a design to test when an observability agent shares inference capacity with other investigations."
tags: ["semantic-query-processing", "query-planning", "scheduling", "latency"]
connections: []
featured: false
draft: false
---

Source: [Navigating Runtime Dynamism in Semantic Query Serving](https://arxiv.org/abs/2611.04248) — Hengrui Zhang and colleagues.

## Brief

Zhang and Miao use runtime estimates to choose compatible plans and schedule remaining work. Batch boundaries allow execution to yield without discarding completed processing. Read sections 3, 5, and 8 in about eight minutes.

## Why it matters

My inference: record operator cost, selectivity, and remaining work so a planner can respond to changing incident workloads instead of committing to one plan at the start.

## A design question

Replay mixed short and long investigations under bursty arrivals. Compare fixed plans with batch-level adaptation using median latency, tail latency, total tokens, and complete result equality.

## Evidence and caveat

Recent preprint with a public implementation and controlled workload experiments; not independently reproduced. Its equivalence model ignores stochastic LLM output variation. Concurrent data modification remains future work, so streaming telemetry needs additional consistency handling.

