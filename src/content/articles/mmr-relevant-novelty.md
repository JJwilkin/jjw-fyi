---
title: 'MMR — What Does the Next Result Add?'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-06
summary: The original MMR paper balances relevance with new information compared with results already selected. For an observability agent, that suggests choosing representative evidence during exploration, then switching to focused retrieval when testing a particular explanation.
tags:
  - information retrieval
  - context selection
  - foundational research
connections: []
featured: false
draft: false
---

[Read the paper](https://doi.org/10.1145/290941.291025) · [Author-hosted PDF](https://www.cs.cmu.edu/~jgc/publication/The_Use_MMR_Diversity_Based_LTMIR_1998.pdf)

Jaime Carbonell and Jade Goldstein · August 1998 · SIGIR

## Brief

MMR chooses each next result using both query relevance and a penalty for similarity to already selected results. The paper connects this to exploratory search and to reducing repetition in summaries.

## Why it matters

Our inference is that repeated retries can consume an agent's context without adding another explanation. But repetition can also be evidence of frequency, persistence, or an ordered failure chain. The retrieval objective must match the investigation question.

## A design question

Try diversity-aware selection while exploring possible causes, then relevance-focused retrieval after selecting a hypothesis. Compare verified explanations per context token, while fetching required parent, child, and retry spans explicitly.

## Evidence and caveat

This is foundational algorithmic work, not evidence of modern agent performance. The document-search pilot involved five users, and the authors qualify their summarization comparisons. The similarity function determines what looks redundant. MMR cannot guarantee causal completeness, and a diversified sample must not be used as a population count.

Suggested reading: the complete two-page paper, about five minutes.
