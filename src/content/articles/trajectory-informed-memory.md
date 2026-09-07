---
title: 'Turning Agent Trajectories into Searchable Lessons'
number: 23
gallery: research
medium: Research Paper
date: 2026-09-07
summary: This IBM report extracts focused lessons about successful strategies, error recovery, and wasted effort from agent runs. Each lesson carries a trigger and a link to its source, giving us concrete fields to test when designing searchable trace summaries.
tags:
  - trace summaries
  - agent memory
  - semantic search
connections: []
featured: false
draft: false
---

[Read the report on arXiv](https://arxiv.org/abs/2603.10600)

Gaodan Fang and colleagues, IBM Research · March 2026

## Brief

The authors extract strategy, recovery, and efficiency lessons at task and subtask levels. Entries include applicability triggers, concrete steps, optional negative examples, and source trajectories.

## Why it matters

For our trace index, this suggests describing meaningful episodes such as a failed lookup followed by a corrected retry. A whole-session summary may bury that event among unrelated work.

## A design question

Do focused episode descriptions retrieve more verified examples of recovery than whole-session summaries at the same retrieval budget?

## Evidence and caveat

The best reported configuration improved held-out AppWorld scenario completion from 50.0 to 64.3 percent. A weaker retrieval configuration fell below the baseline. This measures task completion, not trace-search recall, and inferred outcomes or causes need independent checking.

Suggested reading: sections 3.1.3–3.1.4 and 4.2, about eight minutes.
