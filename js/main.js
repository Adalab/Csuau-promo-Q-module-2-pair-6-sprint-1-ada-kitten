"use strict";

const form = document.querySelector(".js-new-form");

const listCats = document.querySelector(".js_list");

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Anastacio";
const kittenDesc =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace = "British Shorthair";

const kittenImage2 =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";

const kittenName2 = "Fiona";

const kittenImage3 =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";

const kittenName3 = "Cielo";

const kittenOne = `<li>${kittenImage1} ${kittenName1} ${kittenDesc}</li>`;
kittenOne.classList.add(
  "card_img",
  "card_title",
  "card_race",
  "card_description"
);

const kittenTwo = `<li class="card">
<img class="card_img"
    src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
    alt="gatito" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
    Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img"
    src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
    alt="gatito" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
    Es una maravilla acariciarle!
</p>
</li> `;

listCats.innerHTML = kittenOne + kittenTwo + kittenThree;
