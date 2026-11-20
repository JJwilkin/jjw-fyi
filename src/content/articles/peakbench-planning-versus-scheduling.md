---
title: "PeakBench — A correct plan can still overload the system"
number: 28
gallery: "research"
medium: "Research Preprint"
date: "2026-11-20"
summary: "PeakBench separates two abilities: knowing which tool calls depend on each other, and scheduling those calls within resource limits. A correct plan does not guarantee efficient execution. That distinction gives us a useful way to test parallel search without confusing planning mistakes with overload."
tags: ["tool-use", "evaluation", "resource-scheduling"]
connections: []
featured: false
draft: false
---

Source: [PeakBench: Benchmarking Resource-Aware Tool Invocation in LLM Agents](https://arxiv.org/abs/2608.24509) — Zhi-Kai Chen and colleagues.

## Brief

Chen and colleagues build 300 tool workflows. One evaluation asks agents to recover dependencies; another supplies the verified dependency graph and tests scheduling with resource profiles. They score dependency errors, latency, and capacity violations separately. Read the decoupled evaluation protocol and experimental setup.

## Why it matters

My application to an observability agent: independent searches may still compete for the same database capacity or tenant quota. Evaluating only final-answer accuracy misses a workflow that finds the right evidence while creating an avoidable resource spike.

## A design question

First supply a known dependency graph and compare serial, bounded-parallel, and unrestricted execution. Measure completion time, peak memory, quota violations, and answer correctness. Then let the agent infer the graph, so dependency mistakes have a separate score.

## Evidence and caveat

This preprint uses measured tool profiles, but its scheduling results come from simulation. Workflows are synthesized and the manual audit is imperfect. Resource-aware prompting should therefore be tested against simple scheduling rules on the actual deployment.
