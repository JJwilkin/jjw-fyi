---
title: 'SPA — Information-Flow Control for Persistent Agents'
number: 19
gallery: research
medium: Research Paper
date: 2026-09-06
summary: SPA generates a complete tool plan before execution, propagates confidentiality and integrity labels through its data dependencies, and prevents untrusted state from silently controlling later agent actions.
tags:
  - agent security
  - information flow
  - persistent memory
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2608.27234)

Dylan Girrens and Guangjing Wang · 2026

## Brief

SPA asks a planner to produce one complete executable plan before any tool runs. A restricted language makes data and control dependencies explicit, dual security lattices track confidentiality and integrity, and persistent tool results are stored as labeled artifacts whose trusted metadata can be shown to later planners without re-exposing the payload.

## Why it matters

Persistent agents turn yesterday's retrieved document or tool result into tomorrow's attack surface. The useful architectural idea is to keep semantic descriptions available for planning while forcing the actual content, labels, and authority checks back through an explicit retrieval and execution boundary.

## A design question

Could an observability agent plan its investigation against safe trace metadata, then reveal full spans only when tenant, sensitivity, and integrity labels permit that specific diagnostic step?

## Evidence and caveat

Under the paper's `tool_knowledge` attack, SPA reports zero attack success on AgentDojo and 0.2 percent on its multi-query extension. The strongest result covers one attack class in benchmark tool environments; strict integrity enforcement reduces utility, and a complete upfront plan may not suit reactive investigations.
