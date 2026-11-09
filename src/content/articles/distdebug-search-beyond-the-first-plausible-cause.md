---
title: "DistDebug: search beyond the first plausible cause"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-09"
summary: "Finding a relevant file does not finish a diagnosis. DistDebug tests agents on real distributed-system bugs and finds that weak clues can lead to narrow, unstable searches. For an observability agent, the useful test is whether it finds the evidence that explains the failure."
tags: ["agent-evaluation", "causal-debugging", "agentic-search"]
connections: []
featured: false
draft: false
---

Source: [DistDebug-Bench: Can LLM Agents Diagnose Bugs in Distributed Systems?](https://arxiv.org/abs/2611.03523) — Yuxuan Jiang and colleagues.

## Brief

Jiang and colleagues assemble 120 bugs from 11 distributed systems. Their evaluation separates locating causal code from explaining it, and their trace analysis describes agents becoming attached to an early local explanation. Read sections 3, 4.3, and appendix A.6 in about nine minutes.

## Why it matters

My inference: retrieval evaluation should measure whether evidence completes a diagnosis, alongside relevance and search cost.

## A design question

Compare a single search path with a budget-matched planner that maintains two competing explanations. Score complete cause coverage, irrelevant evidence, and consistency across repeated runs.

## Evidence and caveat

A recent preprint with public benchmark artifacts and manually reconciled labels. Historical issue selection, possible training exposure, and code-location scoring limit transfer to live telemetry investigations. Results were not independently reproduced.

