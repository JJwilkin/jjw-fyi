---
title: "Event latency: when telemetry arrives late"
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-23
summary: "The same query over the same time window can return a different count when late telemetry arrives. Honeycomb's engineering account separates event time from ingestion time, a useful reminder that an agent should not confuse missing evidence with evidence that nothing happened."
tags: [observability, ingestion, data-quality]
connections: []
featured: false
draft: false
---

Source: [Event Latency: What It Is and Why You Should Care](https://www.honeycomb.io/blog/ingest-timestamps-debug-event-latency), Ian Wilkes, Honeycomb, March 16, 2021.

## Brief

Honeycomb describes delayed events caused by buffering, long spans and inaccurate clocks. One investigation traced unusually late telemetry to a background thread frozen in an AWS Lambda process.

## Why it matters

My inference is that ingest-time summaries need an explicit update policy. A late success span can change a trace previously summarized as an unresolved failure.

## A design question

Delay a decisive span, query the incomplete trace, then deliver it. Does the summary update, and does the agent distinguish what is known now from what was available earlier?

## Evidence and caveat

A concrete first-party incident account. The durable lesson is timestamp separation; its historical product timings are not present-day guarantees.

Selected reading: 5 minutes. Read the full article, especially the repeated-count experiment.
