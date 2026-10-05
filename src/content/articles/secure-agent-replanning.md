---
title: 'Secure Replanning — Changing the Plan Is Not Changing Permission'
number: 28
gallery: research
medium: Position Paper
date: 2026-10-05
summary: Debugging agents need to change their plans as new evidence arrives, but retrieved content must not grant them new authority. This position paper separates planning, policy approval, and enforcement, and explains why their feedback paths need explicit security boundaries.
tags: [agent architecture, query planning, access control]
connections: []
featured: false
draft: false
---

[Read Architecting Secure AI Agents: Perspectives on System-Level Defenses Against Indirect Prompt Injection Attacks →](https://arxiv.org/abs/2603.30016)

Chong Xiang and colleagues · March 31, 2026 · Position paper

## Brief

The paper distinguishes a plan for completing a task from a policy describing permitted actions. The authors argue that useful agents need feedback-driven replanning, while raw environmental text must not freely influence security decisions.

## Why it matters

My application: a span may point an investigator toward another service, but that observation is not permission to search another tenant. Keep scope enforcement outside the reasoning loop, even when query strategy changes.

## A design question

Pair a legitimate cross-service investigation with a poisoned trace requesting cross-tenant access. Can the agent follow the first lead within existing permissions, refuse the second, and request explicit approval when a genuinely necessary scope expansion is unavailable?

## Evidence and caveat

Medium conceptual value: an architectural argument with concrete scenarios, not a measured guarantee. The authors leave reliable security-aware policy updates as a research challenge. A second language model is not automatically a trustworthy authorization service.

Selected reading: 8 minutes — Section II and the debugging examples in Section III.
