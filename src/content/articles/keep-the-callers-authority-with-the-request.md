---
title: "Keep the caller's authority with the request"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-14"
summary: "Hardy describes a compiler that overwrote a protected billing file because it used its own privileges for a user-chosen output path. The failure came from mixing two sources of authority. Capabilities tie the named resource to the permission used for that operation."
tags: ["capabilities", "delegation", "foundations"]
connections: []
featured: false
draft: false
---

Source: [The Confused Deputy (or why capabilities might have been invented)](https://www.cs.utexas.edu/~witchel/S25-380L/papers/hardy88confused.pdf) — Norm Hardy.

## Brief

This 1988 essay explains why knowing a resource's name is different from having authority to use it. Hardy proposes explicit capabilities for the compiler's own work and for its caller's output. Read the short essay in six minutes.

## Why it matters

My inference: an observability agent with a broad service credential can become the same kind of deputy. A trace ID returned by semantic search is a locator; it should not grant the requester access to that trace or its linked spans.

## A design question

Trace one investigation from user identity through planner, search tool, and raw-span fetch. At each hop, identify whose authority permits the read. Test a valid trace ID from another project and verify that every downstream path preserves the caller's scope.

## Evidence and caveat

This is a foundational incident narrative and design argument, not a modern agent benchmark. It motivates explicit authority but does not prescribe a complete token, revocation, or multi-tenant retrieval implementation. The linked copy preserves Hardy's original explanation.

