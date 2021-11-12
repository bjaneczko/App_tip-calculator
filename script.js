'use strict';

//// Expresions

const bill = document.getElementById('bill'); //// Functionality
const tipBtns = document.querySelectorAll('.btn--tip');
const custom = document.getElementById('custom');
const people = document.getElementById('people');
const alert = document.querySelector('.label--alert');
const results = document.querySelectorAll('.result__output');
const resetBtn = document.querySelector('.btn--reset');

//default values

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15; // 15% default

//// Event listeners
bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
custom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', reset);

//// Functions

function setBillValue() {
  if (bill.value.includes(',')) {
    bill.value = bill.value.replace(',', '.');
  }

  billValue = parseFloat(bill.value);

  calculateTip();
  // console.log(billValue);
}

function handleClick(event) {
  tipBtns.forEach(btn => {
    //clear active state
    btn.classList.remove('btn--active');

    //set active state
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add('btn--active');
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  //clear custom tip
  custom.value = '';

  calculateTip();

  console.log(tipValue);
}

function setTipCustomValue() {
  tipValue = parseFloat(custom.value / 100);

  //clear active state from btns
  tipBtns.forEach(btn => {
    btn.classList.remove('btn--active');
  });

  if (custom.value !== '') {
    calculateTip();
  }

  console.log(tipValue);
}

function setPeopleValue() {
  peopleValue = parseFloat(people.value);

  if (peopleValue <= 0) {
    alert.classList.add('show-alert');
    people.style.outlineColor = '#FF5733';
    setTimeout(function () {
      alert.classList.remove('show-alert');
      people.style.outlineColor = 'hsl(172, 67%, 45%)';
    }, 5000);
  }

  calculateTip();
}

function calculateTip() {
  let tipTotal = (billValue * tipValue) / peopleValue;
  let billTotal = (billValue + tipTotal) / peopleValue;

  results[0].innerHTML = `$${tipTotal.toFixed(2)}`;
  results[1].innerHTML = `$${billTotal.toFixed(2)}`;
}

function reset() {
  bill.value = '0';
  setBillValue();

  tipBtns[2].click();

  people.value = '1';
}
