---
title: 'A Lattice Model of Secure Information Flow'
number: 22
gallery: research
medium: Foundational Paper
date: 2026-09-06
summary: Dorothy Denning's lattice model gives information a security class and permits flows only in safe directions, providing the formal ancestor of labels that follow data through modern agent plans and memory.
tags:
  - information flow
  - access control
  - security
connections: []
featured: false
draft: false
---

[Read the paper →](https://doi.org/10.1145/360051.360056)

Dorothy E. Denning · Communications of the ACM · 1976

## Brief

Denning models security classes as a lattice and constrains programs so information can flow only to an equal or more restrictive class. Join operations assign a safe class to values derived from multiple inputs, making the rules suitable for checking information as it moves through a computation.

## Why it matters

An agent can combine a public question, a confidential trace, and an untrusted tool result into one plan or answer. A lattice makes the resulting restrictions compositional: the system can derive how sensitive and trustworthy the combined value is instead of relying on the model to remember every policy.

## A design question

Could every trace span, retrieved artifact, intermediate variable, and tool parameter carry confidentiality and integrity labels that are joined automatically as the agent derives new state?

## Evidence and caveat

This is foundational formal security work whose model influenced decades of information-flow control. It predates distributed services, probabilistic models, semantic retrieval, and dynamic tool use, so a practical agent system still needs declassification, provenance, identity, policy administration, and runtime enforcement.
