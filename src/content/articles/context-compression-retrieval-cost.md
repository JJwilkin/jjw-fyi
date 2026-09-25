---
title: "The search cost of forgotten context"
number: 27
gallery: research
medium: "Paper Notes"
date: 2026-09-25
summary: "An agent can finish its task while spending extra searches recovering forgotten facts. For trace summaries, test both the final answer and how much evidence the agent has to fetch again."
tags: [context-engineering, retrieval, evaluation]
connections: []
featured: false
draft: false
---

Source: [What Does Context Compression Cost an Agent?](https://arxiv.org/abs/2608.16370), Shuyu Liu, August 17, 2026. Preprint.

## Brief

In a controlled planning environment, dropping earlier context increased retrieval calls without a statistically detected completion change at the main comparison point. The paper separates fetching state from executing work.

## Why it matters

My inference for observability: a summary can appear adequate while making an investigation slower. Track repeated span fetches alongside answer correctness, tokens, and latency.

## A design question

Replay the same investigations with raw context, summaries, and summaries plus source links. When searches repeat, restore the missing facts and see whether the extra work disappears.

## Evidence and caveat

Controlled interventions make this a useful diagnostic, but the main comparisons use ten paired seeds in a small synthetic environment. ALFWorld did not show the same retrieval surge. Tool calls are not monetary cost, and a nonsignificant difference does not establish equal completion quality.

Selected reading: **8 minutes**. Read sections 3.2–3.4, 4.5, 4.7, and 6.
