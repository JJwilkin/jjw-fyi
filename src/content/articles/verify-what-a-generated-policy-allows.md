---
title: "Verify what a generated policy allows"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-14"
summary: "A generated access policy can be valid code and still grant the wrong access. RAISE checks permissions against formal boundaries, then uses failed checks and counterexamples to improve policy generation. The boundaries themselves still need to represent the intended requirements correctly."
tags: ["policy-verification", "access-control", "reinforcement-learning"]
connections: []
featured: false
draft: false
---

Source: [RAISE: Reinforcing Access Control Policy Synthesis in LLMs via Symbolic Evaluation](https://arxiv.org/abs/2609.33796) — Yingming Zhou and colleagues.

## Brief

Zhou and colleagues distinguish forbidden excess access, required access, and whether a workflow remains possible. Their strongest training variant uses verifier-guided exploration rather than a pass-or-fail reward alone. Read sections 2, 4, 5.2, and Appendix G in nine minutes.

## Why it matters

My inference: generated telemetry filters need behavioral checks, not just schema validation. An exception for an on-call engineer must not silently remove an unrelated tenant boundary. A policy that blocks all reads can be wrong too.

## A design question

For a proposed incident-access policy, specify requests that must be denied and requests that must remain allowed. Mutate one condition at a time, especially exceptions, and ask the verifier for a concrete counterexample. Review the requirements independently of the generated policy.

## Evidence and caveat

This preprint supplies code and symbolic checks, but correctness is relative to generated verification plans. Their fidelity is only sampled, and training uses one seed. A proof against an incomplete plan does not prove agreement with every intended requirement.

