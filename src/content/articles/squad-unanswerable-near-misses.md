---
title: 'Test plausible questions with no supported answer'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-28
summary: 'The SQuAD 2.0 paper adds questions that look relevant and have tempting answer-shaped text, but no supported answer. Borrow that design for trace search by keeping the right entities and symptoms while removing the evidence needed to justify a cause.'
tags: [retrieval evaluation, hard negatives, answerability]
connections: []
featured: false
draft: false
---

[Read Know What You Don't Know](https://aclanthology.org/P18-2124/)

Pranav Rajpurkar, Robin Jia, and Percy Liang · July 2018 · ACL

## Brief

This foundational paper introduced the unanswerable-question extension known as SQuAD 2.0. Crowdworkers wrote relevant questions with plausible decoy answers, requiring systems to check whether the paragraph actually supported an answer.

## Why it matters

My inference: random unrelated traces are weak negative examples. The harder case contains the right service, error message, and time window, but lacks the causal evidence the question asks for.

## A design question

Pair an answerable incident with a near miss: keep timeout spans, remove proof of the database cause, and ask which database operation caused the failure. The expected response should identify the evidence gap, not invent an operation or assert that no failure occurred.

## Evidence and caveat

Peer-reviewed dataset work with human checks. It evaluates paragraph-level extractive reading, not retrieval or causal diagnosis. Its negative examples also contain some annotation noise, so have a second reviewer check that your near misses really are unanswerable.

Selected reading: 6 minutes, sections 2, 4, and Table 1.
