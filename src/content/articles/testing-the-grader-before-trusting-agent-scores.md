---
title: "Testing the grader before trusting agent scores"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-04"
summary: "An agent benchmark can give the wrong answer because its grading software changes the state it is supposed to inspect. This study audits the grader with known answers and state checks. The practical lesson is to test the measuring instrument before trusting the score."
tags: ["agent-evaluation", "verification", "benchmarking"]
connections: []
featured: false
draft: false
---

Source: [When Agent Evaluation Becomes Unreliable: An Empirical Study of Oracle Failures and Configuration-Dependent Measurement in an LLM Agent Benchmark](https://arxiv.org/abs/2610.16067) — Junjie Chen.

## Brief

Chen reports a grading path that overwrites the agent's database state with reference-solution state. Replaying 4,320 episodes changes measured success from 94.3 percent to 65.5 percent. Read the October 21 revision, especially sections 3.2, 4.1, and 6.

## Why it matters

My application: structured retrieval and semantic retrieval need different quality judgments, but both depend on a trustworthy harness. Save the actual result set before grading, and test whether repeated grading changes either the evidence or the verdict.

## A design question

Do known-correct, known-wrong, and empty retrieval results receive the expected complete verdict when scored twice and in a different order?

## Evidence and caveat

This is a preprint audit of a specific implementation and configuration. The authors report that their method did not transfer to a second independently implemented benchmark. Its score correction is not a general estimate of agent-benchmark inflation.

