---
title: "OpenTelemetry redaction: test the exported record"
number: 29
gallery: "research"
medium: "Technical documentation"
date: "2026-11-18"
summary: "OpenTelemetry's redaction processor can allow selected attributes and mask matching values before export. Configuration exceptions matter: ignored keys bypass checks, and diagnostic summaries can reveal field names. Test the complete exported record as well as what an agent can infer from it."
tags: ["opentelemetry", "privacy", "telemetry-pipelines"]
connections: []
featured: false
draft: false
---

Source: [OpenTelemetry Collector Redaction Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/redactionprocessor/README.md) — OpenTelemetry contributors.

## Brief

The processor documentation explains allowlists, value masking, ignored-key precedence, and redaction audit attributes. It also describes keyed hashing for low-entropy values. Read Processor Configuration, HMAC Hash Functions, and Audit Trail; allow six minutes. This is living documentation checked November 18, 2026.

## Why it matters

My application to an observability agent: apply explicit collection rules before building search indexes or summaries. Then evaluate whether those rules preserve the identifiers and relationships that authorized incident investigation actually needs.

## A design question

Send synthetic traces containing approved service fields, secret values, numeric identifiers, and an intentionally broad ignored-key pattern through the collector. Compare the complete exported records with expected records, then test incident retrieval on those outputs.

## Evidence and caveat

These are primary implementation docs, not a measured privacy benchmark. Regex and key rules cannot establish that remaining text reveals no sensitive meaning. Check the installed collector version, and test diagnostic attributes as part of the exported data.

