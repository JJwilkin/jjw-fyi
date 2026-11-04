---
title: "Agent memory is not execution state"
number: 29
gallery: "research"
medium: "Technical guide"
date: "2026-11-04"
summary: "Remembering a conversation does not tell an agent which work already finished. Temporal's refund example separates conversation context, execution progress, and the external record of a refund. For an observability agent, the same distinction matters when resuming an investigation or retrying a remediation."
tags: ["agent-state", "durable-execution", "tool-use"]
connections: []
featured: false
draft: false
---

Source: [Agent memory and state](https://docs.temporal.io/ai/featured/memory-state-stripe) — Temporal.

## Brief

Temporal's runnable refund demo kills a worker before a refund. Event History lets a replacement resume the loop, while Stripe owns the external effect and an idempotency key coordinates retries. Read the crash comparison and the context, memory, and state sections. The guide says it was last verified October 26, 2026.

## Why it matters

My application: give investigation progress, retrieved memories, and remediation results separate owners. A retrieved note saying a restart was planned should never be enough evidence that the restart occurred.

## A design question

After killing an investigation worker just after an external action, can a replacement recover progress and confirm the action's outcome without repeating it?

## Evidence and caveat

First-party implementation guidance with a runnable demo, not an independent reliability benchmark. The highlighted crash occurs before the refund; an ambiguous failure after the external write needs its own test.

