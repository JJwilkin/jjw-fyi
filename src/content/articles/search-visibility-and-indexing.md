---
title: "Durable writes, searchable data, and finished indexes"
number: 29
gallery: research
medium: Engineering Guide
date: 2026-10-12
summary: "A write can be durable and searchable before its optimized index is ready. Turbopuffer's ingestion guide makes the tradeoff concrete: fresh reads can search the write-ahead log, while indexing backlog changes the cost and availability of those reads."
tags: [ingestion, indexing, read-consistency, backpressure]
connections: []
featured: false
draft: false
---

Source: [Ingestion](https://turbopuffer.com/docs/ingestion) — turbopuffer. Undated living documentation, checked October 12, 2026. Companion references: [architecture](https://turbopuffer.com/docs/architecture) and [query consistency](https://turbopuffer.com/docs/query#param-consistency).

## Brief

Writes commit to an object-storage log; indexing happens asynchronously. Strong queries include unindexed writes. If backpressure is disabled and the documented log limit is exceeded, strong queries can return errors while eventual queries remain available with potentially stale results.

Read **7 minutes**: ingestion versus indexing, backpressure, and the query reference's consistency section.

## Why it matters

My inference: an observability agent should distinguish source arrival, durable ingestion, search visibility, and index readiness. Fast search over yesterday's evidence may still be wrong for an active incident.

## A design question

During an indexing backlog, insert a late span, correct a summary, and delete a record. Measure time to the expected visible state using deterministic ID checks, then test semantic ranking separately. Record errors rather than silently switching to stale reads.

## Evidence and caveat

This is a vendor implementation contract, not an independent benchmark. Strong database reads do not repair upstream ingestion delay, stale generated summaries, or application caches. Verify the chosen API mode and limits before relying on it.
