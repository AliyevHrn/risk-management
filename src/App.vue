<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFieldsGrid from "./components/TheFieldsGrid.vue";
import TheTokensList from "./components/TheTokensList.vue";
import {scrollTokensList, tokensListHeight} from "./functions";
import {onMounted} from "vue";

onMounted(() => {
  tokensListHeight();
})

</script>

<template>
  <div class="wrapper flex items-start">
    <div class="app-form w-2/3">
      <TheHeader />
      <main>
        <TheFieldsGrid/>
      </main>
    </div>
    <div class="tokens-list w-1/3" @scroll="scrollTokensList($event)">
      <TheTokensList />
    </div>
  </div>
</template>