---
title: "Agent sessions — Separate work from waiting"
number: 29
gallery: "research"
medium: "Engineering Article"
date: "2026-11-20"
summary: "This production study separates model time, tool time, and pauses while waiting for users. It also examines parallel workers that finish at very different times. For incident investigation, these measurements suggest separating active work from waiting before deciding whether search or the model is too slow."
tags: ["agent-traces", "performance", "parallel-agents"]
connections: []
featured: false
draft: false
---

Source: [From Requests to Sessions: Workload characterization of Agentic Workloads](https://systems.seas.harvard.edu/blog/agentic-traces-freeinference/) — William Nixon / Harvard Systems Group.

## Brief

Nixon describes production coding-agent traces collected through FreeInference. User pauses occupy a large part of session duration, while tools are substantial during active work. Parallel subagents can leave parents waiting for the slowest child. Read sections 2 and 3; the post links its analysis code and dataset.

## Why it matters

My application to observability: retain a waiting reason alongside each long gap, such as user input, queued work, or unfinished children. Otherwise, semantic summaries may blame a slow search operation for time actually spent awaiting another participant.

## A design question

For your longest investigations, can a trace view explain every waiting interval and identify the child that delayed completion? Compare serial and bounded-parallel search on matched tasks while checking evidence completeness and total requests.

## Evidence and caveat

This is a production measurement account, but its coding-agent population may differ from incident responders. Serial latency and acceleration estimates are projections, not randomized comparisons. Reported costs use reference prices rather than actual invoices.
