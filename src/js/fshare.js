
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
-Cuando la usuaria haga click en el botón: Crear invitación:
  -mostrar el párrafo: 
           La tarjeta ha sido creada:
              -sale un link
      Botones con opciones de compartir en redes:
          -mobile   - email   -instagram

          */

const buttonCreateCard = document.querySelector(".js-share-btn-createCard");
const createdCardText = document.querySelector(".js-createdCardText");


function handleClickFour (event) {
    event.preventDefault();
    createdCardText.classList.toggle("collapsed");    
};
buttonCreateCard.addEventListener("click", handleClickFour);





