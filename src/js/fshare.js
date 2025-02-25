

/* Pasos en humano:
-seleccionar el boton
-crear un parrafo
seleccionar un parrafo
cuando la usuaria haga click, mostrar un mensaje

-Cuando la usuaria haga click en Crear tarjeta:
  -mostrar el párrafo: La tarjeta ha sido creada:
      -sale un link
      Botones con opciones de compartir en redes:
          -mobile   - email   -instagram

*/
const createButton = document.querySelector(".js-btn-create")
console.log("hola");
createButton.addEventListener("click", (event) => {
    event.preventDefault();
   const createCard = createButton.Value;
   message.innerHTML = "La tarjeta ha sido creada:"
});
