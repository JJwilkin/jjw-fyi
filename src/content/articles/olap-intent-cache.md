---
title: "Testing query meaning separately from cache correctness"
number: 28
gallery: research
medium: Research Paper
date: 2026-10-17
summary: "This paper turns analytical questions into structured descriptions of metrics, filters, grouping, and time windows before reusing results. Its most useful lesson is about evaluation. A cache can return the correct result for a structured query even when the model misunderstood the user's original question."
tags:
  - structured retrieval
  - semantic caching
  - evaluation
connections: []
featured: false
draft: false
---

[Read the paper →](https://arxiv.org/abs/2602.19811)

Laurent Bindschaedler. February 23, 2026. Extended preprint.

## Brief

The proposed cache matches explicit query signatures rather than nearby embeddings. These describe measures, grouping, filters, time bounds, and post-aggregation operations. Unsupported queries bypass reuse. Read sections 3.3–3.7, 5.3, and 6 in about nine minutes.

## Why it matters

My observability inference: exact retrieval tests and semantic interpretation tests need different expected results. A query for average latency must not reuse a count just because both mention the same service.

## A design question

Create paired tests: first compare the complete parsed intent with a human-written expected intent, then compare the complete cached result with fresh execution on the same snapshot. Include tenant, time zone, percentile versus average, and late-arriving data cases.

## Evidence and caveat

The author reports no false hits on 1,395 controlled queries, but only 44.4% intent accuracy on 63 adversarial questions. The evaluation uses restricted star-schema queries and static snapshots. Schema checks and uncalibrated model confidence do not establish correct interpretation. Live telemetry invalidation remains a separate requirement.
