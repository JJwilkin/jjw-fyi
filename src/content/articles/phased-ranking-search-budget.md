---
title: 'Phased Ranking — Spend Expensive Scoring on a Shortlist'
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-04
summary: Vespa shows a staged search pipeline that narrows candidates with cheaper ranking before applying a cross-encoder. For trace search, this suggests measuring where useful evidence falls out of the pipeline before spending more on the final model.
tags: [reranking, query engines, semantic search]
connections: []
featured: false
draft: false
---

[Read Minimizing LLM Distraction with Cross-Encoder Re-Ranking →](https://blog.vespa.ai/improving-llm-context-ranking-with-cross-encoders/)

Bjørn C Seime, Arne H Juul, and Jo Kristian Bergum / Vespa · May 8, 2023 · Engineering article

## Brief

The example starts with inexpensive lexical and vector scoring, applies a tree model on each content node, then runs a cross-encoder over a merged shortlist. The expensive global stage runs separately from indexed storage.

## Why it matters

My proposed trace-search design: enforce tenant, access, and time scope before ranking; retrieve broadly inside that boundary; spend heavier scoring on a smaller set. A final reranker cannot recover decisive spans that never reached its input.

## A design question

For a fixed latency budget, does widening the first-stage shortlist or scoring it more deeply recover more required evidence? Measure evidence recall after every stage, not only the final answer.

## Evidence and caveat

Medium engineering evidence: concrete configuration and a linked application, but a vendor implementation account rather than an independent trace-search benchmark. The architecture is transferable; the example's cutoffs are not universal defaults.

Selected reading: 6 minutes — the ranking stages and architecture; skip application setup on a first pass.
