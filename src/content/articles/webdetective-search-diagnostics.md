---
title: 'WebDetective — Separate Search Failures from Reasoning Failures'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-06
summary: WebDetective separates finding enough evidence, combining it correctly, and refusing when it is missing. Its companion agent keeps source identifiers through summaries, suggesting a practical way to inspect where an observability investigation lost the facts it needed.
tags:
  - agentic search
  - agent evaluation
  - evidence memory
connections: []
featured: false
draft: false
---

[Read the paper](https://arxiv.org/abs/2510.05137)

Maojia Song and collaborators · First posted October 1, 2025 · ICLR 2026

## Brief

WebDetective removes clues that reveal a question's search path. Its controlled Wikipedia environment distinguishes evidence acquisition, knowledge use, and justified refusal. EvidenceLoop, the accompanying agent workflow, retains evidence identifiers in summaries so verifiers can reopen original sources.

## Why it matters

For incident investigation, our inference is that the final answer score should be split into missing evidence, lost evidence, and incorrect reasoning. Better retrieval cannot repair every failure after retrieval.

## A design question

Ask the same incident question twice: once with natural wording and once with the intermediate services named. Compare discovered evidence, retained evidence, and final conclusions under the same tool budget.

## Evidence and caveat

The study evaluates 25 models on 200 questions in a masked sandbox, with workflow ablations. It is diagnostic rather than a production incident benchmark. Its knowledge metrics also credit probed model knowledge, which we should not count as evidence about a private incident. Our adaptation would require source-backed trace facts and accept multiple valid investigation paths.

Suggested reading: benchmark design, factorised metrics, and Appendix E's evidence memory, about nine minutes.
