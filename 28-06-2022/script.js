// # Esercizio
// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:
// - Aggiunge anche un footer (magari identico all'header se volete)
// - Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// - Aggiungere section alla pagina che renderizza delle cards:
// - https://fakestoreapi.com/products
// - Filtro per quantità di prodotto disponisible superiore a 200
// - Stile CSS a scelta

// # Avanzato
// Creare diverse sezioni, almeno 3 totali, che mostrino gli elementi in base a diversi filtri.

import { createCard, q, newEl, $wrapperSection } from "./utils.js";

const BASE_URL = "https://fakestoreapi.com/products";

const loadingEl = q(".loading");

const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
let title = userLogIn;
localStorage.setItem("Username", userLogIn);

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const filteredProducts = data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(document.body, product.image, product.title, product.price)
      );
    $headerFilter.textContent = `Your research has found: ${filteredProducts.length}`;
    $footerFilter.textContent = `Your research has found: ${filteredProducts.length}`;
  })
  .then(() => (titleEl.textContent = `Bentornato,${title}`))
  .then(() => (loadingEl.style.display = "none"));

// mainNav

const $navbar = newEl("nav");
const $logo = newEl("img");
const titleEl = newEl("h4");
const $footerTitle = newEl("h4");
const $footerFilter = newEl("p");
const $headerFilter = newEl("p");
const $footer = newEl("footer");

$navbar.className = "navbar";
titleEl.className = "mainTitle";
$logo.className = "logo";
$footer.className = "mainFooter";

$logo.setAttribute("alt", "logo");
$logo.setAttribute("src", "./images/logo.svg");

titleEl.textContent = `Bentornato,${title}!`;
document.body.append(titleEl, $navbar, $logo, $wrapperSection, $footer);
$navbar.append($logo, titleEl, $headerFilter);
$footer.append($footerTitle, $footerFilter);
