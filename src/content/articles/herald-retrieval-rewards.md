---
title: 'HERALD — Check What the Reward Actually Rewards'
number: 28
gallery: research
medium: Research Paper
date: 2026-10-15
summary: "HERALD audits search-agent rewards by changing a saved trace while keeping its answer fixed. A real citation can still be invalid evidence if the agent never retrieved it. The lesson is to test evidence access separately from answer correctness, and to check whether reward improvements actually change behavior."
tags:
  - reinforcement learning
  - citation verification
  - agent evaluation
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2608.06012)

Zhuowen Liu, Bohan Cui, YinShang Guo, Yuting Wang, and Hao Li · Preprint · August 6, 2026

## Brief

HERALD audits a reward function using controlled edits to saved trajectories. Its tests distinguish nonexistent citations from real corpus passages the agent never retrieved. Strengthening the latter check closes the observed scoring loophole, but training results do not show fewer naturally occurring violations.

## Why it matters

My inference: an observability agent should not get full credit for a correct diagnosis supported by spans it never saw. Evidence access and semantic support need separate checks.

## A design question

Keep a diagnosis fixed and substitute a valid but unobserved span ID. Does the evaluator penalize that change, even when other score components improve?

## Evidence and caveat

The paper includes paired audits and a matched training comparison. Its guarantees cover tested pools, not arbitrary attacks; retrieval membership does not establish that evidence supports the claim. Read HERALD Audit, Implications, and Limitations: 8 minutes.
