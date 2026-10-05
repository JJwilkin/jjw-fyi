---
title: 'Injection Evals — Measure Safety Without Disabling the Agent'
number: 27
gallery: research
medium: Research Paper
date: 2026-10-05
summary: A low attack success rate can hide an agent that cannot complete the underlying action at all. This study pairs attack outcomes with legitimate task completion and goal feasibility, giving us a better way to test defenses around retrieved traces and tool results.
tags: [agent evaluation, prompt injection, retrieval security]
connections: []
featured: false
draft: false
---

[Read Evaluating Indirect Prompt Injection Defenses in Tool-Using LLM Agents: Security, Utility, and Replication →](https://www.mdpi.com/2073-431X/15/9/570)

Adil Khan, Khaled AlKhanbashi, and Azza Mohamed · August 31, 2026 · Computers journal article

## Brief

The authors evaluate defenses on AgentDojo's banking tasks. They report legitimate-task completion alongside attacks and test whether each model can accomplish an attack goal when it is requested openly in a controlled benchmark. That separates some capability failures from resistance to injected instructions.

## Why it matters

My inference for observability: an agent that refuses every suspicious log may look safe while becoming useless. Test whether it can still extract evidence from a trace containing hostile text, without treating that text as authority.

## A design question

Create paired synthetic traces with the same diagnostic evidence, one clean and one containing an injected instruction. Measure supported diagnoses, unauthorized tool calls, blocked legitimate queries, and latency separately.

## Evidence and caveat

Medium evidence: repeated benchmark runs and explicit confound analysis, but a narrow banking environment and rare attack outcomes. The reported paired defense comparisons for GPT-5.4-mini were not significant after multiple-comparison correction. This assessment used indexed publisher methods and results; direct full-page access was unavailable.

Selected reading: 8 minutes — Sections 4.6, 5.2, and 7.
