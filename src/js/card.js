"use  strict";

const photoCard = document.querySelector(".js__profile-preview");
const radio1Card = document.querySelector(".js-model1");
const radio2Card = document.querySelector(".js-model2");
const radio3Card = document.querySelector(".js-model3");
const nameCard = document.querySelector(".js-preview-name");
const phraseCard = document.querySelector(".js-preview-phrase");
const placeCard = document.querySelector(".js-preview-place");
const dateCard = document.querySelector(".js-preview-date");
const ageCard = document.querySelector(".js-preview-age");

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("idCard");

fetch(`https://dev.adalab.es/api/info/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
