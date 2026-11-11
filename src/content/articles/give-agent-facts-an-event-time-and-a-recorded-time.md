---
title: "Give agent facts an event time and a recorded time"
number: 29
gallery: "research"
medium: "Engineering Note"
date: "2026-11-11"
summary: "A newly received fact may describe an old event. Zep shows how separate event and recording timelines let an agent answer what applied during an incident and what information the system had available when it made a decision."
tags: ["temporal-data", "knowledge-graphs", "context-engineering"]
connections: []
featured: false
draft: false
---

Source: [How Zep Context Graphs keep two timelines for every fact](https://www.getzep.com/blog/context-graphs-two-timelines-every-fact/) — Jack Ryan and colleagues.

## Brief

Ryan and Kemp show four edge timestamps, source reference times, contradiction handling, and date-filter queries. Superseded facts remain available for historical questions. Read the timestamp table, reference-time examples, and querying section; allow six minutes.

## Why it matters

My application is incident replay: late telemetry and corrected service metadata should not silently rewrite what the investigating agent knew earlier. The model also suggests attaching validity ranges and source links to summaries before semantic ranking.

## A design question

Ingest a service ownership change a week late. Ask who owned the service during the incident and who the agent believed owned it at investigation time. Assert both complete results, then repeat with ingestion order reversed.

## Evidence and caveat

Concrete vendor implementation guidance, not an independent accuracy evaluation. Dates and contradictions are model-inferred, so the schema cannot guarantee factual correctness. Historical retention also does not satisfy a request to erase information.

