---
title: "Check what sparse-query pruning removes"
number: 29
gallery: "research"
medium: "Technical documentation"
date: "2026-11-07"
summary: "Elastic's sparse vector query searches weighted tokens and can prune low-value query terms for speed. Pruning is decided per shard, so Elastic recommends rescoring with the removed terms when shards differ. For observability search, test whether pruning changes the evidence you recover, especially for unusual error messages."
tags: ["sparse-retrieval", "elasticsearch", "query-planning", "reranking"]
connections: []
featured: false
draft: false
---

Source: [Sparse vector query](https://www.elastic.co/docs/reference/query-languages/query-dsl/query-dsl-sparse-vector-query) — Elastic.

## Brief

Elastic documents sparse-vector queries using model inference or precomputed weights, plus pruning and rescoring. Because pruning decisions are shard-local, it recommends rescoring with removed terms on multi-shard indexes.

## Why it matters

My application: search quality can change with index layout even when the model is unchanged. Treat pruning and the rescore window as evaluation variables.

## A design question

Run the same labeled incident queries with pruning off, pruning on, and pruning plus rescoring across uneven shards. Compare the complete ranked results and relevant-evidence recall.

## Evidence and caveat

Official implementation documentation, not independent quality evidence. Rescoring only revisits its candidate window; do not assume it restores every omitted result. Read query parameters and the pruning/rescore example (7 minutes). Living documentation checked November 7, 2026.

