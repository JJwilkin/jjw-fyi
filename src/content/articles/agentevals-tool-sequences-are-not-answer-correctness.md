---
title: "Check tool sequences separately from answer correctness"
number: 29
gallery: "research"
medium: "Technical documentation"
date: "2026-11-08"
summary: "AgentEvals provides checks for an agent's tool sequence and arguments, including strict and unordered matching. Its strict mode can still allow different message text. Use trajectory checks for required workflow behavior, then separately verify the returned evidence and final answer. Matching a reference path alone does not establish a correct investigation."
tags: ["agent-evaluation", "tool-use", "trajectory-evaluation", "verification"]
connections: []
featured: false
draft: false
---

Source: [AgentEvals: Python trajectory evaluation](https://github.com/langchain-ai/agentevals/blob/main/python/README.md) — LangChain contributors.

## Brief

The AgentEvals guide documents strict and unordered trajectory matching, configurable tool-argument comparisons, and LLM-based evaluation. Strict trajectory matching permits differences in message content.

## Why it matters

My application: verify required tool behavior separately from the quality of an incident explanation. Similar tool sequences can still return different evidence or produce unsupported conclusions.

## A design question

Create two runs with identical tool calls but conflicting final answers. Confirm the trajectory evaluator's scope, then use a separate complete-result check to catch the incorrect answer.

## Evidence and caveat

Official implementation guidance, not an independent reliability benchmark. Exact path matching can reject valid alternative investigations. Keep complete-value assertions for deterministic contracts. Read Strict match, Unordered match, and tool-argument configuration (7 minutes); checked November 8, 2026.

