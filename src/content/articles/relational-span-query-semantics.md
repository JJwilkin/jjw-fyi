---
title: 'Same trace does not mean same span'
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-30
summary: 'Honeycomb walks through queries that combine information from different parts of a trace. It highlights a subtle testing problem: two attributes can exist somewhere in the same trace without appearing together on one span, and those are different questions.'
tags: [structured retrieval, trace querying, span relationships]
connections: []
featured: false
draft: false
---

[Read Relational Query Superpowers](https://www.honeycomb.io/blog/relational-query-superpowers)

Ken Rimple / Honeycomb · September 7, 2026 · Engineering article

## Brief

The walkthrough uses root, parent, child, and separately bound any aliases to combine attributes across a checkout trace. Conditions sharing one any alias must match the same span; none expresses a trace-wide exclusion.

## Why it matters

My inference: semantic search can find likely traces, but relationship constraints need precise execution. Otherwise an agent can join unrelated observations into a convincing but invalid explanation.

## A design question

Create paired traces: one puts both attributes on one span, the other splits them across siblings. Assert the complete expected result set for same-span and same-trace queries. Add a delayed-span case before making absence claims.

## Evidence and caveat

A concrete vendor tutorial, not a comparative performance study. Relationships are not proof of causation. Missing or late telemetry limits what an absence query can establish.

Selected reading: 7 minutes, the checkout example, additional any aliases, and none.
