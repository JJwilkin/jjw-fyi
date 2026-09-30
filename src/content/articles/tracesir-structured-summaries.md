---
title: 'Keep actions and observations together in trace summaries'
number: 28
gallery: research
medium: Research Paper
date: 2026-09-30
summary: 'TraceSIR organizes agent traces into ordered steps before compressing long fields and producing diagnostic reports. The useful idea for indexing is to preserve which action produced which observation, with a route back to the original evidence.'
tags: [trace summarization, context engineering, agent evaluation]
connections: []
featured: false
draft: false
---

[Read TraceSIR: A Multi-Agent Framework for Structured Analysis and Reporting of Agentic Execution Traces](https://arxiv.org/abs/2603.00623)

Shu-Xun Yang and colleagues · February 28, 2026 · Preprint

## Brief

TraceSIR separates trace structuring, per-case diagnosis, and cross-case reporting. It selectively compresses long fields while retaining an ordered action-and-observation representation.

## Why it matters

My inference: a searchable summary should preserve the connection between a tool call, its arguments, its result, and the subsequent decision. A fluent paragraph alone may lose that connection. Treat recorded assistant explanations as claims, not privileged access to the model's internal cause.

## A design question

Compare paragraph summaries with step-based summaries at equal token budgets. Check whether each preserves decisive arguments, errors, ordering, and source span IDs, then measure failure localization on held-out traces.

## Evidence and caveat

The authors evaluate report quality on 150 failed tasks using human and model judges. Preferred reports do not establish lossless compression or causal correctness. Cost, latency, and output variability remain acknowledged limitations.

Selected reading: 8 minutes, sections 3, 4, and Limitations.
