---
title: 'Agent Zero Memory — Provenance-Aware Long-Term Memory'
number: 12
gallery: research
medium: Research Paper
date: 2026-09-04
summary: Agent Zero Memory uses a timeline, an entity-event graph, and a curated documentary memory in parallel, then searches each with hybrid retrieval while keeping citations tied to evidence the agent actually opened.
tags:
  - agent memory
  - hybrid retrieval
  - provenance
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2608.29606)

Ming Wu and Pengyuan Zhu · Zero Labs · 2026

## Brief

Agent Zero Memory keeps three complementary representations: an event timeline for temporal changes, an entity-event graph for multi-hop connections, and a hierarchical documentary memory for durable facts. Each store supports embedding and lexical search, and the agent may cite only evidence it actually opened.

## Why it matters

The architecture rejects the idea that one vector index should answer every question. For an observability agent, traces, entities, and trusted documentation may also deserve separate retrieval structures joined by explicit provenance rather than flattened into one chunk store.

## A design question

Would an investigation improve if it searched a trace timeline, a service-and-entity graph, and curated runbooks independently, then merged only evidence with inspectable lineage?

## Evidence and caveat

The authors report 95.60 percent on LongMemEval and 93.60 percent on LoCoMo, plus a controlled eight-model study where accuracy moved 3.4 points while cost varied by roughly thirty times. The leaderboard comparisons use results from different harnesses, the benchmarks rely on an LLM judge, and the paper does not yet isolate the contribution of each of its three memory stores.
