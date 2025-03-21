"use strict";

// const designModels = document.querySelector(".js-design-models");

// designModels.addEventListener("click", (event) => {
//     console.log(event.target);

//     if (event.target.value === "1") {
//         console.log("click 1");
//     }

// })

const radio1 = document.querySelector(".js-model1");
const radio2 = document.querySelector(".js-model2");
const radio3 = document.querySelector(".js-model3");
const previewCard = document.querySelector(".js-previewCard");

radio1.addEventListener("change", (event) => {
  formData.field1 = parseInt(event.target.value);
  previewCard.classList.add("background__model1");
  previewCard.classList.remove("background__model2", "background__model3");
});

radio2.addEventListener("change", (event) => {
  formData.field1 = parseInt(event.target.value);
  previewCard.classList.add("background__model2");
  previewCard.classList.remove("background__model1", "background__model3");
});

radio3.addEventListener("change", (event) => {
  formData.field1 = parseInt(event.target.value);
  previewCard.classList.add("background__model3");
  previewCard.classList.remove("background__model1", "background__model2");
});
