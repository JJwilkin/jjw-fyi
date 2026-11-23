---
title: "Hearsay-II: specialists sharing hypotheses"
number: 30
gallery: "research"
medium: "Research paper"
date: "2026-11-23"
summary: "Hearsay-II coordinated specialist programs through a shared blackboard of hypotheses. Its enduring lesson for observability agents is to retain competing explanations and schedule useful next steps, while allowing each specialist to keep efficient private working data."
tags: ["agent-design", "memory", "query-planning"]
connections: []
featured: false
draft: false
---

Source: [The Hearsay-II Speech-Understanding System: Integrating Knowledge to Resolve Uncertainty](https://mas.cs.umass.edu/Documents/Erman_Hearsay80.pdf) — Lee D. Erman and colleagues.

## Brief

Erman and colleagues describe independent knowledge sources that read and update shared hypotheses. A control mechanism selects promising incremental actions under limited computation.

## Why it matters

My inference: logs, traces, and deployment specialists could share evidence and competing causes without exchanging a growing chain of prose summaries.

## A design question

Replay an ambiguous incident with two plausible causes. Compare fixed-order specialists with scheduling driven by unresolved evidence, measuring cost and whether alternatives survive until tested.

## Evidence and caveat

A foundational architecture grounded in speech understanding, not a modern LLM evaluation. The paper warns that forcing every internal computation through a uniform blackboard can severely hurt efficiency.
