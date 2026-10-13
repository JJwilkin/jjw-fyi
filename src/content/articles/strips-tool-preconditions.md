---
title: "STRIPS: relevant does not mean ready to run"
number: 30
gallery: research
medium: "Foundational Paper Note"
date: 2026-10-13
summary: "The 1971 STRIPS planner describes actions through their preconditions and effects. That distinction is useful for modern agents: a relevant tool may still lack a required identifier or permission. Retrieval proposes an action, but the execution system must check whether it is actually available and valid."
tags: [planning, tool-use, verification]
connections: []
featured: false
draft: false
---

Source: [STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving](https://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/strips.pdf), Richard E. Fikes and Nils J. Nilsson, 1971. Journal paper. Selected reading: 7 minutes, sections 2.1 and 2.2.

## Brief

STRIPS searches for actions whose effects advance a goal, then treats their unmet preconditions as subgoals. It separates reasoning about a modeled action from executing the corresponding action routine.

## Why it matters

My application: retrieving a span-expansion tool is insufficient when the agent has no valid trace identifier. A prior lookup may be needed. Likewise, a plausible tool description cannot establish authorization.

## A design question

Write explicit input requirements and expected evidence for three investigation tools. Test missing identifiers, wrong tenant scope and expired permissions. Record which prerequisite failed instead of letting the agent repeatedly guess arguments.

## Evidence and caveat

This is foundational symbolic-planning work, not evidence about LLM performance. Real telemetry is incomplete and changes during execution. Model-generated claims must not stand in for authoritative checks, and successful planning does not guarantee successful execution.
