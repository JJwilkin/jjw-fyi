---
title: "Test forgetting with a control that remembers"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-11"
summary: "A memory system should forget requested information without wiping unrelated facts. The Bemula benchmark compares matching conversations with and without deletion requests, then probes removal, preservation, relearning, and resistance to extraction."
tags: ["agent-memory", "deletion", "agent-evaluation"]
connections: []
featured: false
draft: false
---

Source: [Can Agents Forget When Asked? A Benchmark for Memory Unlearning in LLM Agents](https://arxiv.org/abs/2610.18052) — Bofan Xie and colleagues.

## Brief

Xie and colleagues introduce Bemula: 50 synthetic dialogue instances and 135 forget requests, evaluated through paired controls and five probe suites. No tested configuration passes more than 1.5 percent of complete requests. Read sections 3.4 and 4 plus Appendix C; allow nine minutes.

## Why it matters

For trace summaries, I would test whether a deletion reaches every retrievable derivative while useful unrelated incident evidence survives. A missing answer alone cannot show whether deletion worked or the system never stored the information.

## A design question

Create twin histories containing a synthetic secret and unrelated diagnostic facts. Delete the secret in one history. Compare direct and paraphrased retrieval, summary outputs, retained diagnostic answers, and the ability to learn a new replacement value.

## Evidence and caveat

Released benchmark with synthetic conversations and LLM grading. Requests enter as natural language through ordinary memory updates; the result is not a test of administrator purge APIs or proof of physical erasure. The authors validate 100 judge decisions with a human.

