---
title: "RAG at Scale: Test the Search Tool, Not Just the Agent"
number: 28
gallery: research
medium: Research Paper
date: 2026-09-14
summary: "An agent needs a good way to discover candidates before it can reason over them. A controlled scaling study finds that replacing raw file exploration with ranked keyword search improves the same agent on its enterprise benchmark."
tags: ["agentic search","retrieval evaluation","corpus scaling"]
connections: []
featured: false
draft: false
---

[Read the source](https://arxiv.org/abs/2607.26497)

Pengyu Wang and colleagues · July 29, 2026

## Brief

The study grows a corpus through 28 nested sizes while keeping questions, relevant evidence, and adversarial documents fixed. A matched experiment changes the retrieval tool inside the same agent harness, separating candidate discovery from later reasoning.

## Why it matters

Our observability benchmark could keep incident questions fixed while adding unrelated sessions. This would reveal when navigation or candidate generation fails even though the agent can interpret evidence once found.

## A design question

Keep the model and tool budget fixed, then compare full-text, dense, and hybrid candidate search as telemetry grows. Track evidence recall, supported answers, index construction cost, and query cost separately.

## Evidence and caveat

Medium-high evidence: a controlled preprint, not a production trace benchmark. The synthetic enterprise corpus contains lexical anchors that favor keyword matching. Each system runs once per question; uncertainty is estimated across questions. The result does not establish that keyword search always wins.

Suggested reading: sections 3, 6.1, and 7, about eight minutes.

