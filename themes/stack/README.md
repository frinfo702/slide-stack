# @frinfo702/slidev-theme-stack

A [Slidev](https://sli.dev) theme with 13 looks. Pick one for the whole deck, or switch per slide.
The looks echo the visual language of well-known tech brands; no logos or trademarks are included.

## Install

```bash
npm i -D @frinfo702/slidev-theme-stack
```

## Use

```yaml
---
theme: '@frinfo702/slidev-theme-stack'
themeConfig:
  look: ledger      # deck-wide default
---

---
look: clay          # this slide only
layout: fact
---
```

| look | inspired by |
|---|---|
| `orbital` | SpaceX / xAI |
| `ledger` | Ramp |
| `nightshift` | Linear |
| `grid` | Vercel |
| `cloudflare` | Cloudflare |
| `clay` | Anthropic |
| `keynote` | Apple |
| `tactical` | Anduril |
| `dotmatrix` | Nothing |
| `mono` | paper.design/mono |
| `mercury` | Mercury |
| `manuscript` | paper reading |
| `plain` | neutral baseline |

Every slide gets a page number. Slidev's built-in layouts (`cover`, `section`, `statement`, `fact`, `quote`, `two-cols`, `end`, ...) are restyled per look.
In `clay`, `class: cactus` or `class: heather` on a `section` slide changes the panel color.

### Components

- `<CountUp :to="4.2" :decimals="1" />` counts up when the slide opens
- `<Scramble text="Beyond low orbit" />` decodes text when the slide opens

Both render the final value in export and respect `prefers-reduced-motion`.

### Overriding styles

Theme selectors are wrapped in `:where()`, so any class in your deck's `style.css` wins.
