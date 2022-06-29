// <!-- # Esercizio
// Sulla base della lezione del giorno, aggiungere una form che permetta all'utente finale di fare una chiamata POST al server. Questo permette di aggiungere una nuova serie tv all'indirizzo: `https://edgemony-backend.herokuapp.com/series`

// I passi da eseguire:
// - Rimuovere la logica relativa al bottono Aggiunge serie.
// - Creare una form che includa 3 inputs, una per il titolo, una per imgUrl e una per anno (di produzione della serie).
// - Creare un bottone al cui click i valori delle tre input sopra vengano spediti come parte del `body` utile alla chiamata POST.
// - Inoltre al click del bottone di sopra riaggiornare la pagina -->

import { q, createCard } from "./utils.js";
import { GET, POST, DELETE } from "./api.js";

const BASE_URL = "https://edgemony-backend.herokuapp.com/series";
const addSerieBtnEl = q(".add-serie");
const removeSerieBtnEl = q(".remove-serie");
const deleteInputEl = q(".delete");
const titleInputEl = q(".title");
const posterInputEl = q(".poster");
const yearInputEl = q(".year");

const body = {
  favorite: false,
  genres: ["scifi"],
  new: false,
  poster: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
  rating: 50,
  seasons: 4,
  title: "Rick e Morty",
};

GET(BASE_URL).then((data) => {
  data.map((serie) => {
    const imgOrPlaceholder = serie.poster || "https://picsum.photos/200/300";

    try {
      createCard(document.body, imgOrPlaceholder, serie.title, serie.id);
    } catch (error) {
      console.log(error);
    }
  });
});

addSerieBtnEl.addEventListener("click", () => {
  const titleInputEl = q(".title").value;
  const posterInputEl = q(".poster").value;
  const yearInputEl = q(".year").value;

  const body = {
    title: titleInputEl,
    poster: posterInputEl,
    year: yearInputEl,
  };
  POST(BASE_URL, body).then(() => location.reload());
});

deleteInputEl.addEventListener("input", (eventInput) => {
  removeSerieBtnEl.addEventListener("click", (eventClick) => {
    DELETE(BASE_URL, eventInput.target.value).then(() => location.reload());
  });
});
