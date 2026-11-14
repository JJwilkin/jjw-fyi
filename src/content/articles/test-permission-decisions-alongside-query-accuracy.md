---
title: "Test permission decisions alongside query accuracy"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-14"
summary: "A useful query can still ask for data its user cannot access. This study evaluates both mistaken permission grants and unnecessary refusals. A second language model checking the query helps, but longer policies remain difficult and learned checks are not a security guarantee."
tags: ["access-control", "text-to-sql", "agent-evaluation"]
connections: []
featured: false
draft: false
---

Source: [Role-Conditioned Refusals: Evaluating Access Control Reasoning in Large Language Models](https://aclanthology.org/2026.findings-eacl.316/) — Đorđe Klisura and colleagues.

## Brief

Klisura and colleagues add table and column permissions to text-to-SQL benchmarks, comparing prompting, a generator-verifier pair, and fine-tuning. Read sections 3–5 and Limitations of this March 2026 EACL paper in eight minutes.

## Why it matters

My inference for trace search: answer quality and permission behavior need separate scores. A system that refuses every request avoids some leaks while failing the product; a useful assistant must also complete authorized investigations. Keep enforcement in the trusted data-access path.

## A design question

Replay the same incident question under several roles, including a join between permitted and restricted telemetry. Measure false permits, false denials, authorized-answer correctness, and wasted retries. Check the complete returned trace set against the expected authorized set.

## Evidence and caveat

The published study includes multiple models and released datasets, but roles and schemas are static and policies are explicit. It does not establish safety under permission revocation or malicious retrieved content. Its second-stage verifier is an LLM, not a formal checker.

