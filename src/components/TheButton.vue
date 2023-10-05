<script setup>
defineProps(['title', 'extraClass'])
</script>

<template>
  <button :class="`${extraClass} rounded-full p-3 pl-5 pr-5 text-white text-xs uppercase font-bold`">
    {{ title }}
  </button>
</template>