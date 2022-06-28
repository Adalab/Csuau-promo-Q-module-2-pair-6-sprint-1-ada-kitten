"use strict";

const form = document.querySelector(".js-new-form");

const listCats = document.querySelector(".js_list");

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

const kittenDesc1 = document.querySelector('.card_description1');
const kittenDesc2 = document.querySelector('.card_description2');
const kittenDesc3 = document.querySelector('.card_description3');

if (kittenDesc1.innerText.includes(descrSearchText)) {
  kittenDesc1.parentElement.classList.remove('hidden');
}
else {
  kittenDesc1.parentElement.classList.add('hidden');
}

if (kittenDesc2.innerText.includes(descrSearchText)) {
  kittenDesc2.parentElement.classList.remove('hidden');
}
else {
  kittenDesc2.parentElement.classList.add('hidden');
}
if (kittenDesc3.innerText.includes(descrSearchText)) {
  kittenDesc3.parentElement.classList.remove('hidden');
}
else {
  kittenDesc3.parentElement.classList.add('hidden');
}
