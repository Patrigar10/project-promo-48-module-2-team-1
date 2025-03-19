/* Si los campos no se rellenan deja lo que había al principio */

const resetBtn = document.querySelector(".js-reset-btn");
// const previewList = document.querySelector(".js-preview-list");

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  formFill.reset();
  previewName.innerHTML = "Nombre";
  previewPhrase.innerHTML = "Frase";
  previewPlace.innerHTML = "Lugar";
  previewDate.innerHTML = "Fecha";
  previewAge.innerHTML = "Edad";
  previewCard.classList.remove("background__model1");
  previewCard.classList.remove("background__model2");
  previewCard.classList.remove("background__model3");
  document.querySelector(".js__profile-image").src = "./../Images/nina.png";
  document.querySelector(".js__profile-preview").src = "./../Images/nina.png";
  document.querySelector(".js__profile-upload-btn").value = "";
});
