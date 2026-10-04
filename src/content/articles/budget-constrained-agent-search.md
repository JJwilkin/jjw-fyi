---
title: 'Budget-Constrained Search — Test the Whole Agent Loop'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-04
summary: This study gives search agents visible budgets and compares retrieval, planning, and reasoning choices. For an observability agent, the useful question is which combination finds supported answers within a fixed cost, not which agent searches the longest.
tags: [agentic search, query planning, retrieval evaluation]
connections: []
featured: false
draft: false
---

[Read Quantifying the Accuracy and Cost Impact of Design Decisions in Budget-Constrained Agentic LLM Search →](https://arxiv.org/abs/2603.08877)

Kyle McCleary and James Ghawaly · March 9, 2026 · LREC-accepted paper, arXiv version

## Brief

BCAS exposes remaining budgets and disables search when its allowance is exhausted. Across six models and three question-answering datasets, the authors compare search limits and retrieval choices; the component study also examines planning and reflection.

## Why it matters

My inference: agent evaluation needs both answer quality and the work required to get there. A better retriever may be more useful than another round of deliberation, but that needs a controlled comparison on incident questions.

## A design question

Compare one-shot retrieval with agents allowed one, two, or four searches. Hold candidate-pool size and returned context constant when isolating reranking, and report supported diagnoses alongside cost and tail latency.

## Evidence and caveat

Medium evidence: explicit budgets, ablations, and released code. The tasks use static factual corpora, the full component ablation is limited to HotpotQA, and there is no one-shot non-agentic baseline. The reranked variant also fetches more candidates, so its gains do not isolate the reranker alone.

Selected reading: 8 minutes — Sections 3.3–3.5, 4.2, and 7.
