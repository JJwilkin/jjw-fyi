---
title: Entity Resolution Before Retrieval
number: 29
gallery: research
medium: Engineering Tutorial
date: 2026-10-03
summary: Before searching relationships, make sure the records refer to the right entities. This tutorial keeps raw records linked to resolved entities and preserves the reasons for matching them, a useful pattern for service aliases and trace metadata.
tags: [entity resolution, knowledge graphs, provenance]
connections: []
featured: false
draft: false
---

[Read the tutorial →](https://neo4j.com/blog/developer/entity-resolved-knowledge-graphs/)

Paco Nathan, Derwen.ai · Neo4j · April 22, 2024

## Brief

This hands-on tutorial connects Senzing entity resolution to Neo4j. It models source records separately from resolved entities, with relationships that preserve matching information. The resulting graph can be inspected and corrected instead of silently discarding duplicate records.

## Why it matters

My observability application: a deployment name, service alias, and resource identifier may refer to one service—or different instances. Poor identity handling can fragment useful evidence or combine unrelated incidents before semantic ranking even starts.

## A design question

Build a fixture with three aliases for one service and two services that share a name across tenants. Compare the complete resolved groups against expected groups. Keep original record IDs, tenant and environment scope, matching evidence, and a way to undo a bad merge.

## Evidence and caveat

Concrete vendor tutorial with code and business-record examples, not a controlled retrieval benchmark. Its 2024 package instructions may need updating. Borrow the record-to-entity pattern; this is not a recommendation to adopt its whole vendor stack.

Selected reading: **7 minutes**, tutorial overview and “Building an Entity Resolved Knowledge Graph,” especially record links and auditability.
