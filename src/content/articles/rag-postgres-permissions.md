---
title: 'RAG with permissions: enforce access inside Postgres'
number: 29
gallery: research
medium: Engineering Guide
date: 2026-10-09
summary: 'Supabase shows how row-level security can restrict vector search to permitted documents, including shared ownership. The important test is the real request path, with its actual database role and user identity.'
tags:
  - pgvector
  - row-level-security
  - semantic-search
connections: []
featured: false
draft: false
---

[Read the guide →](https://supabase.com/docs/guides/ai/rag-with-permissions)

Supabase · Undated living documentation, checked October 9, 2026 · Implementation guide

## Brief

The guide applies Postgres row-level security to embedded document sections. It covers single ownership, shared access through a join table, and externally stored permission data. Semantic similarity queries remain subject to the applicable database policies.

## Why it matters

My inference: trace summaries can reuse database authorization rather than rely on an agent remembering to add the correct filter.

## A design question

Run the same search as an owner, permitted teammate, unrelated user, and anonymous caller. Repeat after revocation and across reused connections.

## Evidence and caveat

Spend seven minutes on the first two examples and identity propagation. This is implementation documentation, not comparative performance evidence. The [RLS reference](https://supabase.com/docs/guides/database/postgres/row-level-security) explains privileged bypasses and stale JWT claims. Test the actual runtime role, views, functions, and connection lifecycle; enabling RLS alone is insufficient.
