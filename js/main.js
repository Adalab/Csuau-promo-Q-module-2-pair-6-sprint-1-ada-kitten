"use strict";

const form = document.querySelector(".js-new-form");

const listCats = document.querySelector(".js_list");

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

const kittenDesc1 = document.querySelector('.card_description1');
const kittenDesc2 = document.querySelector('.card_description2');
const kittenDesc3 = document.querySelector('.card_description3');

if (kittenDesc1.includes(descrSearchText)) {
  kittenDesc1.classList.remove('hidden');
}


if (kittenDesc2.includes(descrSearchText)) {
  if (kittenDesc2.classList.contains('hidden')) {
    kittenDesc2.classList.remove('hidden');
  }
  else { kittenDesc2.classList.add('hidden') }
}
if (kittenDesc3.includes(descrSearchText)) {
  if (kittenDesc3.classList.contains('hidden')
  ) {
    kittenDesc3.classList.remove('hidden');
  }
  else { kittenDesc3.classList.add('hidden') }
}
