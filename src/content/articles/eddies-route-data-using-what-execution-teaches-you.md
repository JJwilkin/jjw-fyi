---
title: "Eddies: route data using what execution teaches you"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-10"
summary: "Eddies proposed changing a query's operator order while it runs, using feedback from the data flowing through it. The lesson for semantic systems is to adapt to observed costs while keeping track of which required operations each record has already completed."
tags: ["adaptive-query-processing", "query-planning", "streaming"]
connections: []
featured: false
draft: false
---

Source: [Eddies: Continuously Adaptive Query Processing](https://www.cs.cmu.edu/~15721-f24/papers/Eddies.pdf) — Ron Avnur and colleagues.

## Brief

Avnur and Hellerstein replace a fixed execution order with a tuple router that observes operators and adjusts routing. Their design explicitly considers when stateful operators can be reordered safely. Read the introduction and sections 3 and 4 in about seven minutes. Published at SIGMOD 2000.

## Why it matters

My inference: an agent's query executor can learn from intermediate results, but needs explicit completion state so adaptation never skips or repeats required processing.

## A design question

Change predicate selectivity halfway through a replay. Does adaptive ordering recover its overhead while returning exactly the same final records as a fixed reference plan?

## Evidence and caveat

Peer-reviewed foundational systems work with an early implementation. The experiments concern relational operators, not probabilistic model calls; dependencies, side effects, and model variability need separate treatment in an agent system.

