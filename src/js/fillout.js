const formFill = document.querySelector(".js-formfill");
const previewName = document.querySelector(".js-preview-name");
const previewPhrase = document.querySelector(".js-preview-phrase");
const previewPlace = document.querySelector(".js-preview-place");
const previewDate = document.querySelector(".js-preview-date");
const previewAge = document.querySelector(".js-preview-age");

const formData = {
  field1: 0,
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  photo: "",
};

formFill.addEventListener("input", (event) => {
  console.log(event.target.value);
  if (event.target.id === "name") {
    previewName.innerHTML = event.target.value || "Nombre";
    formData.field2 = event.target.value;
  } else if (event.target.id === "phrase") {
    previewPhrase.innerHTML = event.target.value || "Frase";
    formData.field3 = event.target.value;
  } else if (event.target.id === "place") {
    previewPlace.innerHTML = event.target.value || "Lugar";
    formData.field4 = event.target.value;
  } else if (event.target.id === "date") {
    previewDate.innerHTML = event.target.value || "Fecha";
    formData.field5 = event.target.value;
  } else if (event.target.id === "age") {
    previewAge.innerHTML = event.target.value || "Edad";
    formData.field6 = event.target.value;
  } else
    console.log(formData);
});
