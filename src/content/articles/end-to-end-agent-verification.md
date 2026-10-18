---
title: "Verify the outcome, not just the tool call"
number: 30
gallery: research
medium: "Reading Note · Foundational Paper"
date: 2026-10-18
summary: "A successful tool call is not the same as a correct answer. This classic systems paper explains why some guarantees must be checked at the application endpoint. For an observability agent, the endpoint is a supported diagnosis, not merely a valid query response."
tags: [verification, distributed-systems, agent-evaluation]
connections: []
featured: false
draft: false
---

Source: [End-to-End Arguments in System Design](https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf), J. H. Saltzer, D. P. Reed, and D. D. Clark. ACM Transactions on Computer Systems, 1984; revised from a 1981 paper.

## Brief

The authors argue that some guarantees require knowledge available only at application endpoints. Reliable delivery alone cannot establish that the intended application action happened. Lower-layer checks can still improve performance and reliability.

## Why it matters

My inference: valid JSON and successful transport cannot establish that a diagnosis uses complete evidence from the right tenant and time range. Those are task-level requirements.

## A design question

Return a plausible result with missing evidence or the wrong time range. Does the final-answer check catch the unsupported conclusion even when every tool call succeeds?

## Evidence and caveat

Strong foundational reasoning, not an LLM benchmark. This is not an argument for removing lower-layer safeguards, and not every semantic claim has a mechanical validator. Preserve permission checks before retrieval as well as outcome checks afterward.

Selected reading: **7 minutes** — end-to-end caretaking, performance aspects, and delivery guarantees.
