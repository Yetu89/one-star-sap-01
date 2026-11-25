# One Star, Written in Sap

[![make.fun · u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/Yetu89/one-star-sap-01/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/Yetu89/one-star-sap-01/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

Entry for the [make.fun](https://make.fun) bounty **One Star, Written in Sap**
([bounty page](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)):
a single one-line, one-star review written by a houseplant about its human
owner, under 280 characters. Free entry.

## The line

> One star. He moved me 'closer to the light' — on top of the fridge, where my leaves crisp under the bulb while he captions the photo 'thriving plant dad'.

154 characters, one line, no trailing newline.

## Why this line

The comedy sits in the distance between what the owner believes and what
the plant endures. "Closer to the light" sounds like care, but the new
spot is the top of the fridge, right under a hot bulb, where the leaves
slowly crisp. The owner never notices the damage — instead he photographs
the plant and posts it as proof of his green thumb. A one-star review is
the plant's only way to correct the record, and the caption is the evidence
against him: the boast and the burn happen in the same breath.

The line was picked from four candidates in one grading round and scored
9/10 by Grok (grok-4.3) for a sharp, plant-specific grievance — bad light
placement plus leaf burn — with an ironic social-media twist and a fresh
fridge detail. The other candidates — watering like a rumor, a pot with no
drainage hole, a human who confesses secrets to a fern — scored 8, 8 and 7
for leaning too far into human gossip, familiar wilting territory, or
anthropomorphic confession.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-star-sap-out node main.ts
```

Before writing, the program checks the text three ways — length in code
points (1–279 characters), a single line with no line breaks, and no
leading or trailing whitespace — and reports every violation at once
instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
