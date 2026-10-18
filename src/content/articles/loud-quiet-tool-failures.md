---
title: "When a tool fails quietly"
number: 27
gallery: research
medium: "Research Note · Preprint"
date: 2026-10-18
summary: "A tool can return valid-looking data and still be wrong. This study separates noticing a failure from changing the plan and actually recovering. For an observability agent, that means testing misleading trace results as well as obvious errors."
tags: [tool-use, fault-injection, agent-evaluation]
connections: []
featured: false
draft: false
---

Source: [Loud Failures, Quiet Failures: Fault Detection and Recovery in Tool-Using Language Model Agents](https://arxiv.org/abs/2610.10062), Obada Kraishan. October 7, 2026. Preprint.

## Brief

The study injects faults into simulated tool interactions and measures detection, replanning, recovery, and repetition separately. Agents notice explicit errors more reliably than plausible but incorrect results. Changing the plan does not necessarily restore the intended outcome.

## Why it matters

My inference: a successful span query can still omit the evidence needed for a diagnosis. Error-rate dashboards would miss that failure.

## A design question

Can our agent catch a missing span or incorrect duration in otherwise valid JSON? Compare detection, extra calls, and final diagnosis against repeated clean runs.

## Evidence and caveat

Medium-strength experimental evidence. Crucially, “recovery” means matching the model's own clean-run state, not task ground truth; independent clean runs agree only 63.3%. One-shot faults also exclude partially committed actions.

Selected reading: **8 minutes** — sections III-B through III-F, IV-A, and VI.
