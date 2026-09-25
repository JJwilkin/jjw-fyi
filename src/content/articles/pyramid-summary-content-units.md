---
title: "Score the facts that survived"
number: 30
gallery: research
medium: "Foundational Paper Notes"
date: 2026-09-25
summary: "The Pyramid Method evaluates small units of meaning rather than matching one ideal summary. For agent traces, this suggests checking which evidence-backed facts survive, while giving rare failures and corrections their own must-keep rules."
tags: [summaries, evaluation, foundational]
connections: []
featured: false
draft: false
---

Source: [Evaluating Content Selection in Summarization: The Pyramid Method](https://aclanthology.org/N04-1019/), Ani Nenkova and Rebecca Passonneau, 2004. HLT-NAACL paper.

## Brief

The method compares small content units across multiple human summaries and weights them by how often people include them. Different wording can receive equivalent credit for preserving the same meaning.

## Why it matters

My inference: define trace-summary expectations as evidence-backed facts, not one exact paragraph. For example, separately check the failed tool call, later correction, changed argument, and final outcome.

## A design question

Create a fact checklist with source span IDs. Score retained facts, missing critical facts, and unsupported additions separately. Add must-keep rules for rare events instead of relying only on how frequently annotators mention them.

## Evidence and caveat

This is foundational human-summary evaluation research, not an agent benchmark. Its consensus weights do not measure incident severity. Content coverage alone does not establish factual accuracy, ordering, or causation.

Selected reading: **7 minutes**. Read the introduction and section 3's content-unit example and scoring method.
