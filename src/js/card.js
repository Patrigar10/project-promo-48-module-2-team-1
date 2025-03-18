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
const previewCard = document.querySelector(".js-previewCard");


const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

fetch(`https://dev.adalab.es/api/info/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const targetData = data.data;
    photoCard.src = targetData.photo;
    console.log(targetData);
    photoCard.innerHTML = `<img src="${targetData.photo}" alt="Foto de perfil">`;
    nameCard.innerHTML = targetData.field2;
    phraseCard.innerHTML = targetData.field3;
    placeCard.innerHTML = targetData.field4;
    dateCard.innerHTML = targetData.field5;
    ageCard.innerHTML = targetData.field6;

    if (targetData.field1 === 1) {
      previewCard.classList.add("background__model1");
      previewCard.classList.remove("background__model2", "background__model3");
    } else if (targetData.field1 === 2) {
      previewCard.classList.add("background__model2");
      previewCard.classList.remove("background__model1", "background__model3");
    } else if (targetData.field1 === 3) {
      previewCard.classList.add("background__model3");
      previewCard.classList.remove("background__model1", "background__model2");
    }
  });
