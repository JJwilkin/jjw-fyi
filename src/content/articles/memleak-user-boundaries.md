---
title: 'MemLeak: useful answers can still leak private context'
number: 27
gallery: research
medium: Research Paper
date: 2026-10-09
summary: 'A small study shows that helpful answers can contain another user’s private memories. For trace search, measure unauthorized context separately from answer quality, and enforce permissions outside the model.'
tags:
  - agent-memory
  - retrieval-evaluation
  - access-control
connections: []
featured: false
draft: false
---

[Read the paper →](https://arxiv.org/abs/2610.04195)

Priyanka Mudgal and colleagues, Workday · October 3, 2026 · Preprint

## Brief

MemLeak tests pooled agent memories and finds that ordinary similarity search can select another user's notes. Its answer-quality scores can remain high despite private information entering the response. Strict user-scoped filtering and hard ownership checks succeed in the tested conditions.

## Why it matters

My inference for observability: a convincing incident explanation could use a forbidden project's trace. Helpfulness and authorization need separate evaluation.

## A design question

Can near-identical traces in two projects produce a useful answer without exposing unauthorized spans, summaries, or tool results?

## Evidence and caveat

Read sections 3.5, 4.2, and 4.10 in about eight minutes. This is a controlled study with hand-authored fixtures and ten queries per condition, not a production leakage estimate. It does not demonstrate bypassing correctly enforced permissions. Ownership alone also does not represent legitimate shared access.
