---
title: 'Multi-vector Reranking — Start With a Shortlist'
number: 29
gallery: research
medium: Implementation Guide
date: 2026-10-14
summary: "Qdrant's tutorial uses fast dense search to find candidates and token-level matching to reorder them. It avoids building a separate search graph for the token vectors when they are only used for reranking. The practical limit is simple: reranking cannot recover evidence that never entered the shortlist."
tags:
  - reranking
  - vector databases
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read the Qdrant tutorial →](https://qdrant.tech/documentation/tutorials-search-engineering/using-multivector-representations/)

Qdrant · Undated documentation, checked October 14, 2026

## Brief

The tutorial stores dense and ColBERT vectors on each point. Dense search selects candidates; MaxSim reranks them. It leaves the dense HNSW index enabled but sets `m=0` for the reranking-only token-vector field, avoiding unnecessary graph construction there.

## Why it matters

My inference: this is a small experiment for an existing trace-search service, before replacing its retrieval engine. Preserve exact access and time filters while testing a richer second-stage score.

## A design question

Sweep shortlist sizes of 20, 50, and 100. Compare candidate recall, final relevance, latency, and bytes per trace against the current pipeline. Does the improvement come from the shortlist or the reranker?

## Evidence and caveat

This is executable vendor guidance with a tiny example, not a production benchmark. An omitted trace cannot be rescued by reranking. Read collection setup and the combined retrieval/reranking call: 6 minutes.
