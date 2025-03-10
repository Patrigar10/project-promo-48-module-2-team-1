//FUNCIÓN COLLAPSABLES NUEVA (ESCUCHANDO EL CLICK EN LEGEND)

const designModels = document.querySelector(".js-design-models");
const filloutFormDisplay = document.querySelector(".js-fillout-display");
const shareOptions = document.querySelector(".js-shareOptions");

const collapsableHeaders = document.querySelectorAll(".js_collapsable_header");

const handleClick = (event) => {
  if (event.currentTarget.classList.contains("js_legend_design")) {
    designModels.classList.toggle("collapsed");
    filloutFormDisplay.classList.add("collapsed");
    shareOptions.classList.add("collapsed");
  } else if (event.currentTarget.classList.contains("js_legend_fillout")) {
    filloutFormDisplay.classList.toggle("collapsed");
    designModels.classList.add("collapsed");
    shareOptions.classList.add("collapsed");
  } else {
    shareOptions.classList.toggle("collapsed");
    filloutFormDisplay.classList.add("collapsed");
    designModels.classList.add("collapsed");
  }
};

for (const legend of collapsableHeaders) {
  legend.addEventListener("click", handleClick);
}

//FUNCIONES COLAPSABLES Y CONSTANTES ANTIGUAS

// const tittleArrow = document.querySelector(".js-design-arrow");
// const selectedBtn = document.querySelector(".js-btn-add");
// const shareDisplay = document.querySelector(".js-btn-shareDisplay");

// function handleClickTwo(event) {
//   event.preventDefault();
//   designModels.classList.remove("collapsed");
//   filloutFormDisplay.classList.add("collapsed");
//   shareOptions.classList.add("collapsed");
// }
// tittleArrow.addEventListener("click", handleClickTwo);

// function handleClick(event) {
//   event.preventDefault();
//   filloutFormDisplay.classList.remove("collapsed");
//   designModels.classList.add("collapsed");
//   shareOptions.classList.add("collapsed");
// }
// selectedBtn.addEventListener("click", handleClick);

// function handleClickThree(event) {
//   event.preventDefault();
//   shareOptions.classList.remove("collapsed");
//   filloutFormDisplay.classList.add("collapsed");
//   designModels.classList.add("collapsed");
// }
// shareDisplay.addEventListener("click", handleClickThree);
