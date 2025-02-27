'use strict';

const formFill = document.querySelector(".js-formfill");
const previewName = document.querySelector(".js-preview-name");
const previewPhrase = document.querySelector(".js-preview-phrase");
const previewPlace = document.querySelector(".js-preview-place");
const previewDate = document.querySelector(".js-preview-date");
const previewAge = document.querySelector(".js-preview-age");
formFill.addEventListener("input", (event) => {
    console.log(event.target.value);
    if (event.target.id === "name") {
        previewName.innerHTML = event.target.value || "Nombre";
    } else if (event.target.id === "phrase") {
        previewPhrase.innerHTML = event.target.value || "Frase";
    } else if (event.target.id === "place") {
        previewPlace.innerHTML = event.target.value || "Lugar";
    } else if (event.target.id === "date") {
        previewDate.innerHTML = event.target.value || "Fecha";
    } else if (event.target.id === "age") {
        previewAge.innerHTML = event.target.value || "Edad";
    } 
})

/* Si los campos no se rellenan deja lo que había al principio */

// import "./fshare";


// Formulario fillout colapsed

const selectedBtn = document.querySelector(".js-btn-add");
const filloutFormDisplay = document.querySelector(".js-fillout-display");



function handleClick (event) {
    event.preventDefault();
    filloutFormDisplay.classList.toggle("collapsed");
    
};

selectedBtn.addEventListener("click", handleClick);