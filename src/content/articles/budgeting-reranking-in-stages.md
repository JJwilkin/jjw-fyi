---
title: "Budgeting reranking in stages"
number: 29
gallery: "research"
medium: "Technical Documentation"
date: "2026-11-03"
summary: "Vespa separates cheap candidate ranking from more expensive reranking, including a global phase after results from different nodes are merged. This makes candidate budgets explicit and gives a practical way to control the cost of a search tool."
tags: ["query-planning", "reranking", "retrieval-systems"]
connections: []
featured: false
draft: false
---

Source: [Phased Ranking](https://docs.vespa.ai/en/ranking/phased-ranking.html) — Vespa.

## Brief

Vespa documents first-phase and second-phase ranking on content nodes, then optional global ranking in the container. Cross-hit normalization can combine scoring methods. Spend seven minutes on the ranking phases, global normalization, and rank-phase statistics.

## Why it matters

My inference: an observability search tool can expose a bounded reranking budget while recording which stage drops useful spans. That makes latency and evidence loss easier to diagnose.

## A design question

Sweep the candidate and rerank budgets. Plot evidence recall against p95 latency, and identify whether failures originate before or after the global merge.

## Evidence and caveat

Primary implementation documentation, checked November 3, 2026; no publication date asserted. These are Vespa-specific execution semantics, and a later stage cannot restore a candidate discarded earlier.

