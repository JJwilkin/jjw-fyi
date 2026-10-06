---
title: 'Practical MMR — Leave Room for Different Evidence'
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-06
summary: Qdrant shows how to select varied results from a larger set of relevant candidates. We could use this to stop repeated spans from filling an investigation's context, while keeping exact counts and required causal links outside the diversity tradeoff.
tags:
  - reranking
  - retrieval diversity
  - trace search
connections: []
featured: false
draft: false
---

[Read the engineering article](https://qdrant.tech/blog/mmr-diversity-aware-reranking)

Thierry Damiba, Qdrant · September 4, 2025

## Brief

The tutorial combines metadata filters with a candidate pool and maximal marginal relevance, or MMR. Selection balances query similarity against similarity to results already chosen. Returned scores remain query-similarity scores, so sorting by score again would undo the intended order.

## Why it matters

Our proposed trace-search experiment is to compare ordinary top-k, grouping by trace identifier, and MMR. Each may reduce repeated context differently. None replaces an exact query for how many failures occurred.

## A design question

Within fixed tenant and time filters, does MMR uncover more distinct failure mechanisms without losing the spans needed to explain each one? Keep context size fixed and report both mechanism coverage and missing causal links.

## Evidence and caveat

This is a vendor implementation tutorial using fashion images, not a telemetry benchmark. Its closing tuning advice reverses the parameter direction: follow the [official search documentation](https://qdrant.tech/documentation/search/search-relevance/), where diversity zero favors relevance and one favors diversity. Diverse vectors do not guarantee complete or correct evidence.

Suggested reading: steps 4–5 and the official MMR parameter notes, about seven minutes.
