'use strict';

const formFill = document.querySelector(".js-formfill");
const previewName = document.querySelector(".js-preview-name");
const previewPhrase = document.querySelector(".js-preview-phrase");
const previewPlace = document.querySelector(".js-preview-place");
const previewDate = document.querySelector(".js-preview-date");
const previewAge = document.querySelector(".js-preview-age");

const formData = {
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: 0,
    field6: "",
    
}

formFill.addEventListener("input", (event) => {
    console.log(event.target.value);
    if (event.target.id === "name") {
        previewName.innerHTML = event.target.value || "Nombre";
        formData.field1 = event.target.value;
    } else if (event.target.id === "phrase") {
        previewPhrase.innerHTML = event.target.value || "Frase";
        formData.field2 = event.target.value;
    } else if (event.target.id === "place") {
        previewPlace.innerHTML = event.target.value || "Lugar";
        formData.field3 = event.target.value;
    } else if (event.target.id === "date") {
        previewDate.innerHTML = event.target.value || "Fecha";
        formData.field4 = event.target.value;
    } else if (event.target.id === "age") {
        previewAge.innerHTML = event.target.value || "Edad";
        formData.field5 = event.target.value;
    }
    console.log(formData);
})

/* Si los campos no se rellenan deja lo que había al principio */

// import "./fshare";


// Formulario fillout colapsed

const selectedBtn = document.querySelector(".js-btn-add");
const filloutFormDisplay = document.querySelector(".js-fillout-display");



selectedBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedForm = event.currentTarget;
    selectedForm.classList.toggle(".collpased");
    
});

const tittleArrow = document.querySelector(".js-tittle-arrow");
const designModels = document.querySelector(".js-design-models");

tittleArrow.addEventListener ("click", (event) => {
    designModels.classList.toggle("collapsed");
})