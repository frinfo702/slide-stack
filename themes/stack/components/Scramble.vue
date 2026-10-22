<script setup lang="ts">
import { useIsSlideActive, useSlideContext } from '@slidev/client'
import { onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ text: string, duration?: number }>(), { duration: 900 })

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_'
const { $renderContext } = useSlideContext()
const active = useIsSlideActive()
const shown = ref(props.text)
let raf = 0

// Characters settle left to right; spaces stay put so the line never reflows.
function run() {
  cancelAnimationFrame(raf)
  if ($renderContext.value !== 'slide' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = props.text
    return
  }
  const start = performance.now()
  const tick = (now: number) => {
    const settled = Math.floor(((now - start) / props.duration) * props.text.length)
    shown.value = [...props.text]
      .map((c, i) => (i < settled || c === ' ') ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
      .join('')
    if (settled < props.text.length)
      raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

watch(active, on => on && run(), { immediate: true })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<template>
  <span :aria-label="text">{{ shown }}</span>
</template>
