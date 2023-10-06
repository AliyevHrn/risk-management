<script setup>
import TheInput from "./TheInput.vue";
defineProps({
    'id': String,
    'title': String,
    'placeholder': String,
    'readonly': String
});
defineEmits(['keyup'])
</script>

<template>
  <div class="field-wrapper mb-5">
    <span class="field-title text-black text-xs font-bold uppercase">{{ title }}</span>
    <TheInput
        :id="id"
        :placeholder="placeholder"
        styles="h-12 uppercase"
        :readonly="readonly"
        @keyup="$emit('keyup', $event)"
    />
  </div>
</template>