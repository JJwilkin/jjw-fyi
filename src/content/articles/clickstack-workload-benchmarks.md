---
title: "ClickStack: Benchmark the Whole Telemetry Workload"
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-14
summary: "ClickHouse describes improving telemetry search through schema changes, indexes, and query rewrites. The useful lesson is to test the whole workload, including ingestion and storage, because a faster lookup can make another operation more expensive."
tags: ["observability","query performance","benchmarking"]
connections: []
featured: false
draft: false
---

[Read the source](https://clickhouse.com/blog/making-clickstack-5x-faster-clickhouse-observability)

Aaron Knudtson, ClickHouse · July 2, 2026

## Brief

The team evaluates primary-key changes, text indexes, materialized views, and query rewrites against representative telemetry queries. Each iteration measures ingestion, read-service resources, and query performance rather than optimizing one isolated query.

## Why it matters

An observability agent alternates between exact lookups, broad searches, counts, and attribute discovery. My inference is that these paths should share a workload benchmark before we select a new indexing design.

## A design question

Run trace-ID lookups, behavior-candidate searches, population counts, and attribute discovery while ingesting. Which index improves the combined workload without unacceptable write, storage, or latency regressions?

## Evidence and caveat

Medium-high evidence: a detailed vendor implementation account. The headline speedup comes from the authors' fixed workload and compute-separated services, not our deployment. It measures database performance, not whether semantic results are useful.

Suggested reading: Identifying areas for improvement, Testing approach, Evaluating improvements, and primary-key design, about seven minutes.

