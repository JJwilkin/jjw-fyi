---
title: 'TRACE — Automated Context Repair from Agent Trajectories'
number: 11
gallery: research
medium: Research Paper
date: 2026-09-04
summary: TRACE treats user corrections, rephrasing, and abandonment as signals that an agent's prompt, knowledge base, tool description, or skill needs repair, then verifies whether the right change is to create or update context.
tags:
  - context engineering
  - agent traces
  - failure analysis
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2608.09153)

Yikai Zhao, Pradeep Kumar Misra, and Saurabh Pandey · KDD 2026

## Brief

TRACE turns historical agent runs into a maintenance loop for prompts, knowledge bases, tool descriptions, and skills. It detects implicit dissatisfaction, walks backward through the execution trace to attribute a failure, then inspects the implicated context source before recommending a create, update, delete, or no-action change.

## Why it matters

An observability agent should improve the system, not just describe a bad run. The useful pattern here is to treat failure attribution as a hypothesis and require a second stage to open the underlying source and verify it before proposing a repair.

## A design question

Could repeated user requests and corrections identify a queue of likely context defects, while replay tests verify each proposed repair before it reaches production?

## Evidence and caveat

The authors report 72.7 percent root-cause node accuracy, 82 percent end-to-end fix effectiveness, and a large improvement in create-versus-update decisions when the recommender inspects source files. The evaluation uses 60 synthetic dissatisfaction traces; the proprietary production traces that motivated the system are not available for independent assessment.
