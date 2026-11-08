---
title: "Reward progress without changing the goal"
number: 30
gallery: "research"
medium: "Research paper"
date: "2026-11-08"
summary: "This 1999 paper explains when adding intermediate rewards preserves the original task's optimal policies. Rewards based on a carefully defined change in state potential can provide guidance without replacing the goal. For search agents, the warning is practical: rewarding every seemingly useful tool call can encourage activity instead of a correct answer."
tags: ["reinforcement-learning", "reward-shaping", "foundations", "agent-design"]
connections: []
featured: false
draft: false
---

Source: [Policy invariance under reward transformations: Theory and application to reward shaping](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf) — Andrew Y. Ng and colleagues.

## Brief

Ng, Harada, and Russell establish conditions for policy-preserving reward shaping. The central form is F(s,a,s') = gamma × Phi(s') − Phi(s): a discounted change in state potential.

## Why it matters

My connection: a bonus for each search or relevant-looking result can favor loops. A reward should reflect progress toward the investigation's real objective, with discounting and termination handled consistently.

## A design question

In a small search environment with known outcomes, compare a per-call bonus with potential-based shaping. Does either make repeated searches preferable to finishing correctly?

## Evidence and caveat

Strong foundational theory under its Markov decision process assumptions. It does not automatically validate learned judges, truncated LLM histories, or arbitrary progress bonuses, nor guarantee faster learning. Read the introduction and section 3's theorem and cycle example (7 minutes).

