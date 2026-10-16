---
title: "InteractComp — When More Search Cannot Resolve the Question"
number: 27
gallery: research
medium: Research Paper
date: 2026-10-16
summary: "Some requests fit several valid targets, and more searching cannot reveal which one the user meant. InteractComp tests whether agents ask for the missing detail. For an observability agent, this suggests testing service and time-window ambiguity separately from its ability to retrieve useful traces."
tags:
  - agentic search
  - clarification
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read the source →](https://proceedings.mlr.press/v306/deng26h.html)

Mingyi Deng and colleagues · ICML 2026 · July 2026

## Brief

The benchmark pairs a target with a plausible distractor and withholds the distinguishing facts from the agent. Search, clarification, and complete-context comparisons reveal substantial failures to obtain the missing information.

## Why it matters

My inference: a plausible incident explanation can still answer the wrong investigation. Retrieval quality and intent resolution need different tests.

## A design question

Give two incidents matching the same symptom, hide the intended time window, and compare search-only, optional clarification, and complete-context runs. Include unambiguous controls to measure needless questions.

## Evidence and caveat

Peer-reviewed, with controlled ablations across 17 models. The 210 curated tasks intentionally require clarification; simulated users and mostly restricted answers do not establish how often real operators should be interrupted. Read sections 3 and 4.3–4.7: 8 minutes.

