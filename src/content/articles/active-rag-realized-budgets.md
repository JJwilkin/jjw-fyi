---
title: 'Active RAG — Measure the Budget Actually Spent'
number: 27
gallery: research
medium: Research Paper
date: 2026-10-04
summary: A retrieval policy should be judged by whether extra evidence improves the answer at the cost actually paid. This study separates useful retrieval decisions from budget calibration and the expense of deciding whether to search.
tags: [retrieval evaluation, search budgets, agent evaluation]
connections: []
featured: false
draft: false
---

[Read When Should Active RAG Retrieve? →](https://arxiv.org/abs/2607.24010)

Pin Qian and colleagues · July 27, 2026 · Workshop paper, arXiv version

## Brief

The authors compare retrieval triggers by the change in answer correctness, actual evidence usage, and trigger-side computation. A nominal budget is not enough: a threshold calibrated on past questions may spend a different amount on held-out questions.

## Why it matters

My application to observability: evaluate another trace query against the evidence already available, not against an agent guessing live incident facts from memory. Count cases where extra evidence helps, harms, or changes nothing.

## A design question

On held-out incidents, which policy gives the best supported diagnosis at each measured cost? Include probe searches, model calls, and wall-clock time in the comparison.

## Evidence and caveat

Medium evidence: controlled question-answering experiments, mainly with a small model and question-specific paragraph pools. The study tests a binary retrieval decision, not a multi-step investigation; its token-equivalent cost model is not measured production latency.

Selected reading: 8 minutes — Section 3, budget and cost results in Section 5, and limitations.
