<script setup>
import TheFieldsItem from "./TheFieldsItem.vue";
import TheButton from "./TheButton.vue";
import { setFieldValue, clearForm, saveOrder, setTakeProfit, setStopLoss, typeOnlyNumbers, typeOnlyLetters } from "../functions";


</script>

<template>
<!--  <div class="pt-10">-->
<!--    <TheFieldsItem-->
<!--        id="field-search-token"-->
<!--        title="Найти токен"-->
<!--        placeholder="Введите название"-->
<!--        @keyup="typeOnlyLetters($event)"-->
<!--    />-->
<!--  </div>-->
  <div class="grid grid-cols-2 gap-3 pt-10">
    <TheFieldsItem
        id="field-price"
        title="Цена покупки"
        placeholder="Введите цену покупки"
        @change="setFieldValue()"
        @keyup="typeOnlyNumbers($event)"
    />
    <TheFieldsItem
        id="field-order-sum"
        title="Сумма сделки"
        placeholder="Введите сумму сделки"
        @change="setFieldValue()"
        @keyup="typeOnlyNumbers($event)"
    />
  </div>
  <div>
    <TheFieldsItem
        id="field-count"
        title="Количество"
        placeholder="Введите число"
        @change="setFieldValue()"
        @keyup="typeOnlyNumbers($event)"
    />
  </div>
  <div class="grid grid-cols-2 pt-3 gap-3">

    <TheFieldsItem
        id="field-income"
        title="Прибыль в %"
        placeholder="Введите число"
        @change="setTakeProfit()"
        @keyup="typeOnlyNumbers($event)"
    />
    <TheFieldsItem
        id="field-risk"
        title="Риск в %"
        placeholder="Введите число"
        @change="setStopLoss()"
        @keyup="typeOnlyNumbers($event)"
    />

    <TheFieldsItem
        id="takeprofit"
        title="Тейк-Профит"
        readonly="readonly"
    />
    <TheFieldsItem
        id="stoploss"
        title="Стоп-Лосс"
        readonly="readonly"
    />

    <TheFieldsItem
        id="result-income"
        title="Прибыль"
        readonly="readonly"
    />
    <TheFieldsItem
        id="result-loss"
        title="Убыток"
        readonly="readonly"
    />

    <TheFieldsItem
        id="result-income-sum"
        title="Итоговая сумма с учетом прибыли"
        readonly="readonly"
    />
    <TheFieldsItem
        id="result-loss-sum"
        title="Итоговая сумма с учетом убытка"
        readonly="readonly"
    />
  </div>

  <div class="text-right">
    <TheButton
        title="Сохранить"
        @click="saveOrder()"
        extraClass="btn-save mr-3"
    />
    <TheButton
        title="Сбросить"
        @click="clearForm()"
        extraClass="btn-clear"
    />
  </div>
</template>