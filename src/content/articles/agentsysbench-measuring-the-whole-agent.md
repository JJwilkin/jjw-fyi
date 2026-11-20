---
title: "AgentSysBench — Measure the whole agent"
number: 27
gallery: "research"
medium: "Research Preprint"
date: "2026-11-20"
summary: "AgentSysBench measures model calls, tools, and the resources underneath them. Its experiments show that the slowest part can change with the task and deployment. For an observability agent, the practical lesson is to measure the whole investigation before choosing what to speed up."
tags: ["agent-observability", "performance", "benchmarking"]
connections: []
featured: false
draft: false
---

Source: [From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems](https://arxiv.org/abs/2608.15127) — Chaokun Chang and colleagues.

## Brief

Chang and colleagues study ten agent applications with shared instrumentation and controlled deployments. Their toolkit combines operation timing with resource measurements. They show that bottlenecks move when requests, models, tools, or deployment choices change. Read sections 3.3, 4.1, and 6 for the measurement approach and examples.

## Why it matters

My application to telemetry search: record retrieval, reranking, model, sandbox, and waiting steps separately. Preserve parent-child relationships so an investigator can identify the chain that determines completion time, rather than adding overlapping span durations and calling that user latency.

## A design question

On fixed incident questions, can changing retrieval concurrency reduce the 95th-percentile investigation time without lowering diagnosis correctness? Compare the timing of the longest dependent chain, resource use, and total tool calls before and after.

## Evidence and caveat

This preprint reports controlled experiments and production traces, but its measured proportions depend on the tested workloads and hardware. The paper promises a future open-source release; the results are author-reported, not independently reproduced here.
