---
title: "Missing spans need sampling context"
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-11
summary: "A missing span does not mean an operation never happened. OpenTelemetry's sampling design explains how shared randomness and sampling thresholds help us reason about which traces we can actually observe."
tags: [opentelemetry, sampling, trace-completeness, telemetry-metadata]
connections: []
featured: false
draft: false
---

Source: [OpenTelemetry Sampling update](https://opentelemetry.io/blog/2025/sampling-milestones/) — Joshua MacDonald, Kent Quirk, Otmar Ertl, Peter Findeisen, and Yuanyuan Zhao, October 15, 2025.

## Brief

The post explains consistent probability sampling using shared randomness and rejection thresholds. Services with different sampling rates can retain nested sets of traces; that does not make every retained trace complete. Threshold metadata also supports estimating counts.

Read **7 minutes**: “Consistency by example,” sampling thresholds, and TraceState details.

## Why it matters

My takeaway: an observability agent needs evidence about coverage, not only span content. Preserve known sampling information so “not observed” is not silently turned into “did not happen.”

## A design question

Create a small trace fixture with different service sampling rates. Can the agent distinguish a genuinely absent operation from one whose span was not retained? Evaluate this separately from semantic relevance.

## Evidence and caveat

This is a primary project engineering explanation, not a retrieval benchmark. It describes the design and implementation status in October 2025; verify support in the SDKs you use today. Sampling metadata cannot reconstruct discarded spans.
