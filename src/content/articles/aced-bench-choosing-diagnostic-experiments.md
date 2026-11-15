---
title: "ACED-Bench: choosing the next diagnostic experiment"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-15"
summary: "A useful debugging agent must decide what evidence to collect next. ACED tests that skill in simulated systems with known causes. Its lesson for observability is to measure experiment choice, successful repair, and explanation quality separately."
tags: ["agent-evaluation", "causal-debugging", "experiment-design"]
connections: []
featured: false
draft: false
---

Source: [ACED-Bench: Evaluating How LLM Agents Acquire and Act on Causal Evidence](https://arxiv.org/abs/2610.14381) — Yiwei Chen and colleagues.

## Brief

Chen and colleagues evaluate agents against hidden causal simulators. The repair task permits fifteen experiments and tests the proposed fix against the true objective. The November 8 revision reports acceptance between zero and forty-three percent. Read sections 3.2–3.3, 5.1, 5.5, and 6; allow nine minutes.

## Why it matters

My inference: a trace-search benchmark should reward collecting evidence that changes the diagnosis, alongside retrieving relevant spans. Finding the right component does not establish which change would actually repair it.

## A design question

In a staging simulator with known single and paired faults, compare an agent with a simple rank-and-test baseline under the same experiment budget. Score informative probes, actual repair, and the causal explanation separately.

## Evidence and caveat

The causal worlds are synthetic and omit temporal dynamics and measurement error. A classical baseline nearly matches the best agent's fix rate; acceptance also considers the explanation. This is useful benchmark evidence, not proof of production debugging ability.

