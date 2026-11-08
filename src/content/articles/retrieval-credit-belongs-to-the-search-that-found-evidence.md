---
title: "Give retrieval credit to the search that found the evidence"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-08"
summary: "This study compares rewards for finding supporting evidence with rewards based only on the final answer. The same evidence signal behaves differently depending on where training assigns the credit. For observability agents, record which search first exposed each useful span, and separately check whether the final explanation used it correctly."
tags: ["agentic-search", "reinforcement-learning", "credit-assignment", "evidence"]
connections: []
featured: false
draft: false
---

Source: [Beyond Outcome Rewards: Constructing and Assigning Retrieval Credit for Search Agents](https://arxiv.org/abs/2610.10179) — Wenyu Huang and colleagues.

## Brief

The authors compare evidence coverage, dependency-aware coverage, and answer matching as retrieval rewards. Under matched training conditions, results depend on both the signal and how its credit reaches the policy update.

## Why it matters

My application: retain the link from a query to the evidence it returned. A trajectory-wide score can hide which search helped an investigation.

## A design question

Shuffle step-level evidence credits between searches while keeping the total unchanged. Does performance fall? Also measure whether the agent uses the evidence it finds.

## Evidence and caveat

Moderate evidence from controlled Qwen3-4B experiments with constructed questions and a fixed retriever. Evidence acquisition is not evidence use; code and data release is promised upon acceptance. Read sections 2–3, 5.1, and 7 (8 minutes).

