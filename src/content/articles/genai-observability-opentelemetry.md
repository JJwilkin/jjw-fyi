---
title: 'Inside the LLM Call with OpenTelemetry'
number: 17
gallery: research
medium: Engineering Guide
date: 2026-09-05
summary: OpenTelemetry's emerging GenAI conventions represent an agent run as a portable span tree containing model calls, tool executions, token use, timing, and optional prompt and result content.
tags:
  - OpenTelemetry
  - agent spans
  - observability
connections: []
featured: false
draft: false
---

[Read the OpenTelemetry guide →](https://opentelemetry.io/blog/2026/genai-observability/)

James Newton-King · OpenTelemetry and Microsoft · 2026

## Brief

This walkthrough exports GenAI telemetry over OTLP and explores it with the open-source Aspire Dashboard. A top-level `invoke_agent` span contains `chat` spans for model calls and `execute_tool` spans for tool invocations, alongside standardized model, token, duration, and finish-reason attributes.

## Why it matters

Retrieval and automated diagnosis need a predictable schema before they need a clever search model. These conventions provide a portable hierarchy for indexing individual spans, reconstructing complete runs, and connecting semantic content to latency, cost, and tool behavior.

## A design question

Which fields should remain structured filters, which span contents should be embedded, and which sensitive attributes should be excluded or redacted before indexing?

## Evidence and caveat

The article provides a reproducible local setup using OTLP and an open-source viewer, and shows the conventions already emitted by several coding assistants. It is an instrumentation demonstration rather than a scale study; full prompt and tool content is disabled by default because it may contain sensitive data, and the conventions remain under active development.
