---
title: "Measure reliability alongside accuracy"
number: 28
gallery: research
medium: "Paper Note"
date: 2026-10-30
summary: "Two agents can have similar accuracy yet fail in very different ways. This research separates consistency, robustness, confidence, and failure severity. It suggests evaluating whether an incident diagnosis survives repeated runs and small changes to the question."
tags: [agent-evaluation, reliability, fault-injection]
connections: []
featured: false
draft: false
---

Source: [Towards a Science of AI Agent Reliability](https://arxiv.org/abs/2602.16666), Stephan Rabanser and colleagues, February 18, 2026; revised June 2. Selected reading: 8 minutes, Sections 3, 4.1, and 6.

## Brief

The paper proposes twelve metrics covering consistency, robustness, predictability, and safety. Its experiments separate these dimensions from raw task accuracy.

## Why it matters

My application: report diagnosis correctness, repeatability, and costly failures separately. Averages should not hide occasional cross-tenant disclosure.

## A design question

Does the same incident remain correctly diagnosed across five runs, paraphrased questions, and a simulated query timeout?

## Evidence and caveat

Fifteen models are evaluated on GAIA and tau-bench. Each benchmark uses one scaffold, and safety labels rely on model judges. The results do not establish reliability for telemetry investigation.
