---
title: "Agentic Abstention: measure when an agent stops"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-17"
summary: "An agent can waste many calls before admitting a task is impossible. Agentic Abstention measures that delay alongside incorrect refusals on solvable tasks. For observability, the key question is when the actual trace first gives the agent enough evidence to stop."
tags: ["agent-evaluation", "abstention", "context-engineering"]
connections: []
featured: false
draft: false
---

Source: [Agentic Abstention: Do Agents Know When to Stop Instead of Act?](https://arxiv.org/abs/2606.28733) — Han Luo and colleagues.

## Brief

Luo and colleagues study stopping on infeasible tasks across shopping, terminal use, and retrieval-assisted questions. Their CONVOLVE method turns past trajectories into contextual stopping rules. Read sections 5.2, 6, and Appendix A of the November 6 revision; allow eight minutes.

## Why it matters

My inference: an observability agent needs distinct outcomes for a supported answer, unavailable evidence, and an exhausted budget. A late admission of missing telemetry should not receive the same score as recognizing that limit promptly.

## A design question

Create paired solvable and unsolvable investigations. Label the point where each run actually reveals missing telemetry or a missing prerequisite. Measure unnecessary calls after that point and incorrect abstentions on the solvable cases.

## Evidence and caveat

The benchmark uses a fixed earliest-abstention step that may precede sufficient evidence in an individual trajectory. It can therefore penalize reasonable additional investigation. CONVOLVE's held-out WebShop evaluation uses abstention-only tasks, which does not establish preservation of success on solvable tasks.

