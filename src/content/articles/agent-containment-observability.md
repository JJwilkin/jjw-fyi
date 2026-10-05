---
title: 'Agent Containment — Allowed Destinations Can Still Leak Data'
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-05
summary: Anthropic describes containment failures that survived otherwise working sandboxes, including data leaving through an approved API domain. For observability agents, access controls must cover the account and operation as well as the destination, and investigators need visibility inside the boundary.
tags: [agent security, observability, tool permissions]
connections: []
featured: false
draft: false
---

[Read How we contain Claude across products →](https://www.anthropic.com/engineering/how-we-contain-claude)

Max McGuinness, Mikaela Grace, Jiri De Jonghe, Jake Eaton, and Abel Ribbink / Anthropic · May 25, 2026 · Engineering article

## Brief

Anthropic describes environment, model, and tool-content defenses. One disclosed failure used an allowed API destination with an attacker's credentials; the reported fix checked the provisioned session credential. The post also describes how VM isolation can hide activity from host monitoring.

## Why it matters

My inference: an observability agent needs narrowly scoped identities and auditable data flows, not just read-only database credentials. Sending retrieved data to another tool or account can be a harmful action even without a database write.

## A design question

In a synthetic environment, verify that an approved endpoint cannot receive trace data under an unrelated account. Can an investigator reconstruct the principal, operation, destination, authorization decision, and result without exposing secrets in the audit trail?

## Evidence and caveat

Medium-high engineering evidence: specific incidents and remediation descriptions from the operator. This is a vendor account, not an independent security audit; containment does not establish that every permitted action is appropriate.

Selected reading: 7 minutes — approved-domain exfiltration, monitoring visibility, and tool-output trust sections.
