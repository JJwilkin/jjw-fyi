---
title: "Preserve sampling metadata with agent evidence"
number: 29
gallery: "research"
medium: "Implementation Note"
date: "2026-11-12"
summary: "OpenTelemetry’s probabilistic sampling processor documents how collectors coordinate decisions and carry effective sampling thresholds forward. Those details matter when an agent follows span relationships or tries to turn a selected set of traces into a statement about overall traffic."
tags: ["opentelemetry", "sampling", "telemetry-quality"]
connections: []
featured: false
draft: false
---

Source: [Probabilistic Sampling Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/probabilisticsamplerprocessor/README.md) — OpenTelemetry contributors.

## Brief

The processor offers hash-seed, proportional, and equalizing modes. Its documentation explains consistency, conditional sub-trace completeness, and threshold metadata. Read those sections and the mode examples; allow seven minutes. This is living documentation checked on November 12, 2026.

## Why it matters

I would expose sampling probability and completeness information alongside retrieved telemetry. That gives an agent a way to distinguish an absent span from evidence that an operation never happened, and to qualify population-level claims.

## A design question

Replay known traces through two collector tiers with different rates. Compare complete retained span sets and sampling metadata with the expected policy. Include priority overrides and verify that downstream consumers keep the effective threshold.

## Evidence and caveat

Primary implementation documentation, not a benchmark. Consistent sampling does not make every trace complete, and cannot restore upstream losses. Check the deployed Collector version and account for overrides before treating metadata as an inclusion probability.

