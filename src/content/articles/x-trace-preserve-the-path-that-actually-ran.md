---
title: "X-Trace: preserve the path that actually ran"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-09"
summary: "X-Trace connects operations across software and network layers using shared task identifiers and explicit links. Its lasting lesson for agents is to preserve the execution path when collecting evidence. A missing report is a gap in observation, and does not by itself prove an operation failed."
tags: ["distributed-tracing", "provenance", "causal-debugging"]
connections: []
featured: false
draft: false
---

Source: [X-Trace: A Pervasive Network Tracing Framework](https://www.usenix.org/conference/nsdi-07/presentation/x-trace-pervasive-network-tracing-framework) — Rodrigo Fonseca and colleagues.

## Brief

Fonseca and colleagues propagate tracing metadata with the real request and collect reports separately. The resulting task tree connects activity across layers and administrative domains. Read section 2 and section 6 in about seven minutes.

## Why it matters

My inference: index task, operation, and dependency identifiers alongside summaries so an agent can follow evidence back to the actual execution.

## A design question

Drop one span report from a known execution. Does the agent distinguish missing telemetry from a confirmed failed operation, and request the next useful evidence?

## Evidence and caveat

Peer-reviewed NSDI 2007 systems work with implemented deployments. Instrumentation is required, lost reports can mislead diagnosis, and the original tree representation cannot naturally capture merged requests. Recorded dependencies alone do not prove a root cause.

