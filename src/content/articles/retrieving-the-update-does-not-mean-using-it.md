---
title: "Retrieving the update does not mean using it"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-11"
summary: "An agent can retrieve the latest fact and still answer with an older one. A controlled memory study separates retrieval success from choosing the right version, giving us a useful way to test stale incident summaries."
tags: ["retrieval-evaluation", "agent-memory", "temporal-reasoning"]
connections: []
featured: false
draft: false
---

Source: [When Retrieval Is Not Enough: Obsolete Facts in Agent Memory](https://arxiv.org/abs/2610.36308) — Oleeviya Babu Poikarayil and colleagues.

## Brief

Poikarayil and colleagues replace one unrelated statement with an obsolete fact while keeping the latest fact and evidence size fixed. Both tested Qwen models become less accurate. Read sections 2 and 3, then the scope limits in section 4; allow eight minutes.

## Why it matters

For an observability agent, I would measure whether the current runbook or corrected diagnosis reached the context separately from whether the answer used it. A high retrieval score can hide a wrong operational recommendation.

## A design question

Hold the current diagnosis and context length fixed. Swap one irrelevant span summary for a superseded diagnosis, then compare complete answers and cited evidence. Repeat with unfamiliar service names to reduce effects from model prior knowledge.

## Evidence and caveat

Controlled paired evidence, but only two Qwen models and synthetic single-hop updates. The intervention cohort also informed prompt development; some obsolete values match world knowledge. This does not establish failure rates for production trace search.

