'use strict';

import "./fshare.js";


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

// AQUI TUVE CONFLICTO CON FUNCTION-RESET. MANTUVE LOS DOS. CHEQUEAR:

const resetBtn = document.querySelector(".js-reset-btn");
// const previewList = document.querySelector(".js-preview-list");

function reset() {
    formFill.reset(); // Resetea el formulario
    previewName.textContent = "Nombre";
}
resetBtn.addEventListener("Click", reset);

//Botón de reset

function reset(event) {
    // event.preventDefault();
    // formFill.reset(); // Resetea el formulario
    // previewName.innerHTML = "Nombre";
    console.log("has hecho click");
}
  
resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    formFill.reset();
    previewName.innerHTML = "Nombre";
    previewPhrase.innerHTML = "Frase";
    previewPlace.innerHTML = "Lugar";
    previewDate.innerHTML = "Fecha";
    previewAge.innerHTML = "Edad";
    

})





// Formulario fillout colapsed

const selectedBtn = document.querySelector(".js-btn-add");
const filloutFormDisplay = document.querySelector(".js-fillout-display");



function handleClick (event) {
    event.preventDefault();
    filloutFormDisplay.classList.toggle("collapsed");
   
};
selectedBtn.addEventListener("click", handleClick);



const tittleArrow = document.querySelector(".js-design-arrow");
const designModels = document.querySelector(".js-design-models");

function handleClickTwo (event) {
    event.preventDefault();
    designModels.classList.toggle("collapsed");
    
};
tittleArrow.addEventListener("click", handleClickTwo);

