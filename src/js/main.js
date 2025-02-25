'use strict';

const formFill = document.querySelector(".js-formfill");
const previewName = document.querySelector(".js-preview-name");
const previewPhrase = document.querySelector(".js-preview-phrase");

formFill.addEventListener("input", (event) => {
    console.log(event.target.value);
    if (event.target.id === "name") {
        previewName.innerHTML = event.target.value;
    } else if (event.target.id === "phrase") {
        previewPhrase.innerHTML = event.target.value;
    }
})

// import "./fshare";