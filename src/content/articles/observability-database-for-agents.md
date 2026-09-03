---
title: An Observability Database for Agents, Not Humans
number: 6
gallery: research
medium: Engineering Note
date: 2026-09-02
summary: Firetiger derives a telemetry architecture from agent behavior, trading dashboard-grade latency for high-cardinality retention, large amounts of parallel exploration, and fresh data.
tags:
  - observability
  - data architecture
  - agent infrastructure
connections: []
featured: false
draft: false
---

[Read the original engineering post →](https://blog.firetiger.com/we-built-an-observability-database-for-agents-not-humans/)

John P. Pugliesi at Firetiger · March 24, 2026

## Brief

Firetiger starts from a different consumer for telemetry: an agent may tolerate slower individual queries but issue hundreds concurrently while exploring hypotheses. Its datastore uses Iceberg and Parquet on object storage, a DuckDB-derived query engine, and independently scalable compute to retain high-cardinality data without optimizing everything for interactive dashboards.

## Why it matters

Agentic investigation changes the database workload. Retention, query concurrency, isolation, freshness, and the cost of ruling out hypotheses can matter more than a uniformly sub-second response time.

## A design question

What query latency is acceptable if it buys enough concurrency and retained detail for several investigations to explore independently without sampling away the decisive evidence?

## Evidence and caveat

This is a concrete production architecture account with clear requirements and implementation choices. It comes from the company building and selling the system, and it does not provide an independently reproduced cost or reliability comparison.
