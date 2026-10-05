---
title: 'Complete Mediation — Authorization Must Survive Every Retrieval Path'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-05
summary: Saltzer and Schroeder's 1975 security principles remain useful for modern retrieval systems. Checking permission once is not enough when cached results, summaries, and later tool calls can expose the same information after access has changed.
tags: [access control, multi-tenancy, retrieval architecture]
connections: []
featured: false
draft: false
---

[Read The Protection of Information in Computer Systems →](https://web.mit.edu/Saltzer/www/publications/protection/)

Jerome H. Saltzer and Michael D. Schroeder · September 1975 · Proceedings of the IEEE

## Brief

The paper sets out principles including fail-safe defaults, least privilege, and complete mediation. It explicitly warns that remembered authorization decisions must be updated when authority changes, and discusses the difficulty of revocation during ongoing use.

## Why it matters

My application to retrieval: tenant filtering at the initial search is only one boundary. Cached hits, generated summaries, parent-trace expansion, and memory reuse need permission-aware handling too. A high relevance score never establishes access rights.

## A design question

Retrieve a synthetic trace, revoke access, then repeat the request through search, cache, summary, and parent expansion. Compare the complete returned results with the authorized expected results, and confirm no newly served derivative exposes the revoked evidence.

## Evidence and caveat

High foundational value, but these are design principles rather than a turnkey agent-security proof. Revocation cannot erase information already disclosed; the test concerns subsequent system access and reuse.

Selected reading: 7 minutes — Part I.A, especially protection dynamics and the eight design principles.
