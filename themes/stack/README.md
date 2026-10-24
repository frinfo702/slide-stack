# @kenichirog/slidev-theme-stack

A [Slidev](https://sli.dev) theme with 12 looks. Pick one for the whole deck, or switch per slide.
The looks echo the visual language of well-known tech brands; no logos or trademarks are included.

## Install

```bash
npm i -D @kenichirog/slidev-theme-stack
```

## Use

```yaml
---
theme: '@kenichirog/slidev-theme-stack'
themeConfig:
  look: ledger      # deck-wide default
---

---
look: clay          # this slide only
layout: fact
---
```

## Looks

`orbital` · `ledger` · `nightshift` · `grid` · `cloudflare` · `clay` · `tactical` · `dotmatrix` · `mono` · `mercury` · `manuscript` · `plain`

## Sample

[Sample deck (PDF)](https://github.com/frinfo702/slide-stack/blob/main/themes/stack/sample.pdf) shows every look and layout, both components, English and Japanese text, tables, math, and code. The source is [example.md](https://github.com/frinfo702/slide-stack/blob/main/example.md); regenerate it with `bun run export`.

Every slide gets a page number. Slidev's built-in layouts (`cover`, `section`, `statement`, `fact`, `quote`, `two-cols`, `end`, ...) are restyled per look.
In `clay`, `class: cactus` or `class: heather` on a `section` slide changes the panel color.

### Components

- `<CountUp :to="4.2" :decimals="1" />` counts up when the slide opens
- `<Scramble text="Beyond low orbit" />` decodes text when the slide opens

Both render the final value in export and respect `prefers-reduced-motion`.

### Overriding styles

Theme selectors are wrapped in `:where()`, so any class in your deck's `style.css` wins.
