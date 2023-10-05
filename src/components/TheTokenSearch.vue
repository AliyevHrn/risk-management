<script setup>
import TheInput from "src/components/TheInput.vue";
import {typeOnlyLetters} from "src/functions";
</script>

<template>
    <TheInput
        placeholder="Найти..."
        class="mb-5 flex justify-between text-black items-center"
        styles="field-search border uppercase rounded-full pl-5 pr-5 text-lg h-12"
        @keyup="typeOnlyLetters($event)"
  />
</template>
