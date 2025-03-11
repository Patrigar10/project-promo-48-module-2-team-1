/* Cuando la usuaria haga "click" en Crear tarjeta, enviar los datos del formulario al servidor (petición de tipo POST).
El servidor responde con:
1. OK
2. id
Recoger id para poner en el enlace que se muestra a la usuaria.
Mostrar enlace a la usuaria. */

const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");

function handleCreateCard (ev) {
    ev.preventDefault();
    fetch ("https://dev.adalab.es/api/info/data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type":"aplication/json"}
    })
    .then(response => response.JSON())
    .then(data => {
        console.log(data);
    })

}





createCardButton.addEventListener("click", handleCreateCard);
