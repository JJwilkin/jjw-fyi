---
title: "Promote useful log fields into searchable attributes"
number: 29
gallery: "research"
medium: "Technical documentation"
date: "2026-11-06"
summary: "OpenTelemetry's transform processor can parse a JSON log body and copy selected fields into attributes. That gives search a practical starting point before embeddings. Choose stable fields deliberately, and test malformed inputs and error handling so the ingestion pipeline does not silently lose useful evidence."
tags: ["opentelemetry", "telemetry-pipelines", "structured-retrieval", "metadata"]
connections: []
featured: false
draft: false
---

Source: [OpenTelemetry Collector Transform Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/transformprocessor/README.md) — OpenTelemetry contributors.

## Brief

The official Transform Processor documentation shows how to parse JSON into temporary storage and copy selected fields into log attributes. It also documents transformations for spans and configurable error handling.

## Why it matters

My application: expose stable service names, error codes, and identifiers as structured fields before adding semantic search. Attribute creation itself does not create a backend index or enforce tenant access.

## A design question

For valid JSON, missing fields, and malformed bodies, compare the complete emitted record against the expected record. Then verify which attributes your storage backend can actually filter efficiently.

## Evidence and caveat

Strong implementation evidence from official documentation, not a retrieval-quality benchmark. Behavior depends on Collector version and error mode. Read Parsing JSON logs and the error-mode examples (7 minutes); living documentation checked November 6, 2026.

