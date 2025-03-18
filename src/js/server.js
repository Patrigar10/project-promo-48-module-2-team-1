/* Cuando la usuaria haga "click" en Crear tarjeta, enviar los datos del formulario al servidor(petición de tipo POST).
El servidor responde con:
1. OK
2. id
Recoger id para poner en el enlace que se muestra a la usuaria.
Mostrar enlace a la usuaria. */

const shareOptions2 = document.querySelector(".js-shareOptions");
const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");
const divLinks = document.querySelector(".js-divLinks");


// Función para manejar el clic en "Comparte"
function handleShareClick(ev) {
  ev.preventDefault();

  // Ocultamos el resto del contenido (divLinks)
  divLinks.classList.add("hidden");
}
shareOptions2.addEventListener("click", handleShareClick);



// Función para crear de la invitación:
function handleCreateCard(ev) {
  ev.preventDefault();

  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const idCard = data.infoID;
      console.log(idCard);
      linkCard.classList.remove("hidden");
      linkCard.href = `./card.html?id=${idCard}`;
    });


  // Actualizamos el link con la URL de la tarjeta
  linkCard.href = `./card.html?id=${idCard}`;
  linkCard.classList.remove("hidden"); // Mostramos el link

  // Mostramos el contenido de los links
  divLinks.classList.remove("hidden");

}
createCardButton.addEventListener("click", handleCreateCard);
