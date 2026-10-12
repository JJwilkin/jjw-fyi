---
title: "SAG: connect evidence with query-time joins"
number: 27
gallery: research
medium: Research Paper
date: 2026-10-12
summary: "SAG stores short event descriptions and entity keys, then uses SQL joins to connect evidence when a question arrives. It is a useful indexing pattern, but adding new events is not enough when old ones need correcting or retiring."
tags: [structured-retrieval, entity-indexing, sql-joins, index-freshness]
connections: []
featured: false
draft: false
---

Source: [SAG: SQL-Retrieval Augmented Generation with Query-Time Dynamic Hyperedges](https://arxiv.org/abs/2606.15971) — Yuchao Wu and colleagues. June 14, 2026; reviewed August 25 revision. Preprint.

## Brief

SAG combines semantic seed retrieval, shared-entity SQL joins, and joint selection of evidence. It searches compact event descriptions but returns the original chunks. There is no prebuilt global graph.

Read **8 minutes**: sections 3, 5.2, and 5.3.

## Why it matters

My inference for trace search: index a span summary alongside stable source IDs and entity keys. Keep the source available so a compact summary can help discovery without becoming the only evidence.

## A design question

Compare flat semantic retrieval with entity-expanded retrieval on questions needing several spans. Include aliases, repeated service names, and corrected events. Score complete evidence chains, not just individually relevant spans.

## Evidence and caveat

The authors evaluate three multi-hop QA datasets and corpus growth. Their append-only index cannot revise or retire stale events, and entity normalization does not fully resolve aliases. This is not evidence of a complete update strategy for production telemetry. The withdrawn duplicate arXiv entry points to the canonical paper linked above.
