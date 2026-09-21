---
title: "Keeping agent history recoverable"
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-21
summary: "Anthropic separates the durable session log from the agent loop and execution environment. That lets an agent revisit events lost from its current context, suggesting that summaries should remain a view of history rather than its only surviving copy."
tags: [context-engineering, agent-runtime, failure-recovery]
connections: []
featured: false
draft: false
---

[Source: Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) — Anthropic. April 8, 2026.

## Brief

The engineering account separates session storage, orchestration, and execution. An external event log supports history retrieval and harness recovery.

## Why it matters

For an observability agent, a compact summary can guide search while retained source events remain available for verification. This is our application of the architecture.

## A design question

After compaction and a worker restart, can the agent recover an omitted detail without repeating a completed external action?

## Evidence and caveat

Medium-high: a concrete first-party production account, not an independent comparison. Durable history alone does not guarantee exactly-once effects.

Selected reading: 7 minutes, the decoupling and session-versus-context sections.
