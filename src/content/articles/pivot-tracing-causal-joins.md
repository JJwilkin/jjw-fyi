---
title: "Pivot Tracing: join evidence along execution paths"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-11
summary: "Pivot Tracing connects events through the path a request actually took. Its lesson for agent search is to combine relevant text with execution links, while remembering that happening earlier does not prove responsibility for a failure."
tags: [distributed-tracing, happened-before, query-planning, baggage]
connections: []
featured: false
draft: false
---

Source: [Pivot Tracing: Dynamic Causal Monitoring for Distributed Systems](https://doi.org/10.1145/2815400.2815415) — Jonathan Mace, Ryan Roelke, and Rodrigo Fonseca, SOSP, October 2015. [Author-hosted paper](https://cs.brown.edu/~jcmace/papers/mace15pivot.pdf).

## Brief

Pivot Tracing combines dynamic instrumentation with happened-before joins. Selected data travels with a request as baggage, connecting upstream context to downstream measurements across components. Its design also handles branching and rejoining execution paths.

Read **7 minutes**: introduction, section 4 on joins and baggage, and section 6.3 on overhead.

## Why it matters

My takeaway: ask which agent task produced an expensive tool call, not only which service ran it. Execution-linked evidence complements semantic similarity without needing an embedding to rediscover an already recorded relationship.

## A design question

Compare semantic-only evidence retrieval with retrieval expanded along recorded execution links. Include parallel branches, and measure both attribution quality and the cost of carrying extra metadata.

## Evidence and caveat

The authors evaluate Java-based Hadoop systems. Overhead depends on installed queries and baggage size; it is not universally negligible. A happened-before relationship establishes execution order, not proof that changing an earlier event would prevent a failure.
