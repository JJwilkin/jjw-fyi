---
title: 'Dapper — The Evidence Layer Beneath an Observability Agent'
number: 30
gallery: research
medium: Technical Report
date: 2026-09-16
summary: 'Google’s Dapper report explains how shared instrumentation, trace identifiers, parent links, and sampling made distributed tracing useful at scale. Its relevance to modern agents is simple: preserve the structure and coverage of recorded activity before adding semantic summaries. Missing telemetry should not be mistaken for evidence that an action never happened.'
tags:
  - distributed tracing
  - instrumentation
  - provenance
connections: []
featured: false
draft: false
---

[Read the Google Research report](https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/)

Benjamin H. Sigelman and colleagues · April 2010

## Brief

Dapper describes Google's production tracing infrastructure, including shared-library instrumentation, trace and span identifiers, parent relationships, collection, and sampling. The report connects low overhead with broad, continuous deployment.

## Why it matters

My takeaway for observability agents is to keep recorded execution structure distinct from inferred meaning. A semantic summary should point back to spans, not replace the evidence needed to check its claims.

## A design question

Run a known workflow and compare expected tool calls with collected spans before evaluating search. If one span is missing, can the investigation report incomplete coverage instead of concluding that the action never occurred?

## Evidence and caveat

High foundational value from production experience. The report concerns Google's 2010 workloads and infrastructure, not modern LLM reasoning. Its sampling and overhead findings do not establish complete evidence capture for rare agent failures.

Suggested reading: sections 2.1–2.5 and 4.4; about seven minutes.
