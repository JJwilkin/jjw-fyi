---
title: "AIS: define what the evidence supports"
number: 30
gallery: "research"
medium: "Foundational paper"
date: "2026-11-19"
summary: "The AIS framework asks whether a model's statement can be attributed to identified sources. It first establishes what the statement means, including its context and time, and then checks support. This is a useful foundation for labeling evidence behind an observability agent's conclusions."
tags: ["foundations", "evidence-attribution", "human-evaluation"]
connections: []
featured: false
draft: false
---

Source: [Measuring Attribution in Natural Language Generation Models](https://aclanthology.org/2023.cl-4.2/) — Hannah Rashkin and colleagues.

## Brief

Rashkin and colleagues formalize Attributable to Identified Sources and provide a two-stage human annotation process. The journal version appeared in December 2023, following a 2021 preprint. Read Sections 3.1 and 4.1, including limitations; allow eight minutes.

## Why it matters

My application to trace summaries: 'the retry fixed it' is not a complete labeling target until the retry, affected operation, and time are clear. Resolve those references before deciding whether the linked spans support the statement.

## A design question

Give two reviewers the same incident explanation and source spans. Have them first resolve every entity and time reference, then label source support. Compare complete labels and adjudicate disagreements before using the set to calibrate an automated judge.

## Evidence and caveat

This peer-reviewed framework includes human studies and annotation guidelines. It measures source support, not whether a model causally used that source. Background knowledge and annotator strictness affect judgments, and relevance or completeness require separate evaluation.

