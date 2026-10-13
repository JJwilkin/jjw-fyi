---
title: "Tool search: keep discovery separate from execution"
number: 29
gallery: research
medium: "Engineering Note"
date: 2026-10-13
summary: "Microsoft describes exposing a tool search function and a policy-aware tool caller instead of loading the full catalog. Search-only descriptions help tools match user language without expanding their execution schemas. Essential tools can stay pinned so a search miss does not hide them."
tags: [tool-retrieval, sparse-search, context-engineering]
connections: []
featured: false
draft: false
---

Source: [Tool search: Finding the right tool at the right time](https://commandline.microsoft.com/tool-search-toolboxes-foundry/), Viswajeeet Balaji and Saket Sathe, Microsoft, July 29, 2026. Engineering article. Selected reading: 6 minutes, architecture, search metadata and pinning sections.

## Brief

Foundry's described design exposes `tool_search` and `call_tool`. Sparse retrieval selects a shortlist. Additional search text improves discovery without altering the returned tool schema, while pinning keeps core capabilities available.

## Why it matters

My application: synonyms for incidents, spans and evaluation failures belong in discovery metadata. Permissions and argument validation still belong in the execution path, where retrieval cannot bypass them.

## A design question

Test a small catalog first. Compare all-tools prompting against a shortlist with essential read-only tools pinned. Measure missed capabilities and completed investigations alongside tokens and latency.

## Evidence and caveat

This is a vendor engineering account with benchmark comparisons, not an independent audit. The post describes a preview product and does not fully specify its ranking implementation. Savings alone cannot establish diagnostic quality or safe execution.
