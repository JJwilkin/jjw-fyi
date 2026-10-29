---
title: Missing Evidence May Still Be Arriving
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-29
summary: This Flink guide explains how quiet partitions can hold back event time and how replay can classify late data differently from a live run. An observability agent should know how far ingestion has progressed before concluding that an event never happened.
tags:
  - streaming
  - watermarks
  - observability
connections: []
featured: false
draft: false
---

[Read the engineering guide](https://developer.confluent.io/blog/all-about-flink-watermarks-1/)

Lorenzo Nicora, Confluent · September 7, 2026 · Engineering guide

## Brief

The guide follows watermarks through Flink sources and operators. Progress depends on active inputs; idle detection changes which inputs count. It also explains why wall-clock timing and restarts can make live and replay lateness differ.

## Why it matters

My inference for telemetry search is that an empty result needs ingestion context. A quiet service, delayed partition, and genuinely absent event can produce similar search results with different meanings.

## A design question

Replay an incident with one delayed partition and one idle partition. Does the agent qualify missing evidence using ingestion progress, then revise its conclusion when delayed spans arrive?

## Evidence and caveat

This is a detailed vendor-authored implementation account, scoped to Flink SQL and Table API with Kafka sources. It is not an agent benchmark, and its version-specific behavior should be checked against the deployed runtime.

Selected reading: 7 minutes. Read Idle Partition Detection, Watermarks vs Checkpoints, and Watermarks and Lateness are Non-Deterministic.
