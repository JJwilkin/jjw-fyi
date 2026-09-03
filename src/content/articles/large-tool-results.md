---
title: Dealing with Very Large Agent Tool Results
number: 9
gallery: research
medium: Engineering Note
date: 2026-09-02
summary: Large tool outputs should be treated as queryable evidence rather than dumped into context, with explicit truncation and a path for the agent to reformulate its request.
tags:
  - context engineering
  - tool design
  - observability
connections: []
featured: false
draft: false
---

[Read the original engineering post →](https://blog.firetiger.com/agent-engineering-patterns-dealing-with-very-large-tool-results/)

Spencer Nelson at Firetiger · March 25, 2026

## Brief

Firetiger describes capping oversized tool results, telling the model exactly what was omitted, and preserving enough structure for the agent to issue a narrower query. In its example, raw log rows overflow the budget, but a second aggregated SQL query gives the investigation a compact description of the error population.

## Why it matters

Observability tools routinely return more text than a model should read. The durable artifact and the query interface are the real context; the tokens shown to the model are only one temporary view over that evidence.

## A design question

Can every oversized result return a compact profile, explicit truncation metadata, and suggested dimensions for a follow-up query instead of silently clipping bytes?

## Evidence and caveat

The post provides implementation patterns and a production-flavored investigation example. The token threshold and presentation choices are experience-based rather than the result of a controlled comparison across models and tasks.
