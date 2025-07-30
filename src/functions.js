
export function setFieldValue() {
    let fieldPriceValue = Number(document.querySelector('#field-price').value);
    let fieldOrderSum = Number(document.querySelector('#field-order-sum').value);
    let fieldCountValue = document.querySelector('#field-count');


    if(fieldPriceValue) {
        if(fieldOrderSum) {
            fieldCountValue.value = toFixedNumber((fieldOrderSum - (fieldOrderSum * 0.001)) / fieldPriceValue, 3);
        }
    }
    setTakeProfit();
    setStopLoss();
}
export function setTakeProfit() {
    let fieldOrderSumValue = Number(document.querySelector('#field-order-sum').value);
    let fieldCountValue = Number(document.querySelector('#field-count').value);
    let fieldIncomeValue = Number(document.querySelector('#field-income').value);
    let takeProfit = document.querySelector('#takeprofit');
    let resultIncome = document.querySelector('#result-income');
    let resultIncomeSum = document.querySelector('#result-income-sum');

    let percentageValue = (fieldOrderSumValue / 100) * fieldIncomeValue;

    if(fieldOrderSumValue && fieldCountValue && fieldIncomeValue) {
        takeProfit.value = toFixedNumber((fieldOrderSumValue + percentageValue) / fieldCountValue, 4);
        resultIncome.value = toFixedNumber(percentageValue, 4);
        resultIncomeSum.value = toFixedNumber(fieldOrderSumValue + percentageValue, 4);
    }
}
export function setStopLoss() {
    let fieldOrderSumValue = Number(document.querySelector('#field-order-sum').value);
    let fieldCountValue = Number(document.querySelector('#field-count').value);
    let fieldRiskValue = Number(document.querySelector('#field-risk').value);
    let stopLoss = document.querySelector('#stoploss');
    let resultLoss = document.querySelector('#result-loss');
    let resultLossSum = document.querySelector('#result-loss-sum');

    let percentageValue = (fieldOrderSumValue / 100) * fieldRiskValue;

    if(fieldOrderSumValue && fieldCountValue && fieldRiskValue) {
        stopLoss.value = toFixedNumber((fieldOrderSumValue - percentageValue) / fieldCountValue,4);
        resultLoss.value = toFixedNumber(percentageValue, 4);
        resultLossSum.value = toFixedNumber(fieldOrderSumValue - percentageValue, 4);
    }
}
export function clearForm() {
    let fields = document.querySelectorAll('.app-form input');
    fields.forEach(item => item.value = '');
}
export function saveOrder() {
    let fieldsItems = document.querySelectorAll('.field-wrapper');
    let orderData = {};
    let titleText, value;
    fieldsItems.forEach(item => {
        titleText = item.querySelector('.field-title').innerText.toLowerCase();
        value = item.querySelector('input').value;
        orderData[titleText] = value;
    });
    console.log(orderData);
}

export function typeOnlyNumbers(event) {
    const regexp = /^(0|[1-9]\d*)([.,]\d+)?/;
    if(!regexp.test(event.target.value)) {
        event.target.value = event.target.value.slice(0, -1);
        event.target.style.borderColor = '#cc2132';
    } else {
        event.target.style.borderColor = '#0da372';
    }
}
export function typeOnlyLetters(event) {
    const regexp = /^([a-zа-яё]+)$/gi;
    if(!regexp.test(event.target.value)) {
        event.target.value = event.target.value.slice(0, -1);
        // event.target.style.borderColor = '#cc2132';
    } else {
        // event.target.style.borderColor = '#0da372';
    }
}
export function toFixedNumber(number, numberCount) {
    return Number(number).toFixed(numberCount);
}

export function priceChangeBorderColor() {
    let fieldsItems = document.querySelectorAll('.token-item');
    fieldsItems.forEach(item => {
        const percentPrice = Number(item.dataset.pricechange);
        if(percentPrice >= 0) {
            item.style.borderColor = '#0da372';
        } else if(percentPrice < 0){
            item.style.borderColor = '#cc2132';
        }
    })

}

export function searchToken(event) {
    let fieldsItems = document.querySelectorAll('.token-item');
    let arrFieldsItems = Array.from(fieldsItems);
    let fullName = '';
    fullName = fullName + event.target.value.toLowerCase();
    arrFieldsItems.map(item => {
        let itemName = item.querySelector('.token-item__title').innerText.toLowerCase();
        if(itemName.includes(fullName)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
    if(event.key, event.target.value === '') {
        arrFieldsItems.map(item => item.style.display = 'none');
    }
}

export function tokensListHeight() {
    let appFormHeight = document.querySelector('.app-form').offsetHeight;
    let tokensList = document.querySelector('.tokens-list');
    tokensList.offsetHeight = appFormHeight;
}