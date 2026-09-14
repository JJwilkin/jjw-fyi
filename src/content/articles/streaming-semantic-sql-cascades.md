---
title: "Streaming Cascades: Spend Model Calls Where They Matter"
number: 27
gallery: research
medium: Research Paper
date: 2026-09-14
summary: "A cheap model can handle straightforward records and pass uncertain cases to a stronger model. Streaming cascades learn that boundary as data arrives, but matching the stronger model is not the same as proving the labels correct."
tags: ["semantic SQL","model cascades","streaming"]
connections: []
featured: false
draft: false
---

[Read the source](https://arxiv.org/abs/2604.00660)

Paweł Liskowski and Kyle Schmaus, Snowflake · April 1, 2026; revised July 3, 2026

## Brief

The authors adapt model cascades to independent streaming workers. Two thresholds separate accepted, rejected, and uncertain records; sampled stronger-model labels refine the routing decisions as batches arrive.

## Why it matters

For telemetry, this suggests a way to precompute behavior tags without applying the most expensive model to every span. That transfer is a design hypothesis, not an evaluated trace-search result.

## A design question

Compare cheap-only, strong-only, and adaptive tagging on human-reviewed traces. Measure missed behaviors, false positives, cost, and sensitivity to arrival order. Audit confidently rejected records too.

## Evidence and caveat

Medium-high evidence: a vendor-authored preprint with six datasets and repeated seeds. Scores measure agreement with the oracle LLM, not human ground truth. Quality varies with delegation budget, and conflict resolution or budget fallback can relax targets.

Suggested reading: sections 3, 4.4–4.6, 6.1, and 6.4, about eight minutes.

