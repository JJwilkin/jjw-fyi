---
title: 'SmithDB — A Data Layer for Agent Observability'
number: 21
gallery: research
medium: Engineering Article
date: 2026-09-06
summary: LangChain built an object-storage-backed trace database around long-running, nested agent spans, progressive queries, late materialization, event merging, and time-aware compaction.
tags:
  - trace storage
  - query engines
  - object storage
connections: []
featured: false
draft: false
---

[Read the LangChain engineering article →](https://www.langchain.com/blog/introducing-smithdb)

Ankush Gola · LangChain · 2026

## Brief

SmithDB combines durable object storage, a small Postgres segment catalog, and stateless ingestion, query, and compaction services. It treats an unfinished run as a sequence of events, scans recent segments progressively, keeps large payloads separate until requested, and gradually compacts older data into query-efficient files.

## Why it matters

Agent traces mix random lookup, metadata filters, text search, tree predicates, aggregates, and enormous JSON payloads. SmithDB's key lesson is that one physical representation should not be forced to serve every part of the query: compact searchable columns can locate evidence before the system fetches expensive prompt and tool content.

## A design question

What is the minimum span index needed to find a promising trace, and which large fields can remain in object storage until the investigator or reranker explicitly projects them?

## Evidence and caveat

LangChain reports median latencies of 92 milliseconds for trace-tree loads, 82 milliseconds for run filters, and 400 milliseconds for full-text search, with all United States cloud ingestion and tracing queries on the system. These are vendor-reported measurements over undisclosed workloads, and independent reproduction details are limited.
