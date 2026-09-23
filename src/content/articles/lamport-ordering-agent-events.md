---
title: "Lamport clocks: which event really came first?"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-23
summary: "Parallel agent activity does not always have one meaningful first-to-last order. Lamport's classic paper explains ordering through local execution and message exchange, helping us avoid claiming that an agent ignored a correction it had not yet received."
tags: [distributed-systems, causality, observability]
connections: []
featured: false
draft: false
---

Source: [Time, Clocks, and the Ordering of Events in a Distributed System](https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/), Leslie Lamport, Communications of the ACM, July 1978.

## Brief

Lamport defines happened-before using process order, message delivery and transitivity. Logical clocks preserve this relation, but increasing clock values alone do not prove it.

## Why it matters

My application to agent traces is to retain communication dependencies instead of forcing concurrent work into a causal story based only on timestamps.

## A design question

Inject clock skew and reorder span arrival. Does a summary still identify whether a correction reached the acting worker before its next action, or correctly report that the relationship is unknown?

## Evidence and caveat

A foundational formal model. Happened-before establishes possible influence, not proof that an earlier event caused a later failure; missing instrumentation still limits conclusions.

Selected reading: 8 minutes. Read The Partial Ordering and Logical Clocks in the linked paper.
