'use strict';

//// Expresions
const bill = document.getElementById('bill'); //// Functionality
const tipBtns = document.querySelectorAll('btn--tip');
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
    console.log('class removed');

    //set active state
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add('btn--active');
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  //clear custom tip
  custom.value = '';

  calculateTip();

  //console.log(tipValue);
}

function calculateTip() {}

function reset() {
  bill.value = '0';
  setBillValue();

  tipBtns[2].click();

  people.value = '1';
}
