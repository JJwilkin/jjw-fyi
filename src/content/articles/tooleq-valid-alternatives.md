---
title: "ToolEq: a different tool can still be correct"
number: 28
gallery: research
medium: "Paper Note"
date: 2026-10-13
summary: "A retrieval test can mark a useful tool as wrong simply because its label names a different one. ToolEq adds alternative tool combinations to the answer key. For observability, those alternatives still need to satisfy the same data scope, required inputs and evidence requirements."
tags: [tool-retrieval, retrieval-evaluation, ground-truth]
connections: []
featured: false
draft: false
---

Source: [Tool Retrievers Are Underestimated](https://arxiv.org/abs/2609.08327), Yanyu Zhu and colleagues, September 8, 2026. Preprint. Selected reading: 9 minutes, sections 3, 4.1 and limitations.

## Brief

ToolEX searches for functionally equivalent tools, checks their combinations and expands benchmark labels. The resulting ToolEq evaluation credits valid alternatives rather than only the original tool identities.

## Why it matters

My application: an investigator might answer a question with either a trace lookup or a correctly scoped database query. A benchmark should not reject the second path merely for differing from the reference.

## A design question

For twenty investigation tasks, independently verify alternative tool sets in a sandbox. Report exact-reference retrieval, verified-alternative coverage and final evidence correctness separately. Do not treat cross-tenant access as an equivalent solution.

## Evidence and caveat

The expanded benchmark changes measured retrieval scores and gains. However, equivalence is primarily judged from documentation by models, not established by executing every alternative. The paper's decomposition diagnostic also uses reference tools. It estimates headroom rather than demonstrating a deployable query planner.
