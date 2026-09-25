---
title: "Give summaries a simple baseline to beat"
number: 28
gallery: research
medium: "Paper Notes"
date: 2026-09-25
summary: "A coding-agent study found that hiding older tool outputs was competitive with language-model summaries. Before adding a smarter summarizer, compare it with a simple context window and measure the whole investigation."
tags: [context-engineering, summarization, evaluation]
connections: []
featured: false
draft: false
---

Source: [The Complexity Trap](https://arxiv.org/abs/2508.21433), Tobias Lindenbauer and colleagues, August 29, 2025; version 3 revised October 27. DL4C workshop paper.

## Brief

The authors compare retaining full histories, masking older observations, and summarizing them. On coding tasks, simple masking competes with summarization on solve rate and cost. The revision also tests a combined strategy.

## Why it matters

My inference: a trace-summary system needs a cheap baseline. Semantic sophistication alone does not establish better evidence retrieval or a cheaper investigation.

## A design question

Compare full results, recent results with older outputs hidden, and structured summaries. Measure missed evidence, repeated queries, completion, and total cost. Keep raw spans stored and recoverable in every condition.

## Evidence and caveat

The paper releases code and data. Its coding workload has unusually verbose tool outputs, so the findings do not establish that masking is best for telemetry. Context masking is not a recommendation to delete stored evidence. Hybrid and OpenHands results use a smaller benchmark subset.

Selected reading: **8 minutes**. Read sections 3.1, 4, 5.3, and 6 in version 3.
