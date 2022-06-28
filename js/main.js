"use strict";

const form = document.querySelector(".js-new-form");

const listCats = document.querySelector(".js_list");

const input_search_desc = document.querySelector(".js_in_search_desc");
input_search_desc.value = "cariñoso";
const descrSearchText = input_search_desc.value;

const kittenDesc1 = document.querySelector(".card_description1");
const kittenDesc2 = document.querySelector(".card_description2");
const kittenDesc3 = document.querySelector(".card_description3");

if (kittenDesc1.innerText.includes(descrSearchText)) {
  kittenDesc1.parentElement.classList.remove("hidden");
} else {
  kittenDesc1.parentElement.classList.add("hidden");
}

if (kittenDesc2.innerText.includes(descrSearchText)) {
  kittenDesc2.parentElement.classList.remove("hidden");
} else {
  kittenDesc2.parentElement.classList.add("hidden");
}
if (kittenDesc3.innerText.includes(descrSearchText)) {
  kittenDesc3.parentElement.classList.remove("hidden");
} else {
  kittenDesc3.parentElement.classList.add("hidden");
}

const icon = document.querySelector(".fa-plus-circle");
const menuColl = document.querySelector(".js-new-form");

icon.addEventListener("click", (event) => {
  event.preventDefault();
  if (menuColl.classList.contains("collapsed")) {
    menuColl.classList.remove("collapsed");
  } else {
    menuColl.classList.add("collapsed");
  }
});

const buttonAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMesageError = document.querySelector(".js-label-error");

buttonAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
    //completa el código
  } else {
    labelMesageError.classList.add("collapsed");
  }
});

const buttonSearch = document.querySelector(".js_buttonSearch");
const inputSearch = document.querySelector(".js_in_search_desc");
const inputRace = document.querySelector(".js_input-race");
const labelMesageError2 = document.querySelector(".js-label-error2");

buttonSearch.addEventListener("click", (event) => {
  event.preventDefault();

  const valueSearch = inputSearch.value;
  const valueRace = inputRace.value;

  if (valueSearch === "" || valueRace === "") {
    labelMesageError2.innerHTML = "Debe rellenar todos los valores";
    //completa el código
  } else {
    labelMesageError2.classList.add("collapsed");
  }
});
