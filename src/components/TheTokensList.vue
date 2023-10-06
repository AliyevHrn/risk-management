<script setup>
import TheTokenItem from "./TheTokenItem.vue";
import {ref} from "vue";
import { getData } from "../api/api";
import {priceChangeBorderColor, searchToken, toFixedNumber} from "../functions";
import TheTokenSearch from "./TheTokenSearch.vue";

let result = ref(null);
setInterval(async () => {
  result.value = await getData();
  priceChangeBorderColor();
  return result;
}, 1000);

</script>


<template>
  <div>
    <TheTokenSearch @keyup="searchToken($event)"/>
    <TheTokenItem v-for="item in result" :key="item.id" :percentage24hr="item.changePercent24Hr">
        <span class="token-item__title">{{ item.symbol }}</span>
        <div>
          <span>${{ toFixedNumber(item.priceUsd, 4) }}</span>
          <span class="pl-5">{{ toFixedNumber(item.changePercent24Hr, 2) }}%</span>
        </div>
    </TheTokenItem>
  </div>
</template>
