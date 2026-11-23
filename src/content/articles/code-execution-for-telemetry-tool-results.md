---
title: "Process tool results before loading context"
number: 29
gallery: "research"
medium: "Engineering article"
date: "2026-11-23"
summary: "Anthropic shows how agents can call tools through code, filter results in the execution environment, and save intermediate state in files. For telemetry work, the useful pattern is to retain full results outside the prompt and expose only the evidence needed for the next decision."
tags: ["tool-use", "context-engineering", "telemetry-storage"]
connections: []
featured: false
draft: false
---

Source: [Code execution with MCP: Building more efficient agents](https://www.anthropic.com/research/code-execution-with-mcp) — Adam Jones and colleagues.

## Brief

Jones and Kelly demonstrate on-demand tool discovery, programmatic filtering and joins, and filesystem-backed state. Intermediate data can move between tools without being copied through model context.

## Why it matters

My inference: large trace searches can keep full records available while returning counts, selected spans, and references to the agent.

## A design question

Run the same investigation with raw tool responses and code-filtered responses. Compare evidence retained, exact aggregate results, tokens, latency, and authorization behavior.

## Evidence and caveat

Concrete vendor implementation examples, not a representative controlled benchmark. Agent-generated code requires sandboxing, limits, and monitoring; reducing prompt size alone does not establish correctness or isolation.
