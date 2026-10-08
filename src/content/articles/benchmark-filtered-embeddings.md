---
title: 'Benchmark the Filters Your Agent Actually Uses'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-08
summary: A filtered-search benchmark should use realistic embeddings and metadata, not just an easy unfiltered workload. This study compares eleven methods and shows that filter support, tuning effort, memory, and build time all affect the choice.
tags:
  - retrieval benchmarks
  - metadata filters
  - vector indexes
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2507.21989)

Patrick Iff and colleagues · July 29, 2025; revised April 1, 2026 · Preprint

## Brief

The authors release embeddings for over 2.7 million paper abstracts with eleven metadata attributes. Their benchmark compares eleven methods across exact-match, range, and set-membership filters, including tuning and resource costs.

## Why it matters

My inference: performance on generic vectors may not predict performance on trace summaries. Timestamp ranges, service labels, and permission sets deserve distinct workloads.

## A design question

At a fixed neighbor-recall target, compare throughput, memory, construction time, and tuning budget across the filter types the agent uses.

## Evidence and caveat

The released benchmark reports five repeated runs, but its queries are synthesized and its greedy parameter search can miss better settings. Different machines across dataset sizes also complicate scaling comparisons. Neighbor recall does not measure incident usefulness.

Selected reading: 8 minutes; dataset design, methodology, and large-dataset results.
