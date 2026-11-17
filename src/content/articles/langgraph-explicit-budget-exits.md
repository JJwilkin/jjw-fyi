---
title: "LangGraph: make budget exits explicit"
number: 29
gallery: "research"
medium: "Implementation Note"
date: "2026-11-17"
summary: "LangGraph can route a running agent to a completion path before it reaches its step limit. This is useful plumbing for bounded investigations. A budget exit should preserve the evidence collected so far and clearly say what remains unresolved."
tags: ["agent-runtime", "budget-control", "termination"]
connections: []
featured: false
draft: false
---

Source: [Build sequences, branches, and loops](https://docs.langchain.com/oss/python/langgraph/graph-api-control-flow) — LangChain contributors.

## Brief

LangChain documents conditional loop exits, recursion limits, and Python's RemainingSteps value. Its examples route to a fallback before GraphRecursionError occurs. Read Impose a recursion limit and Access and handle the recursion counter; allow six minutes.

## Why it matters

My inference: the runtime should preserve why an investigation ended. A graceful return can still be incomplete, so the response and telemetry should distinguish evidence-based completion from budget exhaustion.

## A design question

Give a test agent two exit paths: evidence requirements satisfied, or budget nearly exhausted. Verify the complete final state retains the correct reason, supporting span IDs, and unresolved questions in both cases.

## Evidence and caveat

This is runtime documentation, not evidence that a stopping policy is correct. The recursion limit counts graph supersteps, not tokens, elapsed time, or every individual tool call. Parallel branches make those differences important. No publication date is stated.

