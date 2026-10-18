---
title: "Safe retries need a stable action identity"
number: 29
gallery: research
medium: "Reading Note · Engineering"
date: 2026-10-18
summary: "A timeout does not tell an agent whether an action happened. This AWS guide explains how a stable request identifier and server-side handling can make retries safe. The same idea matters when an agent creates tickets, adds annotations, or starts repairs."
tags: [tool-use, idempotency, distributed-systems]
connections: []
featured: false
draft: false
---

Source: [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/), Malcolm Featonby, AWS Builders' Library. [Announced January 15, 2021](https://aws.amazon.com/about-aws/whats-new/2021/01/new-abl-article-making-retries-safe-with-idempotent-APIs/).

## Brief

AWS describes caller-provided identifiers that distinguish a retry from a new intention. Recording the identifier and performing the mutation must be atomic. Reusing an identifier with different parameters should produce a validation error.

## Why it matters

My inference: an observability agent that creates a ticket needs one logical-action identifier across attempts, plus separate attempt identifiers for tracing. Hashing arguments alone cannot distinguish two intentionally identical actions.

## A design question

What happens if ticket creation commits but its response is lost? Retry with the same identifier and verify exactly one ticket. Then verify that a genuinely new intention creates a second ticket.

## Evidence and caveat

Medium-high practical evidence from a vendor engineering account, not an agent benchmark. Logging a client-side key is insufficient: the server must enforce the contract, including retention and late-arrival behavior.

Selected reading: **7 minutes** — reducing client complexity, late-arriving requests, and the same identifier with different intent.
