# History of Diplomacy — POLSIR Course Guide

An interactive, scroll-driven course site for a "History of Diplomacy" module (POLSIR),
covering the 1648 Peace of Westphalia through the end of World War II in 1945.

## What's on the page

- **Weekly syllabus** — a swipeable, scroll-snap carousel of all 12 weeks, each tagged
  with its historical era.
- **Infographic timeline** — a vertical, scroll-reveal timeline of the era's defining
  diplomatic events, filterable by era.

## Editing content

All course content lives in [`js/data.js`](js/data.js):

- `ERAS` — the four periods used for color-coding (id, label, color).
- `WEEKS` — the 12 weekly syllabus entries (week number, title, summary, era, icon).
- `TIMELINE` — the infographic events (year, title, text, era, icon).

Edit these arrays to add, remove, or reword weeks/events — the page (`index.html`,
`js/app.js`) renders from this data automatically, no other file needs to change.

## Running locally

No build step — it's plain HTML/CSS/JS. Serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deploying

Since it's a static site, it can be published as-is via GitHub Pages (Settings → Pages →
deploy from this branch) or any static host.
