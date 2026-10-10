---
title: Fast token search is not semantic ranking
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-10
summary: ClickHouse describes a native text index that maps tokens to matching rows. It can help find exact log terms cheaply, but choosing evidence by meaning still needs a separate retrieval or ranking step.
tags:
  - full-text search
  - telemetry storage
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read the ClickHouse full-text search release article →](https://clickhouse.com/blog/full-text-search-ga-release)

Melvyn Peignon / ClickHouse · March 10, 2026 · Engineering article

## Brief

The release describes a row-level inverted index for token filtering and aggregation. Preprocessing and tokenization define matching behavior. This is not a relevance engine such as BM25.

## Why it matters

My inference: use exact terms for error codes and service names, but do not assume they cover paraphrased symptoms.

## A design question

Compare complete result sets with and without indexing, including punctuation and case variants. Separately measure whether semantic retrieval finds differently worded evidence.

## Evidence and caveat

Implementation examples and vendor measurements. Demonstrated timings use the fastest of three warm runs, not a cold-cache latency distribution. The article documents the March release.

Selected reading: 7 minutes — what the index does, when to use it and SQL examples.
