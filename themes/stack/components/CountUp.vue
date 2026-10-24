<script setup lang="ts">
import { useIsSlideActive, useNav, useSlideContext } from '@slidev/client'
import { onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ to: number, decimals?: number, duration?: number }>(), {
  decimals: 0,
  duration: 1200,
})

const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()
const active = useIsSlideActive()
const value = ref(props.to)
let raf = 0

function run() {
  cancelAnimationFrame(raf)
  if ($renderContext.value !== 'slide' || isPrintMode.value || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    value.value = props.to
    return
  }
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / props.duration, 1)
    value.value = props.to * (1 - (1 - t) ** 4)
    if (t < 1)
      raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

watch(active, on => on && run(), { immediate: true })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<template>
  <span style="font-variant-numeric: tabular-nums">{{ value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) }}</span>
</template>
