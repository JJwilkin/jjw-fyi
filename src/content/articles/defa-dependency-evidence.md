---
title: "DeFA: follow dependencies, not just similar text"
number: 27
gallery: research
medium: Research Paper
date: 2026-10-11
summary: "An agent's visible failure may come from a mistake many steps earlier. DeFA follows dependencies between steps to find that mistake, but an inferred connection is still a hypothesis, not proof."
tags: [agent-debugging, dependency-graphs, semantic-search, evaluation]
connections: []
featured: false
draft: false
---

Source: [DeFA: Dependency-Guided Failure Attribution for LLM Agents](https://arxiv.org/abs/2610.01256) — Bo Deng and colleagues, October 1, 2026. Preprint.

## Brief

DeFA builds an event dependency graph, then follows suspected mistakes and their effects. It combines detailed local steps with summaries of other segments. Protocol pairing rules are model-assisted; semantic links infer where a later step uses an earlier result.

Read **8 minutes**: sections 3 and 4.1–4.3, plus limitations.

## Why it matters

My takeaway: a useful retrieval result may be an upstream dependency with very different wording. Store recorded call links separately from inferred dependencies, including how each link was obtained.

## A design question

On labeled failed traces, compare flat semantic retrieval with dependency-expanded evidence. Measure evidence precision, exact-step attribution, and downstream repair success separately.

## Evidence and caveat

The authors report attribution gains on Who and When and its Pro text subset, plus downstream skill-improvement experiments. Model-inferred links can be wrong or missing. These results do not establish causality through replay of the original failure.
