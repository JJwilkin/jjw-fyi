---
title: "Make extra queries earn their cost"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-13"
summary: "Extra query rewrites help when they recover evidence that a strong baseline misses. This study also finds a dataset where merging results hurts. A simulated routing rule uses the baseline ranking score to decide when an extra search is worthwhile."
tags: ["query-rewriting", "retrieval-evaluation", "query-routing"]
connections: []
featured: false
draft: false
---

Source: [Better Together: Complementary Query Rewriting Under a Strong RAG Baseline](https://aclanthology.org/2026.emnlp-industry.143/) — Sara Shanian and colleagues.

## Brief

Shanian and colleagues compare rewriting methods behind a fixed retrieval, reranking, and diversification pipeline. Combining methods helps enterprise-style retrieval but can damage ambiguous-question retrieval. Read sections 5.2–6 of this October 2026 EMNLP paper in nine minutes.

## Why it matters

My inference: benchmark a trace-search expansion against an already strong hybrid baseline. Otherwise a weak starting point can make added LLM calls look valuable even when simpler retrieval tuning would do as well.

## A design question

Compare no expansion, always expansion, and a gate calibrated on held-out incident questions. Report added useful evidence, diagnosis accuracy, p95 latency, and cost by query type. Keep identifier, time-range, and tenant constraints fixed across every rewrite.

## Evidence and caveat

Three-seed experiments and budget controls strengthen the evidence. The router is simulated rather than production tested, and the enterprise corpus is synthetic. A reranker score is not a calibrated probability that a diagnosis is correct.

