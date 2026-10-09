---
title: 'Securing the agent: enforce permissions at the server'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-09
summary: 'This architecture separates relevance ranking from permission checks and puts retrieval, tool use, and conversation state behind server enforcement. Evaluate leakage, recall of permitted results, and latency separately.'
tags:
  - retrieval-authorization
  - agent-design
  - multi-tenancy
connections: []
featured: false
draft: false
---

[Read the paper →](https://arxiv.org/abs/2605.05287)

Francisco Javier Arceo and Varsha Prasad Narsing · May 6, 2026 · Research paper

## Brief

The authors present layered access control in OGX. Permission gating prevents cross-tenant results in their experiments; server-side orchestration makes that enforcement harder for a client to bypass. They also show how filtering an already-truncated candidate list can lose permitted results.

## Why it matters

My inference: trace search, parent expansion, tool results, and conversation state should share a trusted authorization boundary.

## A design question

Does every retrieval route preserve both zero unauthorized results and adequate recall over the permitted corpus?

## Evidence and caveat

Read sections 3 and 5 in about eight minutes. The evaluation uses three synthetic tenants, 300 documents, and mock authentication. Server orchestration adds roughly three seconds in its non-streaming setup. Zero observed leakage is not a complete security proof, and predicate pushdown alone does not guarantee exact approximate-search recall.
