<script setup>
  defineProps(['placeholder', 'styles', 'readonly', 'id'])
</script>
<template>
  <div>
    <input
        :id="id"
        type="text"
        :placeholder="placeholder"
        :class="`block w-full text-black ${styles}`"
        :readonly="readonly"
    >
  </div>
</template>