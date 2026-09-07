---
title: 'MemForest — Keeping Searchable Memory Up to Date'
number: 24
gallery: research
medium: Research Paper
date: 2026-09-07
summary: MemForest keeps time-ordered evidence beneath summaries that can be refreshed when new information arrives. It offers a useful approach for sessions that keep growing, where search must preserve earlier mistakes, later corrections, and the steps between them.
tags:
  - temporal indexing
  - agent memory
  - incremental summaries
connections: []
featured: false
draft: false
---

[Read the paper on arXiv](https://arxiv.org/abs/2605.23986)

Han Chen and colleagues · May 2026, revised July 31

## Brief

MemForest stores evidence in temporal trees and treats summaries and embeddings as derived data. New records trigger refreshes along affected paths. Retrieval combines summary and fact matches before exploring finer evidence.

## Why it matters

An observability index needs both the final outcome and the path to it. Preserving intermediate states could help answer whether an agent recovered after a correction without rewriting the entire session after every span.

## A design question

How long after a new span arrives can a query find its evidence, and which summaries must be rebuilt?

## Evidence and caveat

The paper evaluates conversational memory benchmarks. Its speedups use substantial parallelism and do not imply lower token cost. Same-user queries block during ingestion, and the implementation lacks distributed crash-safety guarantees. Extracted facts are not automatically verified.

Suggested reading: sections 3, 4.3–4.5, and appendix F.3, about eight minutes.
