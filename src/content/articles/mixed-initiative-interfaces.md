---
title: "Mixed-Initiative Interfaces — Asking Has a Cost Too"
number: 30
gallery: research
medium: Research Paper
date: 2026-10-16
summary: "Eric Horvitz's 1999 paper treats asking, acting, and waiting as choices with different costs. An agent should consider both uncertainty and the user's attention. For incident investigation, the practical lesson is to measure whether a clarification saves enough wasted work to justify interrupting the operator."
tags:
  - agent design
  - human interaction
  - decision theory
connections: []
featured: false
draft: false
---

[Read the source →](https://www.microsoft.com/en-us/research/publication/principles-mixed-initiative-user-interfaces/)

Eric Horvitz · CHI 1999 · May 1999

## Brief

Horvitz describes principles for combining automation with direct user control. The LookOut scheduling prototype uses uncertainty and expected utility to choose between acting, asking, and doing nothing.

## Why it matters

My inference: always asking is not a complete solution to ambiguous trace search. During an incident, questions compete with the operator's attention and time.

## A design question

Compare clarification policies using diagnosis quality, unnecessary questions, operator time, and wasted tool calls. Can the agent offer a useful partial result while leaving uncertain scope explicit?

## Evidence and caveat

A peer-reviewed design foundation illustrated with a scheduling prototype, not an LLM retrieval benchmark. Its probabilities and costs must be estimated for the actual workflow. Read Principles for Mixed-Initiative UI and Dialog as an Option for Action: 8 minutes.

