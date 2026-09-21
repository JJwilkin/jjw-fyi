---
title: "PM-Bench: Remembering when to act"
number: 28
gallery: research
medium: Research Preprint
date: 2026-09-21
summary: "Remembering an instruction is different from acting when it becomes relevant. PM-Bench tests delayed intentions, cancellations, and hidden state changes, making it useful for thinking about reliable incident follow-ups."
tags: [agent-memory, evaluation, monitoring]
connections: []
featured: false
draft: false
---

[Source: PM-Bench: Evaluating Prospective Memory in LLM Agents](https://arxiv.org/abs/2607.12385) — Genglin Liu and Saadia Gabriel. July 14, 2026.

## Brief

Agents navigate a simulated week while tracking deferred tasks and changed instructions. Evaluation counts both missed actions and actions taken when they were not due.

## Why it matters

An observability agent must revisit an incident at the right trigger, while respecting cancellation. Recall alone cannot measure that behavior.

## A design question

Can an agent follow a recovery condition, then correctly stop monitoring when the investigation is canceled? Track false alarms, misses, and monitoring cost.

## Evidence and caveat

Medium: explicit replay scoring, but one synthetic week with 81 scored tasks. Results do not establish production reliability.

Selected reading: 8 minutes, sections 3 and 4.1–4.4.
