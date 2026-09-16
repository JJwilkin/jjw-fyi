---
title: 'Adaptive Sampling — Which Evidence Survives Collection?'
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-16
summary: 'Search cannot recover telemetry that was discarded before indexing. Honeycomb describes adaptive sampling that groups traces by selected attributes and adjusts how much each group retains. For agent investigations, the important test is whether rare failures and complete evidence chains survive the collection budget, not just whether ordinary traffic is well represented.'
tags:
  - OpenTelemetry
  - sampling
  - evidence retention
connections: []
featured: false
draft: false
---

[Read the Honeycomb engineering article](https://www.honeycomb.io/blog/bringing-most-advanced-sampling-opentelemetry-collector)

Mike Goldsmith · September 1, 2026

## Brief

Honeycomb describes an adaptive tail sampler that groups traces by fingerprints and adjusts per-group retention toward a traffic or throughput target. The implementation also buffers spans and attaches sampling information for downstream analysis.

## Why it matters

My inference for semantic-search evaluation: measure what reaches the index before scoring retrieval. A rare agent failure may look ordinary under service or route attributes, so metadata diversity is not automatically behavioral diversity.

## A design question

Replay a labeled workload containing rare failures and late-arriving spans. At a fixed ingest budget, compare sampling policies on retention of complete evidence chains. Keep weighted count accuracy separate from the ability to inspect an individual incident.

## Evidence and caveat

Medium-high implementation evidence, but vendor-authored rather than an independent comparison. At publication, the processor was working toward upstream alpha and available in Honeycomb's distribution. Sampling weights cannot recreate discarded evidence, and a timeout does not prove a trace is complete.

Suggested reading: buffering, fingerprinting, adaptive sample rates, and attribution; about seven minutes.
