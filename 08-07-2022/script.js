// # Esercizi

// Scriviamo un'applicazione JavaScript che permetta, dato un input di testo in un form, al submit di effettuare una
// ricerca su https://openlibrary.org/ e motrare i risultati su una lista `<ul>`.

const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list");

const API_URL = "https://openlibrary.org/subjects/harry_potter.json";
const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

console.clear();

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = inputEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  console.log("sto chiamando", apiURL);

  fetch(apiURL)
    .then((response) => {
      const json = response.json();
      return json;
    })
    .then((json) => {
      listEl.innerHTML = json.docs
        .map((el) => {
          return `<li><img src='https://picsum.photos/100/100?${el.key}'>${el.title}</li>`;
        })
        .join("");
    })
    .catch((error) => {
      console.error(error);
      listEl.innerHTML = `<li>C'è stato un piccolo errore, riprovare!</li>`;
      return [];
    });
});
