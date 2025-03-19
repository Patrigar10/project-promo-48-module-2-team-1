/* Cuando la usuaria haga "click" en Crear tarjeta, enviar los datos del formulario al servidor (petición de tipo POST).
El servidor responde con:
1. OK
2. id
Recoger id para poner en el enlace que se muestra a la usuaria.
Mostrar enlace a la usuaria. */

const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");
const divLinks = document.querySelector(".js-divLinks");
const phrase = document.querySelector(".js-phrase");
const twitterBtn = document.querySelector(".js-twitterBtn")



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
      // photoCard.src = targetData.photo;
      const idCard = data.infoID;
      console.log(idCard);
      linkCard.classList.remove("hidden");
      phrase.classList.remove("hidden");
      twitterBtn.classList.remove("hidden");
      linkCard.href = `./card.html?id=${idCard}`;
      linkCard.innerHTML = `./card.html?id=${idCard}`
    });
}

createCardButton.addEventListener("click", handleCreateCard);


const whatsappBtn = document.querySelector(".js-whatsappBtn");

function handleShareToWhatsApp() {
  const link = linkCard.href;
  const message = `¡Te invito a mi cumple!! ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;


  window.open(whatsappURL, "_blank");  // Abre la URL de WhatsApp
}

whatsappBtn.addEventListener("click", handleShareToWhatsApp);



/*
    // Actualizamos el link con la URL de la tarjeta
    linkCard.href = `./card.html?id=${idCard}`;
    // linkCard.classList.remove("hidden"); // Mostramos el link
  
    // Mostramos el contenido de los links
    divLinks.classList.remove("hidden");
    o
    divLinks.classList.add("hidden");

    */
