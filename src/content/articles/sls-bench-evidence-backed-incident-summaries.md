---
title: "A plausible incident story still needs supporting logs"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-06"
summary: "S L S Bench tests agents on ninety incident summaries using synthetic logs grounded in real incident reports. Models can reconstruct the broad diagnosis while still missing important supporting evidence. This suggests scoring the explanation and its evidence separately, with human review on real incidents."
tags: ["agent-evaluation", "log-analysis", "evidence", "incident-response"]
connections: []
featured: false
draft: false
---

Source: [SLS-Bench: A Benchmark for Incident Log Summarization with Synthetic Observability Data](https://arxiv.org/abs/2610.16412) — Valerii Iakovlev and colleagues.

## Brief

Dynatrace researchers evaluate incident summaries on 90 synthetic log tasks derived from real incident reports. Diagnosis scores are stronger than timeline and supporting-evidence scores; code and data are available.

## Why it matters

My inference: finding related logs is only an intermediate success. An observability agent must connect each important claim to evidence that actually supports it.

## A design question

Keep the incident story unchanged but remove a critical log or replace its cited identifier. Does your evaluator detect that the explanation is now unsupported?

## Evidence and caveat

Moderate evidence: a documented benchmark with synthetic data and LLM judging. It does not establish reliability on messy production incidents. Read sections 3.3 and 4, plus the judge rubric in appendix E (9 minutes).

