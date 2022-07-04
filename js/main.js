"use strict";

// const form = document.querySelector(".js-new-form");

// const listCats = document.querySelector(".js_list");

// const input_search_desc = document.querySelector(".js_in_search_desc");
// /*input_search_desc.value = "cariñoso";
// const descrSearchText = input_search_desc.value;
// */
// const descrSearchText = input_search_desc.value;

// const kittenDesc1 = document.querySelector(".card_description1");
// const kittenDesc2 = document.querySelector(".card_description2");
// const kittenDesc3 = document.querySelector(".card_description3");

// if (kittenDesc1.innerText.includes(descrSearchText)) {
//   kittenDesc1.parentElement.classList.remove("hidden");
// } else {
//   kittenDesc1.parentElement.classList.add("hidden");
// }

// if (kittenDesc2.innerText.includes(descrSearchText)) {
//   kittenDesc2.parentElement.classList.remove("hidden");
// } else {
//   kittenDesc2.parentElement.classList.add("hidden");
// }
// if (kittenDesc3.innerText.includes(descrSearchText)) {
//   kittenDesc3.parentElement.classList.remove("hidden");
// } else {
//   kittenDesc3.parentElement.classList.add("hidden");
// }

// const icon = document.querySelector(".fa-plus-circle");
// const menuColl = document.querySelector(".js-new-form");

// icon.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (menuColl.classList.contains("collapsed")) {
//     menuColl.classList.remove("collapsed");
//   } else {
//     menuColl.classList.add("collapsed");
//   }
// });

// const buttonAdd = document.querySelector(".js-btn-add");
// const inputDesc = document.querySelector(".js-input-desc");
// const inputPhoto = document.querySelector(".js-input-photo");
// const inputName = document.querySelector(".js-input-name");
// const labelMesageError = document.querySelector(".js-label-error");

// buttonAdd.addEventListener("click", (event) => {
//   event.preventDefault();

//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;

//   if (valueDesc === "" || valuePhoto === "" || valueName === "") {
//     labelMesageError.innerHTML = "Debe rellenar todos los valores";
//     //completa el código
//   } else {
//     labelMesageError.classList.add("collapsed");
//   }
// });

// const buttonSearch = document.querySelector(".js_buttonSearch");
// const inputSearch = document.querySelector(".js_in_search_desc");
// const inputRace = document.querySelector(".js_input-race");
// const labelMesageError2 = document.querySelector(".js-label-error2");

// buttonSearch.addEventListener("click", (event) => {
//   event.preventDefault();

//   const valueSearch = inputSearch.value;
//   const valueRace = inputRace.value;

//   if (valueSearch === "" || valueRace === "") {
//     labelMesageError2.innerHTML = "Debe rellenar todos los valores";
//     //completa el código
//   } else {
//     labelMesageError2.classList.add("collapsed");
//   }
// });
// */
// const icon = document.querySelector(".fa-plus-circle");

// function showNewCatForm() {
//   form.classList.remove("collapsed");
// }
// function hideNewCatForm() {
//   form.classList.add("collapsed");
// }

// function handleClickNewCatForm(event) {
//   event.preventDefault();
//   if (form.classList.contains("collapsed")) {
//     showNewCatForm();
//   } else {
//     hideNewCatForm();
//   }
// }
// icon.addEventListener("click", handleClickNewCatForm);

// const nameCat = document.querySelector(".js-input-name");

// const nameDiv = document.querySelector(".js-div");
// const addBtn = document.querySelector(".js-btn-add");

// function renderKitten(event) {
//   event.preventDefault();
//   const nombre = nameCat.value;
//   nameDiv.innerHTML = ` Hola
//   ${nombre}`;
// }
// addBtn.addEventListener("click", renderKitten);

// const buttonCancelForm = document.querySelector(".js-btn-cancel");

// cancelNewKitten = (event) => {
//   event.preventDefault();
// };

// buttonCancelForm.addEventListener("click", cancelNewKitten);

// const buttonSearch = document.querySelector(".js_buttonSearch");

// let listElement = document.querySelector(".js-listElement");

// const filterKitten = (event) => {
//   event.preventDefault();
//   if (kittenDesc1.includes(descrSearchText)) {
//     listElement.innerHTML += kittenOne;
//   }
//   if (kittenDesc2.includes(descrSearchText)) {
//     listElement.innerHTML += kittenTwo;
//   }
//   if (kittenDesc3.includes(descrSearchText)) {
//     listElement.innerHTML += kittenThree;
//   }
// };

// buttonSearch.addEventListener("click", filterKitten);

//ejemplo de un objeto con la información del primer gatito
// const kittenData_1 = {
//   image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
//   name: "Anastacio",
//   desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
//   race: "British Shorthair",
// };
// const kittenData_2 = {
//   image:
//     "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
//   name: "Fiona",
//   desc: "Ruiseño,cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
//   race: "British Shorthair",
// };
// const kittenData_3 = {
//   image:
//     "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
//   name: "Cielo",
//   desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
//   race: "British Shorthair",
// };

// function renderKitten (kittenData) {
//   console.log('kittenData.image');

// }
// renderKitten(kittenData_1);

let listElement = document.querySelector(".js-listElement");

const kittenDataList = [
  {
    image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    name: "Anastacio",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
  },
  {
    image:
      "https://static3.lasprovincias.es/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg",
    name: "Fiona",
    desc: "Ruiseño,cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
  },
  {
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    name: "Cielo",
    desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    race: "British Shorthair",
  },
];

function renderKitten(perData) {
  const html = `<li class="card">

  <img class="card_img" src="${perData.image}" alt="gatito" />
  <h3 class="card_title">${perData.name}</h3>
  <h4 class="card_race">${perData.race}</h4>
  <p class="card_description1 ">${perData.desc}
  </p>

</li>`;
  return html;
}

let index = 0;
let html = "";
html += renderKitten(kittenDataList[index]);

listElement.innerHTML = html;

index++;
html += renderKitten(kittenDataList[index]);
listElement.innerHTML = html;
index++;
html += renderKitten(kittenDataList[index]);
listElement.innerHTML = html;
