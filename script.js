'use strict';

const numPeople = document.getElementById('numPeople');
const bill = document.getElementById('bill');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent site from reloading after submiting a form
  const percent = 10;
  const tip = (bill.value * (percent / 100)) / numPeople.value;
  console.log(tip);
  tipAmount.innerHTML = `$${tip}`;
  const total = (tip + Number(bill.value)) / Number(numPeople.value);
  totalAmount.innerHTML = `$${total}`;
});
