---
title: 'Does evidence order change the answer?'
number: 28
gallery: research
medium: Research Paper
date: 2026-09-28
summary: 'A study reverses two conflicting documents while keeping their content unchanged, and finds that model answers can flip. For incident investigation, reorder conflicting spans without changing their timestamps and check whether the diagnosis stays grounded in the same evidence.'
tags: [context engineering, retrieval evaluation, uncertainty]
connections: []
featured: false
draft: false
---

[Read When Evidence Conflicts](https://arxiv.org/abs/2605.14115)

Yikun Han, Mengfei Lan, and Halil Kilicoglu · May 13, 2026 · Accepted at BioNLP 2026

## Brief

The authors test six open-weight models on supportive, incorrect, and conflicting evidence. Reversing the same two conflicting documents flips 11.4%–25.2% of predictions. A learned risk signal improves selective answering compared with model confidence alone.

## Why it matters

My inference: a reranker can change a diagnosis through presentation order even when it retrieves exactly the same spans. Retrieval-set coverage alone would miss that failure.

## A design question

Keep span IDs, timestamps, and content fixed, then reverse the display order of conflicting tool outputs. Measure answer flips, evidence citations, and accuracy at the same answer coverage. Do not scramble timestamps: chronology may legitimately determine which observation is current.

## Evidence and caveat

The controlled study uses 920 binary health questions and 4B–14B models. Its risk detector is trained separately within evidence conditions; this is not a general plug-in contradiction detector. Transfer to open-ended incident diagnosis needs testing.

Selected reading: 8 minutes, sections 3.3, 4.3, 4.4, and Limitations.
