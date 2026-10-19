---
title: "Counting needs complete evidence"
number: 27
gallery: research
medium: "Research Note · Preprint"
date: 2026-10-19
summary: "Finding a few relevant traces is different from counting every matching trace. This paper tests that gap and keeps discarded evidence available for reconsideration. For an observability agent, a useful benchmark should check the matching record set as well as the final number."
tags: [semantic-search, aggregation, retrieval-evaluation]
connections: []
featured: false
draft: false
---

Source: [Aggregation Queries over Unstructured Text: Benchmark and Agentic Method](https://arxiv.org/abs/2602.01355), Haojia Zhu and colleagues. February 1, 2026. Preprint.

## Brief

AGGBench evaluates complete entity sets rather than a handful of relevant passages. The proposed DFA pipeline clarifies the query, filters evidence, and aggregates entities. Filtering uses reversible snapshots, so an overly narrow choice need not permanently lose evidence.

## Why it matters

My inference: “show examples of failed retrieval” and “how many runs had failed retrieval?” need different coverage contracts. A correct-looking count can hide both missing and wrongly included runs.

## A design question

For a fixed tenant and time window, compare the complete expected run-ID set with the selected set before comparing counts. Include duplicate spans, paraphrased failures, and matching records below the retrieval cutoff.

## Evidence and caveat

Medium-strength benchmark evidence. Labels are LLM-assisted and the core corpus is research papers. DFA improves evidence recall, but does not establish completeness or achieve the lowest count error on the expanded corpus.

Selected reading: **8 minutes** — sections 4, 5, and 6.3–6.4.
