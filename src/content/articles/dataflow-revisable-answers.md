---
title: Design Answers That Can Be Revised
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-29
summary: The Dataflow model separates the time an event happened from the time it was processed, and makes early results and later corrections explicit. For incident agents, this suggests showing what evidence an answer covers and revising it as delayed telemetry arrives.
tags:
  - streaming
  - event time
  - foundations
connections: []
featured: false
draft: false
---

[Read The Dataflow Model](https://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf)

Tyler Akidau and colleagues, Google · 2015 · Proceedings of the VLDB Endowment

## Brief

Dataflow describes processing unbounded, out-of-order data using windows, triggers, and ways to accumulate or retract results. It makes the tradeoff between timeliness, correctness, and cost explicit rather than assuming input eventually becomes complete.

## Why it matters

My application is to treat incident summaries as revisable outputs. Keep the evidence window and processing cutoff with each summary so later arrivals can trigger a correction with a clear reason.

## A design question

If a late parent span changes the suspected cause, should the agent amend its prior summary, issue a correction, or wait longer initially? Test all three against investigation latency and false conclusions.

## Evidence and caveat

This foundational systems paper draws on Google's processing experience. Its semantics do not validate LLM reasoning, and heuristic watermarks do not prove all evidence has arrived. Applying the model to narrative corrections is a design proposal.

Selected reading: 7 minutes. Read sections 2.3 and 2.4, especially triggers, accumulation, and late-data examples.
