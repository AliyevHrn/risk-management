<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFieldsGrid from "./components/TheFieldsGrid.vue";
import TheTokensList from "./components/TheTokensList.vue";
import {tokensListHeight} from "./functions";

// tokensListHeight();

</script>

<template>
  <div class="wrapper flex">
    <div class="app-form w-2/3">
      <TheHeader />
      <main>
        <TheFieldsGrid/>
      </main>
    </div>
    <div class="tokens-list w-1/3">
      <TheTokensList />
    </div>
  </div>
</template>