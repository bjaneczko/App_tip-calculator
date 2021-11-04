'use strict';

//// Expresions
const form = document.querySelector('form');
const numPeople = document.getElementById('numPeople');
const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const resetBtn = document.getElementById('resetBtn');
const textAlert = document.getElementById('textAlert');
const buttons = document.querySelectorAll('button');
const custom = document.getElementById('custom');

//// Functionality
resetBtn.addEventListener('click', reset);

function reset() {
  bill.value = 0;
  numPeople.value = 0;
  tip.innerHTML = '$0.00';
  total.innerHTML = '$0.00';
  numPeople.classList.remove('input--alert');
  textAlert.classList.add('hide');
}
