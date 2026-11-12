---
title: "Compare traces against the right population"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-12"
summary: "Contrast represents trace structure, timing, and meaning in objects that can be merged into comparison groups. An observability agent could use this approach to explain how a failing request differs from comparable healthy requests, while retaining links to the underlying evidence."
tags: ["trace-comparison", "causal-debugging", "telemetry-storage"]
connections: []
featured: false
draft: false
---

Source: [Enabling Multi-Dimensional Distributed Trace Comparison with Contrast](https://arxiv.org/abs/2607.19102) — Vaastav Anand and colleagues.

## Brief

Anand and colleagues introduce mergeable Trace Projection Objects and two comparison interfaces, including an LLM explainer. Their experiments cover injected perturbations and production-derived traces. Read sections 3, 5, and 6.2; allow nine minutes.

## Why it matters

My design inference is to give the agent a comparison operation as well as search. Selecting a healthy baseline with the same operation and workload can reveal missing calls or extra retries that semantic similarity alone may overlook.

## A design question

Compare a failing trace against healthy traces matched by operation, version, and workload. Inject retries, missing spans, and latency changes separately, then check that explanations identify the changed evidence without claiming an unproven cause.

## Evidence and caveat

A concrete system and controlled case studies, not a broad accuracy guarantee for LLM diagnosis. The Uber anomaly set includes artificial node removal and duration changes. Baseline selection remains important, and comparison alone does not establish causation.

