---
title: "When no results mean unknown"
number: 27
gallery: "research"
medium: "Research Paper"
date: "2026-11-02"
summary: "An empty search result needs a coverage check before it supports a negative answer. This paper tests whether language models can tell complete records from partial evidence, even when the facts they see stay the same."
tags: ["retrieval-evaluation", "evidence-coverage", "agent-verification"]
connections: []
featured: false
draft: false
---

Source: [When Absence Is Evidence: Evaluating Completeness-Sensitive Negative Reasoning in Large Language Models](https://arxiv.org/abs/2608.04591) — Byoungjae Min and colleagues.

## Brief

Min and colleagues introduce CROWN-QA, pairing identical questions and observed facts with different coverage descriptions. Models frequently treat incomplete evidence as enough to answer no. Read the task definition, failure modes, and paired results in nine minutes.

## Why it matters

My application: an incident agent should distinguish a complete scoped query from a truncated semantic search. Relevance alone cannot establish that no failing spans exist.

## A design question

Keep returned spans fixed while changing the coverage metadata: full interval, sampled interval, and wrong service. Score both false negatives and unnecessary abstentions.

## Evidence and caveat

Controlled preprint evaluation across three model families. Coverage is stated in the benchmark; it is not independently verified against a real telemetry pipeline.

