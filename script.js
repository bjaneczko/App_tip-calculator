'use strict';

const numPeople = document.getElementById('numPeople');
const bill = document.getElementById('bill');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const resetBtn = document.getElementById('resetBtn');
const alertText = document.getElementById('alertText');

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent site from reloading after submiting a form
  if (numPeople.value > 0) {
    numPeople.style.setProperty('--some-color', 'hsl(172, 67%, 45%)');
    numPeople.classList.remove('input--alert');
    alertText.classList.add('hide');
    const percent = 10;
    let tip = (bill.value * (percent / 100)).toFixed(2);
    console.log(tip);
    tipAmount.innerHTML = `$${tip / numPeople.value}`;
    let total = Number(tip) + Number(bill.value);
    totalAmount.innerHTML = `$${total / numPeople.value}`;
    console.log(total);
  } else {
    numPeople.style.setProperty('--some-color', 'red');
    numPeople.classList.add('input--alert');
    alertText.classList.remove('hide');
  }
});

function reset() {
  bill.value = 0;
  numPeople.value = 0;
  tipAmount.innerHTML = '$0.00';
  totalAmount.innerHTML = '$0.00';
  numPeople.classList.remove('input--alert');
  alertText.classList.add('hide');
}

resetBtn.addEventListener('click', reset);
