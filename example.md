---
theme: ./themes/stack
title: Slide Stack
themeConfig:
  look: plain
look: plain
---

# Slide Stack

13 looks for Slidev. Set one deck-wide with `themeConfig.look`, or per slide with `look:`.

| look | 参考 | |
|---|---|---|
| `orbital` · `ledger` · `nightshift` · `grid` | SpaceXAI · Ramp · Linear · Vercel | <Link to="2">→ 2</Link> |
| `cloudflare` · `clay` · `keynote` · `tactical` | Cloudflare · Anthropic · Apple · Anduril | <Link to="18">→ 18</Link> |
| `dotmatrix` · `mono` · `mercury` | Nothing · paper.design/mono · Mercury | <Link to="34">→ 34</Link> |
| `manuscript` · `plain` | 論文紹介 · 汎用 | <Link to="46">→ 46</Link> |

---
look: orbital
layout: cover
---

# <Scramble text="Beyond low orbit" />

Mission briefing / Flight 12

---
look: orbital
---

# Flight profile

- Liftoff and ascent on all engines
- Hot staging at T+2:41, booster begins boostback
- Booster returns to the tower for catch
- Ship continues to orbital insertion

ブースターは発射台へ戻り、そのまま次の飛行に備える。

---
look: orbital
layout: fact
---

# 33

Engines firing at liftoff

---
look: orbital
layout: statement
---

# Fly. Land. Refly.

---
look: ledger
layout: cover
---

# Q3 spend review

Finance team, October 2026

---
look: ledger
layout: fact
---

# $<CountUp :to="4.2" :decimals="1" />M

Saved this quarter by catching duplicate software subscriptions

---
look: ledger
---

# Where the money went

| Category | Q2 | Q3 | Change |
|---|---|---|---|
| Software | $1,240,000 | $980,000 | −21% |
| Travel | $610,000 | $655,000 | +7% |
| Cloud | $2,100,000 | $1,870,000 | −11% |
| Total | $3,950,000 | $3,505,000 | −11% |

Cloud costs fell after we **moved batch jobs to spot instances**.

---
look: ledger
---

# 来期にやること

- 承認フローを **2ステップから1ステップへ**
- 月次の締めを5営業日から2営業日に短縮
- 経費の90%を **自動で仕訳**

---
look: nightshift
layout: cover
---

# Planning the next cycle

Product engineering sync

---
look: nightshift
---

# Issue sync, simplified

```ts
const issues = await client.issues({
  filter: { state: { type: { eq: 'started' } } },
  orderBy: 'updatedAt',
})

for (const issue of issues.nodes)
  console.log(issue.identifier, issue.title)
```

Every client keeps a local copy and syncs **only the deltas**.

---
look: nightshift
layout: two-cols
---

# Shipped

- Offline mode for the desktop app
- Sub-issues with progress rollup
- Keyboard-first triage

::right::

# Next

- Project health updates
- Customer requests inbox
- 検索の高速化

---
look: nightshift
layout: statement
---

# Build momentum, not backlog

---
look: grid
layout: cover
---

# Ship the frontend

deploy --prod / 2026-10-22

---
look: grid
---

# Render at the edge

```ts
export const runtime = 'edge'

export async function GET(request: Request) {
  const country = request.headers.get('x-country') ?? 'US'
  return Response.json({ greeting: greet(country) })
}
```

Responses are generated in the region **closest to the visitor**.

---
look: grid
layout: fact
---

# 42ms

p95 time to first byte at the edge

---
look: grid
---

# What changed in this release

- Preview deployments for every pull request
- Faster cold starts with bytecode caching
- 環境変数をブランチごとに切り替え

---
look: cloudflare
layout: cover
---

# Run code everywhere, without managing a single server

Developer platform update

---
look: cloudflare
---

# A Worker in eight lines

```ts
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const hit = await env.CACHE.get(url.pathname)
    return new Response(hit ?? 'miss', { status: hit ? 200 : 404 })
  },
}
```

Deployed to every location **in under 30 seconds**.

---
look: cloudflare
layout: fact
---

# 330+

Cities with a data center within 50 ms of most people online

---
look: cloudflare
layout: section
---

# Security by default

ネットワークの端で攻撃を止める

---
look: clay
layout: cover
---

# Reading a model's mind, one feature at a time

Interpretability research update

---
look: clay
---

# What we found

Each feature fires on a single, human-readable concept: a city, a programming bug, a tone of voice.

モデル内部の特徴を一つずつ取り出すと、その多くは人間が名前をつけられる概念に対応していた。

> Features can be turned up or down, and the model's behavior changes accordingly.

---
look: clay
layout: section
class: cactus
---

# Methods

Sparse autoencoders trained on the residual stream

---
look: clay
layout: quote
---

> The goal is not to remove the uncertainty, but to see it clearly.

Lab notebook, entry 214

---
look: keynote
layout: cover
---

# Thinner. Quieter. Faster.

---
look: keynote
layout: fact
---

# 22 hrs

of battery life on a single charge

---
look: keynote
layout: statement
---

# It just disappears.

---
look: keynote
---

# What's inside

- A new chip built for on-device intelligence
- **40% faster** graphics than the previous generation
- 一日中使えるバッテリー

---
look: tactical
layout: cover
---

# Autonomous perimeter

Program review / Unclassified

---
look: tactical
---

# System overview

- Sensor towers fuse radar, EO/IR, and RF detection
- Tracks are classified on the edge, not in the cloud
- One operator supervises **dozens of assets**
- 通信が途絶えても自律運用を継続

---
look: tactical
layout: fact
---

# 1,200 km²

Area covered per sensor tower

---
look: tactical
---

# Readiness

| Subsystem | Status | Last test |
|---|---|---|
| Radar | Nominal | 2026-10-18 |
| EO/IR | Nominal | 2026-10-19 |
| Datalink | Degraded | 2026-10-20 |
| Power | Nominal | 2026-10-20 |

---
look: dotmatrix
layout: cover
---

# Signal over noise

Product drop 03

---
look: dotmatrix
---

# A quieter interface

- Notifications show as light, not sound
- Only the apps you choose can interrupt
- 画面を見なくても状態がわかる

## Designed to be put down

---
look: dotmatrix
layout: fact
---

# 120Hz

Adaptive refresh, down to 1Hz at rest

---
look: dotmatrix
---

# Light patterns

```ts
glyph.play({
  pattern: 'pulse',
  zones: ['ring', 'dot'],
  brightness: 0.6,
})
```

---
look: mono
layout: cover
---

# Design in code, code in design

Workshop notes, v1.0

---
look: mono
---

# Tokens, not pixels

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --radius: 0;
  --font: 'Paper Mono', monospace;
}
```

Every value on the canvas **is a CSS value**.

---
look: mono
---

# The typeface

| Metric | Value |
|---|---|
| Glyphs | 800 |
| Weights | 8 (100 to 800) |
| Feature sets | 6 |
| Languages | 100+ |

---
look: mono
layout: statement
---

# for the love of type

---
look: mercury
layout: cover
---

# Banking that runs itself

Founder update, Q3

---
look: mercury
---

# Where cash sits today

| Account | Balance | Yield |
|---|---|---|
| Operating | $412,800 | 0.00% |
| Treasury | $2,150,000 | 4.12% |
| Payroll | $96,400 | 0.00% |

Idle cash above **three months of runway** moves to treasury automatically.

---
look: mercury
layout: fact
---

# 18 months

Runway at the current burn rate

---
look: mercury
layout: section
---

# Next quarter

採用計画と支出の見通し

---
look: manuscript
layout: cover
---

# Attention Is All You Need

Vaswani et al.

NeurIPS 2017

論文紹介, 2026-10-22

---
look: manuscript
---

# 問題設定

系列変換モデルの多くは再帰構造に依存しており、系列長に比例した逐次計算が学習の並列化を妨げていた<sup>[1]</sup>。

本論文は再帰も畳み込みも使わず、*attention* だけで入力と出力の依存関係を表現する。

### 主張

並列化しやすく、翻訳品質でも当時の最高性能を上回る。

---
look: manuscript
---

# 結果

<figure>

| Model | EN-DE BLEU | EN-FR BLEU |
|---|---|---|
| ConvS2S | 25.16 | 40.46 |
| Transformer (base) | 27.3 | 38.1 |
| Transformer (big) | 28.4 | 41.8 |

<figcaption>WMT 2014 での BLEU スコア。原論文 Table 2 より抜粋。</figcaption>
</figure>

---
look: manuscript
layout: quote
---

> We are excited about the future of attention-based models.

Vaswani et al., 2017, §7

---
look: plain
---

# 使い方

```yaml
---
theme: ./themes/stack
themeConfig:
  look: ledger   # デッキ全体の既定
---

---
look: clay       # このスライドだけ切り替え
layout: fact
---
```

---
look: plain
layout: two-cols
---

# 使えるレイアウト

- `cover` / `section`
- `statement` / `fact`
- `quote` / `two-cols`
- `default` / `end`

::right::

# 部品

- `<CountUp :to="4.2" />` 数字のカウントアップ
- `<Scramble text="..." />` 文字のデコード演出
- ページ番号は全スライドに自動で付く

---
look: plain
layout: end
---

# Thanks
