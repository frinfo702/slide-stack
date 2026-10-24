<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { $frontmatter, $page, $nav, $slidev } = useSlideContext()

// Per-slide `look:` wins over the deck-wide `themeConfig.look`.
const look = computed(() => $frontmatter.look ?? $slidev.themeConfigs.look ?? 'plain')

const pad = (n: number) => String(n).padStart(2, '0')

const label = computed(() => {
  const n = $page.value
  const t = $nav.value.total
  switch (look.value) {
    case 'orbital':
    case 'tactical':
    case 'mission':
      return `${pad(n)} / ${pad(t)}`
    case 'mono': {
      const filled = Math.round((n / t) * 12)
      return `${'█'.repeat(filled)}${'░'.repeat(12 - filled)}  ${pad(n)}/${pad(t)}`
    }
    case 'ledger':
    case 'grid':
    case 'dotmatrix':
      return pad(n)
    case 'nightshift':
    case 'plain':
      return `${n} / ${t}`
    default:
      return String(n)
  }
})

// Position on a 0..1 scale where every page is one discrete step (used by rulers).
const steps = computed(() => Math.max($nav.value.total - 1, 1))
const step = computed(() => ($page.value - 1) / steps.value)
</script>

<template>
  <div class="look" :data-look="look" :style="{ '--step': step, '--steps': steps }">
    <span class="page-number">{{ label }}</span>
  </div>
</template>
