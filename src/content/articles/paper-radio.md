---
title: Paper Radio
number: 41
gallery: projects
medium: Blueprint
date: 2025-11-15
summary: Building a single-station radio with one physical control and no screen, as an exercise in subtracting until only the thing itself remains.
tags:
  - hardware
  - electronics
  - design
connections:
  - the-shape-of-a-queue
  - in-praise-of-slow-tools
---

Paper Radio is a radio that does one thing. It receives a single station. It has one control — a
volume knob that is also the on/off switch — and no screen, no app, no account, no firmware
update. You turn it on; the station plays. I built it over a few weekends and I use it every
morning.

The brief I set myself was a subtraction exercise: start from a normal internet radio and remove
features until removing one more would break the object's reason to exist. What survived was
surprising. The tuning went first (I only ever listen to one thing). The display went next (it only
ever told me what I already knew). The buttons followed the display. At the end I had a wooden box,
a speaker, a knob, and a board the size of a stamp.

## What the board does

```text
  [ antenna ] → [ SDR front-end ] → [ tiny SBC ] → [ DAC ] → [ amp ] → [ speaker ]
                                         │
                                    one job: decode
                                    the one station,
                                    forever
```

There's a queue in there, of course — a buffer between the network and the speaker, absorbing the
jitter of a domestic wifi connection so the audio never stutters. Sizing it was the whole
engineering problem, and it's the same problem as ever: [too small and any wobble in arrival rate
drops samples; too large and you're listening to the past](/articles/the-shape-of-a-queue/). I
landed on two seconds, which is enough to ride out a microwave being switched on in the next room.

## Why bother

Because the object is *legible*. A child can operate it; so can I before coffee. It will work in
ten years because there is almost nothing in it to break and nothing in it to be discontinued by a
company. It is, in the most literal sense, a [slow tool](/articles/in-praise-of-slow-tools/) — and
building it reminded me that most of the complexity in modern things is not for the user. It's for
the business model. Take the business model out and the object gets quiet, and good.
