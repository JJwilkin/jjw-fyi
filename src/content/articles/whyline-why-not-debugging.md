---
title: 'Search for why an expected action never happened'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-30
summary: 'The Whyline starts debugging with questions about why something happened or why an expected action did not happen. For observability agents, this points toward indexing prerequisites and blocked branches, not just searching the text of errors that were recorded.'
tags: [causal debugging, negative evidence, program slicing]
connections: []
featured: false
draft: false
---

[Read Designing the Whyline: A Debugging Interface for Asking Questions about Program Behavior](https://www.cs.cmu.edu/~NatProg/papers/Ko2004Whyline.pdf)

A. J. Ko and Brad A. Myers · 2004 · CHI

## Brief

The Whyline answers why-did and why-did-not questions using relevant data and control-flow history. It can expose a false assumption in the question, a blocked condition, or an action that could never execute.

## Why it matters

My inference: “why did the agent not retry?” needs policy and branch evidence, not merely similar failure messages. Missing output is a different retrieval problem from finding an observed error.

## A design question

Test three retry cases: policy prohibited it, a precondition failed, and retry happened but telemetry is missing. Require evidence for the first two and an explicit uncertainty statement for the third.

## Evidence and caveat

Peer-reviewed prototype and small user study in Alice. Its detailed execution instrumentation is stronger than ordinary sampled telemetry. Do not assume its debugging gains transfer to production agents or interpret a missing span as proof of non-execution.

Selected reading: 7 minutes, Interrogative Debugging, Implementation, and Discussion.
