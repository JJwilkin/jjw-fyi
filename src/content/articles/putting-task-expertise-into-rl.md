---
title: Putting Task Expertise into RL
number: 4
gallery: research
medium: Research Brief
date: 2026-09-02
summary: Expert-cleaned data and rewards for semantic correctness helped a text-to-SQL model outperform elaborate multi-call scaffolds, making evaluation design look more important than orchestration complexity.
tags:
  - reinforcement learning
  - text-to-SQL
  - evaluation
connections: []
featured: false
draft: false
---

[Read the original research post →](https://thinkingmachines.ai/news/putting-task-expertise-into-rl/)

Yuxuan Zhu, Tengjun Jin, Yoojin Choi, and Daniel Kang with Thinking Machines Lab · August 27, 2026

## Brief

The team trained ReViSQL-K2.6 with reinforcement learning on a carefully repaired text-to-SQL dataset. They found that many benchmark labels were wrong, and that merely matching the expected query result often rewarded SQL that was not semantically equivalent. Their recipe adds semantic verification and explicit rewards for using supplied domain knowledge.

## Why it matters

An observability agent also produces queries whose results can look plausible while encoding the wrong join, filter, or time window. This work suggests investing in verified investigation tasks and rewards that check the meaning of a query, rather than adding more prompting stages around an unreliable signal.

## A design question

Can generated telemetry queries be checked against small counterexample datasets or invariants before their results influence an incident diagnosis?

## Evidence and caveat

The authors release code, data, and a training recipe and report strong results on repaired and held-out SQL benchmarks. The work is still benchmark-centered, and live enterprise schemas, permissions, and shifting business definitions may introduce failure modes not represented in those tests.
