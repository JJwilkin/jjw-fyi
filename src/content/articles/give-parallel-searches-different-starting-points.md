---
title: "Give parallel searches different starting points"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-13"
summary: "Parallel search agents can waste effort by starting with almost identical queries. DivInit selects varied starting queries from a shared pool, improving the chance that at least one search succeeds. Choosing the correct final answer remains a separate challenge."
tags: ["agentic-search", "query-diversity", "evaluation"]
connections: []
featured: false
draft: false
---

Source: [Beyond Parallel Sampling: Diverse Query Initialization for Agentic Search](https://arxiv.org/abs/2606.17209) — Sidhaarth Murali and colleagues.

## Brief

Murali and colleagues generate sixteen candidate queries and choose four diverse seeds before running search threads. Their experiments cover five open models and eight benchmarks, with gains at matched compute. Read sections 3–6 and Limitations in eight minutes.

## Why it matters

My inference for incident investigation: separate workers should start from different plausible explanations, such as a deployment change, a slow dependency, and a retry loop. Different wording alone is not evidence that they explored different traces.

## A design question

At a fixed total token and tool-call budget, compare independent workers with deliberately varied starting queries. Measure retrieved trace overlap, unique useful spans, final diagnosis accuracy, and latency; also check whether diversity sends workers outside the authorized time and tenant scope.

## Evidence and caveat

The main pass-at-k metric measures whether any thread succeeds, not whether the system selects its answer. The paper includes an aggregation experiment, but transfer to telemetry investigation is untested. Lexical query diversity is only a proxy for evidence diversity.

