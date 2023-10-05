<script setup>
  defineProps(['percentage24hr'])
</script>

<template>
  <div :data-priceChange="percentage24hr" class="token-item bg-white rounded-full h-12 flex justify-between pl-5 pr-5 mb-3 text-black items-center">
    <slot></slot>
  </div>
</template>