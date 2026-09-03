---
title: Agentic-R — Learning to Retrieve for Agentic Search
number: 7
gallery: research
medium: Research Paper
date: 2026-09-02
summary: Agentic-R trains retrieval with both local relevance and contribution to the final answer, then improves the retriever and search agent together as the agent learns to ask better questions.
tags:
  - information retrieval
  - agentic search
  - reranking
connections: []
featured: false
draft: false
---

[Read the paper at ACL Anthology →](https://aclanthology.org/2026.findings-acl.785/)

Wenhan Liu, Xinyu Ma, Yutao Zhu, Yuchen Li, Daiting Shi, Dawei Yin, and Zhicheng Dou · Findings of ACL 2026

## Brief

Similarity is not the same as usefulness in a multi-step search. Agentic-R scores passages using immediate query relevance and their effect on final-answer correctness. It iteratively retrains the retriever with the agent's evolving queries instead of treating retrieval as a fixed component trained once.

## Why it matters

For incident investigation, the most semantically similar trace or log line may contribute nothing to the diagnosis. Retrieval telemetry should measure whether evidence changes a hypothesis, supports a correct conclusion, or prevents an unnecessary branch of exploration.

## A design question

Can investigation replays label evidence by its marginal contribution to a correct diagnosis and use that signal to improve telemetry ranking?

## Evidence and caveat

The paper reports consistent gains across seven single-hop and multi-hop question-answering benchmarks and several search agents. Those benchmarks are not production incident investigations, where evidence is time-dependent, access-controlled, and often incomplete.
