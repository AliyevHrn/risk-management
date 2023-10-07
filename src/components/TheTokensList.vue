<script setup>
import TheTokenItem from "./TheTokenItem.vue";
import {priceChangeBorderColor, searchToken, toFixedNumber} from "../functions";
import TheTokenSearch from "./TheTokenSearch.vue";
import {ref, onUpdated} from "vue";
const result = ref([]);

onUpdated(() => {
  priceChangeBorderColor();
  return result;
})
console.log(result);
</script>


<template>
  <div>
    <span class="sticky-to-top"></span>
    <TheTokenSearch @keyup.enter="searchToken($event, result)"/>
    <TheTokenItem v-for="item in result" :key="item.FROMSYMBOL" :percentage24hr="item.CHANGEPCT24HOUR">
        <span class="token-item__title grow">{{ item.FROMSYMBOL }}</span>
        <span>${{ toFixedNumber(item.PRICE, 4) }}</span>
        <span class="token-item__percent">{{ toFixedNumber(item.CHANGEPCT24HOUR, 2) }}%</span>
    </TheTokenItem>
    <span class="sticky-to-bottom"></span>
  </div>
</template>
