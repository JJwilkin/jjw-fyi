---
title: Retrieve Both Sides of a Change
number: 28
gallery: research
medium: Research Paper
date: 2026-10-29
summary: The Tempo benchmark asks whether retrieved evidence covers the time periods a question requires. An incident comparison needs a healthy baseline and the affected period, even when the highest ranking results all describe the failure.
tags:
  - temporal retrieval
  - retrieval evaluation
  - query planning
connections: []
featured: false
draft: false
---

[Read TEMPO](https://arxiv.org/abs/2601.09523)

Abdelrahman Abdallah, Mohammed Ali, Muhammad Abdul-Mageed, and Adam Jatowt · January 14, 2026 · Preprint

## Brief

TEMPO evaluates retrieval for questions requiring temporal reasoning across thirteen domains. It supplies evidence linked to retrieval steps and measures whether results cover the periods needed for a comparison.

## Why it matters

My proposed transfer is to incident search. A result list full of relevant failures can still omit the healthy baseline needed to explain what changed. Period coverage should accompany ranking quality.

## A design question

For before-and-after deployment questions, require evidence from both windows. Compare one broad search with separate baseline and incident queries under the same result budget.

## Evidence and caveat

The benchmark contains 1,730 Stack Exchange queries and releases evaluation resources. Its temporal annotations and judgments use LLMs with sampled human review. These are document retrieval tasks, so telemetry evaluation needs its own labels and timestamp rules.

Selected reading: 8 minutes. Read sections 3.3, 4, and 5.2, then Appendix C's metric definitions.
