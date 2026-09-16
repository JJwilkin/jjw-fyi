---
title: 'CUB — Does the Model Use the Evidence It Retrieves?'
number: 28
gallery: research
medium: Research Paper
date: 2026-09-16
summary: 'Retrieval success does not guarantee that an agent uses the evidence correctly. CUB tests models with useful, conflicting, and irrelevant context. The practical lesson is to evaluate evidence use separately from search quality, and to distinguish following a supplied context from reaching a factually supported conclusion.'
tags:
  - context engineering
  - retrieval evaluation
  - evidence use
connections: []
featured: false
draft: false
---

[Read the paper in ACL Anthology](https://aclanthology.org/2026.acl-long.1151)

Lovisa Hagström and colleagues · ACL, July 2026

## Brief

CUB compares techniques for controlling context use across multiple models and datasets. It separates useful context, context that contradicts model memory, and irrelevant context.

## Why it matters

For an observability agent, search and evidence use need separate tests. My inference is that improving retrieval can leave a second failure untouched: the agent may ignore a tool result or adopt an unsupported claim.

## A design question

Hold an investigation question fixed. Supply verified tool evidence, a contradictory agent statement, or an irrelevant span. Does the answer follow the source evidence, attribute the disagreement, and acknowledge missing information?

## Evidence and caveat

High evidence for the studied setting, with a narrower scope than full agent trajectories. The benchmark uses standard-length, single-context inputs. Some metrics reward following conflicting context or retaining a closed-book answer; neither is a general measure of factual truth. Adapt those conventions before evaluating telemetry.

Suggested reading: sections 3.2–3.3 and the findings on context-use tradeoffs; about eight minutes.
