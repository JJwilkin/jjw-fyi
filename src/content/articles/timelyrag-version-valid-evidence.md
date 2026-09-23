---
title: "TimelyRAG: finding the version that was valid"
number: 27
gallery: research
medium: Research Paper
date: 2026-09-23
summary: "A document can match a question perfectly and still describe the wrong version of reality. TimelyRAG combines semantic relevance with temporal signals, suggesting that an observability agent should check when evidence was valid, not just how similar it sounds."
tags: [retrieval, temporal-reasoning, evaluation]
connections: []
featured: false
draft: false
---

Source: [TimelyRAG](https://arxiv.org/abs/2609.11572), Youngeun Nam and colleagues, September 10, 2026. Preprint.

## Brief

The authors rerank retrieved candidates using temporal compatibility. Their benchmark includes nearly identical policy versions whose amendments change the correct answer.

## Why it matters

For telemetry, my inference is that a summary's latest revision should not automatically answer a question about an earlier agent run. Evidence availability and the time a fact describes need separate treatment.

## A design question

Does retrieval find the right evidence for both a historical query and a current query? Measure candidate recall separately: a reranker cannot rescue a missing candidate.

## Evidence and caveat

The synthetic Korean benchmark has a small human-validation pilot. Its historical-query breakdown includes regressions, so temporal weighting is not a universal improvement.

Selected reading: 9 minutes. Read sections 3 and 4 and Appendix C.5.
