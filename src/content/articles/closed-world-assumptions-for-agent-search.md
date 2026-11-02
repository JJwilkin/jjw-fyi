---
title: "Closed-world assumptions for agent search"
number: 30
gallery: "research"
medium: "Foundational Paper"
date: "2026-11-02"
summary: "Raymond Reiter explains when a database may treat an unprovable fact as false. The same distinction matters for agent search: missing evidence can support a negative conclusion only when the assumptions about what the database knows are justified."
tags: ["knowledge-representation", "query-semantics", "evidence-coverage"]
connections: []
featured: false
draft: false
---

Source: [On Closed World Data Bases](https://www.cs.ubc.ca/sites/default/files/tr/1977/TR-77-16.pdf) — Raymond Reiter.

## Brief

Reiter formalizes the closed-world assumption: failure to prove a positive fact licenses its negation. The October 1977 report also identifies consistency limits. Read the introduction and section 3 in six minutes.

## Why it matters

My application: make completeness an explicit contract for each query scope. An exact database query can exhaust stored rows while the stored telemetry remains incomplete.

## A design question

Which tenant, service, time interval, and event types are covered? Require that scope before allowing an agent to conclude that an event never occurred.

## Evidence and caveat

Foundational formal work, not a telemetry completeness test. Logical consistency under its assumptions does not establish that real-world collection captured every event.

