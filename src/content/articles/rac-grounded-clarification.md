---
title: "RAC — Ground the Clarifying Question in Available Evidence"
number: 28
gallery: research
medium: Research Paper
date: 2026-10-16
summary: "A clarifying question can invent details just as an answer can. RAC retrieves passages before generating a question and trains the model to prefer supported distinctions. For trace search, this suggests offering service or version choices grounded in authorized telemetry rather than guessed possibilities."
tags:
  - semantic search
  - clarification
  - grounding
connections: []
featured: false
draft: false
---

[Read the source →](https://arxiv.org/abs/2601.11722)

Ahmed Rayane Kebir, Vincent Guigue, Lynda Said Lhadj, and Laure Soulier · ECIR 2026 author manuscript · January 16, 2026

## Brief

RAC conditions question generation on retrieved passages, then uses preference training to favor grounded questions. Its evaluation separates similarity to reference questions from faithfulness to the supplied evidence.

## Why it matters

My inference: ask about distinctions that exist in the authorized search space. A fluent menu of invented services sends the user down a dead end.

## A design question

Generate clarification options from permitted trace metadata, then test whether each option exists and whether choosing it improves the final investigation. Include a free-text escape for missing options.

## Evidence and caveat

Four datasets and published code support the method. It assumes ambiguity and uses a single clarification turn with proxy faithfulness measures; it does not solve when to ask or prove live incident outcomes. Read sections 3, 4.1, and 5.2–5.3: 8 minutes.

