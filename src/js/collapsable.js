// Formulario fillout colapsed

const tittleArrow = document.querySelector(".js-design-arrow");
const designModels = document.querySelector(".js-design-models");
const selectedBtn = document.querySelector(".js-btn-add");
const filloutFormDisplay = document.querySelector(".js-fillout-display");
const shareDisplay = document.querySelector(".js-btn-shareDisplay");
const shareOptions = document.querySelector(".js-shareOptions");

function handleClickTwo(event) {
  event.preventDefault();
  designModels.classList.remove("collapsed");
  filloutFormDisplay.classList.add("collapsed");
  shareOptions.classList.add("collapsed");
}
tittleArrow.addEventListener("click", handleClickTwo);

function handleClick(event) {
  event.preventDefault();
  filloutFormDisplay.classList.remove("collapsed");
  designModels.classList.add("collapsed");
  shareOptions.classList.add("collapsed");
}
selectedBtn.addEventListener("click", handleClick);

function handleClickThree(event) {
  event.preventDefault();
  shareOptions.classList.remove("collapsed");
  filloutFormDisplay.classList.add("collapsed");
  designModels.classList.add("collapsed");
}
shareDisplay.addEventListener("click", handleClickThree);
