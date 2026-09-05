---
title: 'The Retriever Should Remember'
number: 15
gallery: research
medium: Research Paper
date: 2026-09-05
summary: An agent can reuse past relevance judgments, learning which memories proved useful instead of asking a large model to rerank the same evidence from scratch for every query.
tags:
  - agent memory
  - reranking
  - retrieval
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2608.22767)

Qi Feng, Chris Ding, and Jicong Fan · 2026

## Brief

EARM records sparse judgments about which memories helped answer earlier queries. It learns the shared structure of those judgments through online matrix completion, directly scores only a small portion of each new candidate set, and estimates the rest before reranking.

## Why it matters

An observability agent will repeatedly investigate related incidents, services, and failure patterns. The paper suggests retaining not only old traces but also evidence about which traces and spans actually helped earlier diagnoses, turning reranking expense into accumulated retrieval experience.

## A design question

Could a trace-search system record accepted evidence and successful diagnoses as query-to-span usefulness judgments, then use those judgments to reduce expensive reranking over time?

## Evidence and caveat

The authors report up to a 6.62 percentage-point answer-accuracy improvement over semantic retrieval, while directly scoring only 17.5 percent of candidates in one setting. The experiments use the LoCoMo conversational-memory benchmark rather than production telemetry, and matrix completion depends on relevance patterns remaining sufficiently stable.
