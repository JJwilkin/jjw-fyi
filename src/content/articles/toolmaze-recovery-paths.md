---
title: "Finding another path when tools fail"
number: 28
gallery: research
medium: "Research Note · Preprint"
date: 2026-10-18
summary: "ToolMaze tests whether agents can recover when a tool fails by retrying, taking another route, or stopping safely. Its useful lesson is to measure the recovery path and its cost separately from whether the original task was completed."
tags: [tool-use, query-planning, agent-evaluation]
connections: []
featured: false
draft: false
---

Source: [When Tools Fail: Benchmarking Dynamic Replanning and Anomaly Recovery in LLM Agents](https://arxiv.org/abs/2606.05806), Dongsheng Zhu and colleagues. June 4, 2026. Preprint.

## Brief

ToolMaze generates tool graphs with known routes and injects explicit or hidden, temporary or permanent failures. It scores task success, recovery after encountering a fault, and additional calls. Safe abort can count as recovery without counting as task success.

## Why it matters

My inference: this gives observability teams a concrete way to test route finding. A trace query might fail while logs or metrics remain available; retries are only one possible response.

## A design question

Compare bounded retries, alternative evidence, and safe stopping under a timeout, an unavailable backend, and a stale but valid result. Which policy reaches a supported diagnosis at the lowest call cost?

## Evidence and caveat

Medium-strength benchmark evidence. Generated graphs make alternative routes measurable, but their controlled topology and limited fault classes do not capture open-ended investigations or cascading failures.

Selected reading: **8 minutes** — sections 3.2–3.5, 4.3, and Limitations.
