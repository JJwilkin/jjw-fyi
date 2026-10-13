---
title: "Toollery: find tools by the questions people ask"
number: 27
gallery: research
medium: "Paper Note"
date: 2026-10-13
summary: "Toollery adds example user requests to a tool search index, then gives the agent only the matching tool specifications. For an observability agent, the useful test is whether the shortlist contains every tool needed to finish the investigation, not just one relevant match."
tags: [tool-retrieval, query-expansion, agent-evaluation]
connections: []
featured: false
draft: false
---

Source: [Toollery](https://arxiv.org/abs/2609.22218), Xiangxi Tian and Ran Guan, September 2, 2026. Preprint. Selected reading: 8 minutes, sections 3, 4.3 and 6.

## Brief

The authors generate likely requests from capability specifications and index them for retrieval. The final model sees the authoritative specifications, not the generated requests.

## Why it matters

My application: a trace-query tool should be discoverable from an investigator's language, such as “find retries after a timeout,” even if its API description uses different terms.

## A design question

Compare raw specifications with intent-enriched ones at the same shortlist size. Track complete task coverage, final diagnostic success, latency and maintenance cost. Keep generated examples linked to the tool version.

## Evidence and caveat

The paper tests public benchmarks and private cockpit requests. Improvements are workload-dependent: matched top-ten BFCL selection shows no significant accuracy gain, and intent-only representations can lose useful schema detail. Offline construction is excluded from serving latency. Treat this as a testable indexing recipe, not a universal upgrade.
