---
title: "Two clocks for reconstructing an agent’s decision"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-11"
summary: "This 1985 paper separates when information applies in the world from when a database records it. That distinction helps explain why an agent can make a reasonable decision from the evidence it had, even when later corrections change our understanding."
tags: ["temporal-data", "database-design", "foundations"]
connections: []
featured: false
draft: false
---

Source: [A Taxonomy of Time in Databases](https://www2.cs.arizona.edu/~rts/pubs/SIGMOD85.pdf) — Richard Snodgrass and colleagues.

## Brief

Snodgrass and Ahn distinguish valid time, transaction time, and user-defined time, then show what different database models can reconstruct. Read section 4, especially the contrasting historical and rollback examples; allow seven minutes.

## Why it matters

For observability, I would use this distinction to keep incident reconstruction separate from decision replay. The first uses our best current account of the event; the second uses the information available when the agent acted.

## A design question

Record an incident at noon, then add a correction the following day that applies retroactively. Can the system reproduce both the corrected incident account and the exact evidence available to the original agent?

## Evidence and caveat

Foundational database modeling with worked examples, not an LLM experiment. It explains temporal semantics but does not solve extraction errors, conflicting sources, access control, or modern deletion requirements.

