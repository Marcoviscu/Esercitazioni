// # Esercizio
// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:
// - Aggiunge anche un footer (magari identico all'header se volete)
// - Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// - Aggiungere section alla pagina che renderizza delle cards:
// - - https://fakestoreapi.com/products
// - - Filtro per quantità di prodotto disponisible superiore a 200
// - - Stile CSS a scelta

// # Avanzato
// Creare diverse sezioni, almeno 3 totali, che mostrino gli elementi in base a diversi filtri.

const newEl = (el) => document.createElement(el);

const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
let title = userLogIn;
localStorage.setItem("username", userLogIn);

const $navbar = newEl("nav");
const $logo = newEl("img");
const titleEl = newEl("h4");

$navbar.className = "navbar";
titleEl.className = "mainTitle";
$logo.className = "logo";

$logo.setAttribute("alt", "logo");
$logo.setAttribute("src", "./img/logo.svg");

titleEl.textContent = `Username:${title}`;
document.body.append(titleEl, $navbar, $logo);
$navbar.append($logo, titleEl);

try {
  console.log("prova");
  if (localStorage.getItem("username") !== userLogIn) {
    console.log("entro");
    localStorage.setItem("username", userLogIn);
    throw new Error("inserire username");
  }
} catch (error) {
  console.error(error);
}
