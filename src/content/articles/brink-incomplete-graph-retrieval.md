---
title: BRINK — When the Direct Evidence Is Missing
number: 27
gallery: research
medium: Research Paper
date: 2026-10-03
summary: A search agent should be tested with missing evidence, not just complete records. BRINK removes direct graph facts while retaining alternative paths, offering a way to separate simple lookup from reasoning over incomplete data.
tags: [knowledge graphs, retrieval evaluation, missing evidence]
connections: []
featured: false
draft: false
---

[Read the paper →](https://aclanthology.org/2026.eacl-long.114/)

Dongzhuoran Zhou and colleagues · EACL · March 2026

## Brief

BRINK compares complete and incomplete graphs, removing direct answer facts while keeping paths selected through mined rules. The authors report worse answer recovery across six graph-RAG methods and three datasets. They also separate recovering any correct answer from recovering the deliberately hidden one.

## Why it matters

My application to observability: a missing span can turn an easy lookup into a search for independent evidence. Measure whether the agent finds that evidence, not only whether its conclusion sounds right.

## A design question

Create three versions of one incident: full evidence, missing direct evidence with verified alternative support, and insufficient evidence. Compare complete answer sets and cited evidence paths; the last case should allow an explicit unknown. Repeat with opaque service IDs to check dependence on familiar names.

## Evidence and caveat

Peer-reviewed benchmark with explicit metrics. Mined rules can encode correlations rather than guaranteed deductions; they must not be treated as causal proof for telemetry. The tested systems are not a survey of today's frontier agents.

Selected reading: **8 minutes**, sections 3–5, especially metrics and missing-evidence experiments.
