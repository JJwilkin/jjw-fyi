---
title: 'Ask Whether the Source Supports the Summary'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-27
summary: 'QAFactEval checks summary claims by asking questions and comparing answers against the source. It suggests a practical check for trace summaries, but factual support and completeness remain separate: a summary can make no false claims while leaving out the decisive event.'
tags:
  - summary fidelity
  - factual consistency
  - evaluation
connections: []
featured: false
draft: false
---

[Read the paper](https://aclanthology.org/2022.naacl-main.187/)

Alexander Fabbri, Chien-Sheng Wu, Wenhao Liu, and Caiming Xiong · July 2022

## Brief

QAFactEval generates questions from summary content and checks answers against the source. Its ablations show that question generation and detecting unanswerable questions materially affect factual-consistency evaluation.

## Why it matters

Our application: ask who reported an outcome, what the tool returned, and when a correction happened. An answer supported only by the generated summary is not evidence from the trace.

## A design question

Use separate checks for unsupported summary claims and omitted query-critical events. Can the evaluator catch a fabricated success without rewarding a summary that simply says almost nothing?

## Evidence and caveat

This peer-reviewed study evaluates English summarization, not agent telemetry. Its QA components can themselves fail. Checking claims that survived summarization does not establish coverage of facts that disappeared; human-reviewed source evidence is needed for that separate test.

Suggested reading: section 3.2 and the component ablations in section 5.1, about seven minutes.
