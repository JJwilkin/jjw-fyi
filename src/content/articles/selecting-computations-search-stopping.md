---
title: 'Selecting Computations — Is Another Search Worth Doing?'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-04
summary: 'This older paper treats computation as a decision with a cost: gather more evidence only when it is expected to improve the eventual choice enough. It offers a useful way to think about which investigation branch to explore and when to stop.'
tags: [metareasoning, agentic search, stopping policies]
connections: []
featured: false
draft: false
---

[Read Selecting Computations: Theory and Applications →](https://arxiv.org/abs/1207.5879)

Nicholas Hay, Stuart Russell, David Tolpin, and Solomon Eyal Shimony · 2012 · UAI paper

## Brief

The authors distinguish choosing a real action from choosing computations that inform that action. They formalize the latter as a decision problem, develop value-of-information approximations, and test sampling policies on selection problems and Go.

## Why it matters

My connection to observability: a search branch matters if its evidence could change the diagnosis or next safe action. A low-probability explanation can still deserve investigation when resolving it would materially change the decision.

## A design question

Before each additional query, record what uncertainty it could resolve. Compare that policy with a fixed search cap on held-out incidents, retaining a hard time and call limit for both.

## Evidence and caveat

High foundational value, not direct evidence about language-model agents. The theory has explicit probabilistic and cost assumptions; practical approximations need calibration. One-step value estimates can stop too early when several observations are needed to change a decision.

Selected reading: 8 minutes — introduction, Section 2's framing, Section 6.1, and conclusion; skip proofs initially.
