---
title: "Cited but unused: test whether evidence changes the answer"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-19"
summary: "A citation can support an answer without being the evidence the model used. This paper tests that distinction by changing facts in retrieved passages. For an observability agent, checking a citation and checking whether a diagnosis responds to new evidence are separate jobs."
tags: ["evidence-attribution", "evaluation", "agentic-search"]
connections: []
featured: false
draft: false
---

Source: [Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation](https://arxiv.org/abs/2611.17161) — Tanzeel Abbas and colleagues.

## Brief

Abbas and colleagues replace numeric values in retrieved evidence and observe whether answers change. They distinguish source support from behavioral evidence of source use. Read Sections 3, 7, 8, and Limitations; allow nine minutes. Section 8 explains an important measurement correction.

## Why it matters

My application to incident diagnosis: an agent may repeat a familiar failure explanation and attach a compatible span afterward. A supported explanation is useful, but it does not establish that the agent followed the current run's evidence.

## A design question

In synthetic incidents, change the decisive latency or error count everywhere it appears, including titles and summaries. Verify the complete expected diagnosis and supporting span IDs. Include cases where the right response is uncertainty, rather than forcing agreement with a contradictory edit.

## Evidence and caveat

This recent preprint offers controlled interventions, not direct access to internal reasoning. It covers selected numeric claims, discards undetermined cases, and uses models up to 14B parameters. Resistance to an edit can be misclassified; its detector is not reliable enough for deployment.

