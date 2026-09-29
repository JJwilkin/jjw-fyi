---
title: 'Set a recall target for the whole search plan'
number: 27
gallery: research
medium: Research Paper
date: 2026-09-29
summary: 'ConRAD calibrates a whole query plan against a target for missed answers. For trace search, the useful idea is to measure evidence lost across every stage together, while remembering that an average recall guarantee does not promise a complete answer for each incident.'
tags: [semantic search, query planning, recall]
connections: []
featured: false
draft: false
---

[Read ConRAD: Conformal Risk-Aware Neural Databases](https://arxiv.org/abs/2605.03806)

Sonia Horchidan and colleagues · May 5, 2026 · Preprint

## Brief

ConRAD calibrates thresholds jointly across neural graph-query operators against an expected false-negative budget. It combines observed graph edges with predicted links and can bypass neural inference when local evidence suffices.

## Why it matters

My inference for trace search: separately tuning candidate retrieval, reranking, and span expansion can hide cumulative evidence loss. Evaluate the final evidence set, not just each stage's isolated score. Keep inferred relationships visibly distinct from recorded events.

## A design question

Compare fixed top-k with calibrated thresholds on held-out, labeled incidents. Measure final evidence recall, irrelevant spans, and cost. Keep tenant and time filters exact: a recall budget must never relax access control.

## Evidence and caveat

The preprint evaluates three graph benchmarks and query topologies. Its guarantee concerns expected recall under exchangeable calibration and test queries, not each query. Negation and recursion are excluded; new workloads need recalibration. Trace retrieval remains an application to test.

Selected reading: 8 minutes, sections 2.1, 4, and 7.
