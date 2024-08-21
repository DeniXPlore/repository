const API = 'https://open.er-api.com/v6/latest/USD'
const search = document.querySelector('.searchBox')
const fromCurrency = document.querySelector('.from')
const toCurrency = document.querySelector('.to')
const convertButton = document.querySelector('.convert')
const finalValue = document.querySelector('.finalValue')
const finalAmount = document.getElementById('finalAmount')
const clearAll = document.querySelector('.clear')
let resultFrom
let resultTo
let searchValue

function displayResult(currency){
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo]; 
    finalValue.innerHTML = ((toRate/fromRate)*searchValue).toFixed(2);
    finalAmount.style.display = 'block';     
}


toCurrency.addEventListener('change', (event) =>{
   resultTo = event.target.value;
})
fromCurrency.addEventListener('change', (event) =>{
    resultFrom = event.target.value;
})
search.addEventListener('change', (event) =>{
    searchValue = event.target.value;
})



convertButton.addEventListener('click', () => {
   fetch(API)
   .then((data) =>{
    return data.json();   
   })
   .then(displayResult)
   .catch((error) => {
    console.error('ERROR!!!', error);
   })
})


