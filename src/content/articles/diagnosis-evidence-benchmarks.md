---
title: 'Score the evidence behind a diagnosis'
number: 27
gallery: research
medium: Research Paper
date: 2026-09-30
summary: 'A microservice diagnosis benchmark separates finding the faulty component, naming the fault, and showing supporting evidence. For an observability agent, this suggests checking the evidence behind an answer instead of rewarding a correct service name alone.'
tags: [agent evaluation, evidence retrieval, root cause analysis]
connections: []
featured: false
draft: false
---

[Read A Multi-Dataset Benchmark for Evaluating LLM Agents in Microservice Failure Diagnosis](https://arxiv.org/abs/2606.29193)

Yuanhong Cai and colleagues · June 28, 2026 · Preprint

## Brief

The authors provide 503 expert-labeled fault cases across two microservice demos. Their evaluation separates localization, fault identification, and support from key observations or a causal chain.

## Why it matters

My inference: a plausible diagnosis can hide weak retrieval. Label the observations needed to support each conclusion, not just the expected answer.

## A design question

For ten incidents, score the exact entity, fault type, and supporting evidence separately. Include a correct diagnosis with irrelevant citations as a negative case. Review alternative valid evidence paths rather than automatically penalizing them.

## Evidence and caveat

Detailed datasets and evaluation protocols, but controlled faults on small systems. Labels can miss valid paths, and matching evidence mentions does not prove causal reasoning. The paper's trace-length efficiency proxy does not measure actual latency or token cost.

Selected reading: 8 minutes, sections 3, 4.4, 5.3–5.4, and 6.
