---
title: Information Foraging in Information Access Environments
number: 10
gallery: research
medium: Foundational Paper
date: 2026-09-02
summary: Information foraging models search as a decision about where the next useful evidence is likely to be and whether its expected value justifies the cost of reaching and processing it.
tags:
  - information retrieval
  - exploratory search
  - agent design
connections: []
featured: false
draft: false
---

[Read the paper via DOI →](https://doi.org/10.1145/223904.223911)

Peter Pirolli and Stuart K. Card · 1995

## Brief

Information foraging theory borrows from optimal-foraging models to explain how a searcher moves between information patches. Cues provide information scent about where useful material may be found, while access and processing costs determine when to keep exploring a patch and when to move elsewhere.

## Why it matters

An investigation agent faces the same allocation problem across logs, traces, metrics, deployments, code, and prior incidents. Ranking the next action only by semantic similarity ignores both the expected information gain and the cost of opening another source.

## A design question

Can tool selection be scored as expected reduction in diagnostic uncertainty divided by query latency, token cost, and permission risk?

## Evidence and caveat

The work is foundational and offers a durable model of exploratory search. It predates language-model agents and describes human information seeking, so its value here is as a design lens rather than direct evidence for agent performance.
