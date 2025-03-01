
/* Pasos en humano para hacer el colapsable:
-seleccionar el boton de shareDisplay;
-cuando la usuaria haga click: 
    -desplegar o colapsar shareDisplay;

*/

const shareDisplay = document.querySelector(".js-btn-shareDisplay");
const shareOptions = document.querySelector(".js-shareOptions");



function handleClickThree (event) {
    event.preventDefault();
    shareOptions.classList.toggle("collapsed");
};
shareDisplay.addEventListener("click", handleClickThree);


/* Pasos para crear el link de la invitación:
-Cuando la usuaria haga click en Crear invitación:
  -mostrar el párrafo: 
           La tarjeta ha sido creada:
              -sale un link
      Botones con opciones de compartir en redes:
          -mobile   - email   -instagram

          */

const createCard = document.querySelector(".js-share-btn-createCard")
    createCard.addEventListener("click", (event) => {
    event.preventDefault();
    // const createCardFinal = event.target.innerText;
    // createCardFinal.innerHTML = "La tarjeta ha sido creada:";
 });
