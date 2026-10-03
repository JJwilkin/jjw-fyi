---
title: OWL — Unknown Is Not False
number: 30
gallery: research
medium: Foundational Specification
date: 2026-10-03
summary: The original OWL guide explains why missing facts should not automatically count as false. It also distinguishes names from identity, a useful foundation for agents that combine incomplete telemetry from several systems.
tags: [OWL, semantic systems, identity, missing evidence]
connections: []
featured: false
draft: false
---

[Read the guide →](https://www.w3.org/TR/2004/REC-owl-guide-20040210/)

Michael K. Smith, Chris Welty, and Deborah L. McGuinness, editors · W3C · February 10, 2004

## Brief

OWL uses an open-world assumption: an absent fact need not be false. It also does not assume different names denote different individuals. Explicit identity statements and logical consequences therefore matter; matching labels alone are not the semantics.

## Why it matters

My application to trace search: “no error span found” is weaker than “no error occurred.” Likewise, two similar service names are not enough to establish identity. Retrieval needs to preserve these distinctions before an agent explains what happened.

## A design question

Give the agent a trace with a known collection gap. Can it distinguish observed facts, supported inferences, and unknowns? Then test a misleading name match across tenants. Do not promote a probabilistic match to formal identity without an explicit policy and evidence.

## Evidence and caveat

An authoritative historical language guide, not an empirical agent study. OWL 2 supersedes this version. Formal entailment is different from embedding similarity, and these lessons do not require introducing an ontology engine into the product.

Selected reading: **7 minutes**, section 2 and sections 4.2–4.3; skim property restrictions in 3.4.1.
