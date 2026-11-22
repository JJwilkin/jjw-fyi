---
title: "One schema for ingestion and retrieval"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-22"
summary: "Executable Schema Contracts uses an observed field catalog to constrain extraction and guide an agent among structured, graph, and vector searches. The useful lesson is that valid field names prevent one class of errors, while relationships between those fields still need separate checks."
tags: ["query-planning", "knowledge-graphs", "structured-retrieval"]
connections: []
featured: false
draft: false
---

Source: [Executable Schema Contracts: From Automatic Ingestion to Multi-Source Retrieval](https://arxiv.org/abs/2606.05415) — Padmaja Jonnalagedda and colleagues.

## Brief

Jonnalagedda and colleagues share an induced schema between graph ingestion and retrieval routing. A catalog limits field references to observed inputs, while structural analysis supplies identity and linking information.

## Why it matters

My inference: span indexing and query planning could share one contract for identifiers, timestamps, parent links, and searchable text.

## A design question

Benchmark exact span filters separately from semantic evidence ranking. Add cases where valid fields are joined through a relationship that the source does not support.

## Evidence and caveat

Controlled comparisons and ablations cover four public QA benchmarks. Valid field references do not prevent spurious relationships. Production scale and governance are unvalidated; optional query-time extension adds latency.
