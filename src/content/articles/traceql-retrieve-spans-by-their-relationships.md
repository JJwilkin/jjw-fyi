---
title: "TraceQL: retrieve spans by their relationships"
number: 29
gallery: "research"
medium: "Implementation Note"
date: "2026-11-09"
summary: "TraceQL lets an agent search for relationships, such as an error beneath a particular service. That is more precise than finding similar span text. The important detail is what the query returns: ordinary structural operators return one side, while union structural operators return both."
tags: ["structured-retrieval", "query-planning", "traces", "traceql"]
connections: []
featured: false
draft: false
---

Source: [Construct a TraceQL query](https://grafana.com/docs/tempo/latest/traceql/construct-traceql-queries/) — Grafana Labs.

## Brief

Grafana documents distinct meanings for conditions on one span, conditions across a trace, and parent, descendant, or sibling relationships. Structural operators return matching right-hand spans; union variants return both sides. Read the field-expression and spanset-operator sections in about six minutes.

## Why it matters

My inference: semantic search can find candidate traces, then structured queries can recover the exact related spans needed to check an explanation.

## A design question

Create traces with identical span text but different parent links. Require the planner to return the complete expected span sets for each relationship query.

## Evidence and caveat

Official implementation documentation, checked November 9, 2026; no publication date is stated. It documents behavior rather than diagnosis quality. The negative structural operators are experimental and can produce false positives.

