---
title: "High cardinality moves the cost to queries"
number: 29
gallery: research
medium: "Reading Note · Engineering"
date: 2026-10-19
summary: "Wide events keep measurements beside the request details an agent needs to investigate them. This ClickHouse article explains the tradeoff: flexible storage does not make large groupings free. Agents still need scoped queries, memory limits, and a clear definition of what each aggregate measures."
tags: [observability, high-cardinality, query-engines]
connections: []
featured: false
draft: false
---

Source: [ClickHouse vs Prometheus for High Cardinality, Part 2: Cardinality in ClickHouse](https://clickhouse.com/blog/clickhouse-vs-promethous-high-cardinality-part-2-cardinality-in-clickhouse), Rory Crispin and Dale McDiarmid. May 15, 2026. Engineering article.

## Brief

The article explains columnar wide-event storage and shows how filters and aggregation access relevant columns. High-cardinality grouping still builds costly aggregation states; spilling to disk trades latency for lower memory use.

## Why it matters

My inference: an observability agent should use a scoped aggregation tool for population statistics and a separate retrieval tool for representative examples. Neither result should masquerade as the other.

## A design question

Benchmark a tenant-and-time-scoped error count, then group by service and by trace ID. Record scanned bytes, peak memory, latency, and result size. Does the planner recognize the expensive grouping before execution?

## Evidence and caveat

Medium-high implementation detail, but vendor-authored measurements. The article explicitly distinguishes event averages from PromQL range calculations. Similar-looking charts are not proof of equivalent metrics.

Selected reading: **7 minutes** — wide events, query-time cardinality costs, and when Prometheus still makes sense.
