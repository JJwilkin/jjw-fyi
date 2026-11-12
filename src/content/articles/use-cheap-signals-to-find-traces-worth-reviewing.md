---
title: "Use cheap signals to find traces worth reviewing"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-12"
summary: "Repeated tool calls, stalled conversations, and execution failures can help prioritize agent traces for review. Signals tests inexpensive rules for this job, while making clear that a trace worth investigating is not the same as a proven agent failure."
tags: ["trace-triage", "sampling", "agent-evaluation"]
connections: []
featured: false
draft: false
---

Source: [Signals: Trajectory Sampling and Triage for Agentic Interactions](https://arxiv.org/abs/2604.00356) — Shuguang Chen and colleagues.

## Brief

Chen and colleagues compare three queues of 100 trajectories each. Human reviewers find 82 percent informative in the signal-selected queue, versus 54 percent in the random queue. Read sections 3, 4.1, and 5; allow seven minutes.

## Why it matters

For an observability agent, I would use these attributes to narrow the inspection queue before expensive semantic analysis. Keep a random audit sample alongside the prioritized queue so quiet factual errors still have a chance of being found.

## A design question

At a fixed review budget, compare random selection, long-run filtering, and loop or stagnation signals. Blind reviewers to selection method and measure actionable findings per reviewed trace, including successful runs and quiet semantic failures.

## Evidence and caveat

Controlled human annotation on two simulated-user domains. Agreement on informativeness was moderate, and the overall gain over the length heuristic was not statistically significant. These rules can miss fluent but factually wrong executions.

