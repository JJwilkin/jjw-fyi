---
title: "Bound search fan-out and check every result"
number: 29
gallery: "research"
medium: "Implementation Note"
date: "2026-11-13"
summary: "Elasticsearch can batch several searches in one request while limiting concurrent searches and shard requests. A successful HTTP response can still contain an individual search error or a timeout. An agent needs to track those outcomes separately from an empty result."
tags: ["search-infrastructure", "concurrency", "partial-failures"]
connections: []
featured: false
draft: false
---

Source: [Run multiple searches](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-msearch) — Elastic.

## Brief

Elastic documents the multi-search request format, two levels of concurrency control, and response items that can contain either results or errors. Spend six minutes on the request example, concurrency parameters, and response schema, including timeout and shard information.

## Why it matters

My inference: an observability agent needs a workload budget beneath its reasoning budget. Several modest searches can still overload a large shard set. It also needs to distinguish unavailable evidence from a completed search that found nothing.

## A design question

Run a batch containing a successful trace search, an empty search, and a deliberately invalid query. Check the complete returned outcomes. Then vary the concurrency caps under load and measure p95 latency, queued work, and evidence completeness before choosing a default.

## Evidence and caveat

This is authoritative API documentation, checked November 13, 2026, with no publication date supplied. It specifies mechanics rather than demonstrating relevance gains. Batching alone supplies neither result fusion nor an authorization policy for generated queries.

