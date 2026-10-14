---
title: 'LEMUR — Make Richer Matching Cheaper to Search'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-14
summary: LEMUR learns a compact search representation that approximates a multi-vector matching score, then checks the shortlist with the original score. Its benchmark separates finding the model's nearest matches from judging whether those matches are actually useful, a distinction worth keeping in trace-search evaluations.
tags:
  - multi-vector retrieval
  - approximate search
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2601.21853)

Elias Jääsaari, Ville Hyvönen, and Teemu Roos · ICML 2026 · January 29, revised May 21, 2026

## Brief

LEMUR learns a corpus-specific approximation to MaxSim, searches the resulting single-vector index, then reranks candidates with exact MaxSim. New documents can receive fitted weights while the feature encoder stays fixed.

## Why it matters

My inference: this separates two observability decisions—how rich the evidence representation should be, and how cheaply we can search it. A faster index need not require a weaker final scoring function.

## A design question

Measure three things separately: recovery of exact MaxSim neighbors, human-labeled incident relevance, and investigation success. Add ingest-to-search delay and p95 latency under continuous span arrivals.

## Evidence and caveat

The authors benchmark multiple text and visual models, including a relevance check in Appendix C. Their main recall metric targets exact score neighbors, not human judgments. Streaming updates and corpus drift still need workload-specific testing. Read sections 3, 4.2, 6.1 and Appendix C: 9 minutes.
