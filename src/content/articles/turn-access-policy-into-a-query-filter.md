---
title: "Turn access policy into a query filter"
number: 29
gallery: "research"
medium: "Implementation Note"
date: "2026-11-14"
summary: "A policy engine can use the known request context while leaving database rows unknown. OPA demonstrates how that partial evaluation produces conditions for a database query. This gives an application a way to filter access before rows become agent context."
tags: ["query-planning", "access-control", "policy-enforcement"]
connections: []
featured: false
draft: false
---

Source: [Evaluating a Data Filter Policy](https://www.openpolicyagent.org/docs/filtering/partial-evaluation) — Open Policy Agent contributors.

## Brief

The OPA walkthrough eliminates impossible policy branches, substitutes known values, and translates the remaining alternatives into a SQL filter. Spend seven minutes following the example and its linked guide to the supported data-filtering fragment.

## Why it matters

My inference: bind authenticated user and project context in the retrieval service, then combine the resulting authorization predicate with the agent's search intent. Apply it before ranking and summarization so unauthorized spans never enter the model's evidence pool.

## A design question

On a small fixed telemetry dataset, compare the complete rows returned by a compiled filter with per-row policy decisions. Include no-access users, shared resources, OR branches, and revoked access. Test every retrieval entry point against the same policy version.

## Evidence and caveat

This is authoritative implementation documentation, checked November 14, 2026, with no publication date supplied. Translation supports a restricted policy fragment and depends on the target. Trusted identity inputs, correct filter composition, and enforcement remain application responsibilities.

