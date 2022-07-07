// Scriviamo un'applicazione JavaScript che permetta di soddisfare i seguenti criteri:

// Da utente voglio trovare al caricamento della pagina una barra di testo vuota e un bottone "Aggiungi".
// Da utente voglio trovare al caricamento della pagina trovare una lista, inizialmente vuota.
// Da utente voglio che, dopo aver riempito l'input, premendo invio possa aggiungere un elemento alla lista. L'elemento deve contenere:
// Un input di tipo checkbox;
// Uno span con il testo dell'input;
// Da utente voglio che dopo ogni submit il form si svuoti.
// Da utente voglio poter segnare alcuni elementi come fatti cliccando sull'input.
// Possiamo sviluppare l'esercizo con qualunque approccio.

// Bonus track (opzionale)
// Da utente voglio poter vedere l'orario (ora:minuti) in cui è stata aggiunta una task. Ref
// Da utente voglio vedere dopo il testo in ogni elemento della lista un bottone "Elimina". Ref se si lavora solo sul DOM
// Da utente posso cancellare la task corrispettiva cliccando il bottone "Elimina".
// Da utente voglio poter aggiornare la pagina senza perdere la lista corrente di task. Ref
// Metodo con oggetti (opzionale)
// Se si è confidenti di lavorare con oggetti (metodi, get/set, etc...) provare a sviluppare l'esercizo strutturando un oggetto con almeno:

// Metodo con oggetti (opzionale)

// Lista task in proprietà dedicata
// Metodo per aggiunta task
// Metodo per rimozione task
// Metodo per stampare a schermo
const getProductHTML = (product) => {
  return `
    <li>
        <div class="element">
            <input type="checkbox">
            <span class="text-articles">${product}</span>
        </div>
    </li>`;
};

const taskList = {
  _taskList: [],

  get products() {
    return this._taskList;
  },

  set products(products) {
    this._taskList.push(products);
  },

  renderHTML() {
    const $taskList = document.querySelector(".tasks-list");
    const prodotti = this.products.map(getProductHTML).join("");
    $taskList.innerHTML = `${prodotti}`;
  },
};

const $inputText = document.querySelector(".form-input");

$inputText.addEventListener("submit", (event) => {
  const $input = document.querySelector("input");
  taskList.products = $input.value;

  event.preventDefault();
  $input.value = "";
  console.log(taskList.products);
});

console.log(taskList.products);
