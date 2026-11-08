---
title: "A failed run can still contain useful exploration"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-08"
summary: "TRIAGE labels agent steps as decisive progress, useful exploration, no progress, or regression. It uses those labels to adjust training credit while keeping the final verifier outcome. For trace analysis, these roles offer a way to distinguish a useful diagnostic read from a repeated call that adds no information."
tags: ["agent-evaluation", "credit-assignment", "reinforcement-learning", "trace-analysis"]
connections: []
featured: false
draft: false
---

Source: [TRIAGE: Role-Typed Credit Assignment for Agentic Reinforcement Learning](https://arxiv.org/abs/2606.32017) — Yuanda Xu and colleagues.

## Brief

TRIAGE adds structured step-role judgments to outcome-based training. The authors report improvements across ALFWorld, Search-QA, and WebShop and audit whether judges recognize useful steps in failures and regressions in successes.

## Why it matters

My inference: these labels could make observability traces easier to search and review. Keep the preceding state and observations, because identical tool calls can serve different roles.

## A design question

Have reviewers label successful runs containing wasted steps and failed runs containing useful searches. Does an automated judge agree without simply copying the final outcome?

## Evidence and caveat

Moderate experimental evidence; reviewed version 3, July 17, 2026. Role labels are fallible semantic estimates, not proof of causal necessity, and judging adds compute cost. Read sections 3, 5.3, and 6 (8 minutes).

