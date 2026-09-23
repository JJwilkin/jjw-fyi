---
title: "Chronos: evaluating knowledge that changes"
number: 28
gallery: research
medium: Research Paper
date: 2026-09-23
summary: "Remembering the latest state is different from remembering how that state changed. This paper evaluates evolving knowledge and organizes retrieved facts by entity and time, suggesting separate tests for current answers, historical answers, and the transitions between them."
tags: [agent-memory, temporal-reasoning, evaluation]
connections: []
featured: false
draft: false
---

Source: [RAG or Learning? Understanding the Limits of LLM Adaptation under Continuous Knowledge Drift in the Real World](https://arxiv.org/abs/2604.05096), Hanbing Liu, Lang Cao and Yang Li. April 6, 2026; revised April 14. Preprint.

## Brief

The benchmark distinguishes historical facts, current facts and questions spanning several times or entities. The Chronos baseline organizes retrieved evidence into an Event Evolution Graph.

## Why it matters

My application to observability is to preserve the transition from failed action to correction to recovery. A final-state summary may hide the behavior an investigator needs.

## A design question

On the same traces, compare a flat summary with an evidence-linked timeline. Can each answer what was true before a correction, afterward, and across the transition?

## Evidence and caveat

This is a Wikipedia-derived benchmark, not a telemetry study. Historical reconstruction can introduce model-derived information; keep that distinct from recorded evidence.

Selected reading: 8 minutes. Read sections 2, 3.4 and 4.4.
