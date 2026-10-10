---
title: Where should a semantic filter run?
number: 28
gallery: research
medium: Research Paper
date: 2026-10-10
summary: The PLOP optimizer weighs model calls against ordinary database work. Filtering early can shrink a join, while filtering later can avoid expensive calls on rows that disappear anyway; neither choice is always cheapest.
tags:
  - semantic search
  - query optimization
  - function caching
connections: []
featured: false
draft: false
---

[Read PLOP →](https://arxiv.org/abs/2604.09944)

Qiuyang Mang and collaborators · April 10, 2026; revised April 24 · Preprint, originally titled Horrila

## Brief

PLOP chooses semantic-filter placement using both model cost and relational cost. On 30 hybrid queries, its cost-based variant reports 1.50-times speedup and 4.18-times lower model cost.

## Why it matters

My inference: a trace-span join needs a plan for both evidence processing and model calls, not simply fewer tokens.

## A design question

Compare early and late classification using human-labeled incidents. Track intermediate rows, repeated prompts, final results and cost.

## Evidence and caveat

The 30-query quality reference is another model execution, not truth. A separate human-labeled benchmark shows smaller gains. Authors attribute output differences to model nondeterminism; answer preservation is not empirically guaranteed.

Selected reading: 8 minutes — introduction and sections 6–7 of revision two.
