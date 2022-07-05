// # Esercizi

// ## Object methods

// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante con tutti gli addon attivi facendo
// la somma di tutti i values dentro product.addons. Usiamo `Object.values` per ottenere i costi aggiuntivi da sommare
// al `product.price`.

const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const prova = Object.values(product.addons);

let fullOptionalPrice = 0;
const total = prova.forEach((e) => {
  fullOptionalPrice += e;
});
const total2 = fullOptionalPrice + product.price;
console.log(total2);

//  // usiamo Object.values per sommare ed ottenere -> 110

// // ## Get/Set

// // 1. Implementare una grafica _**semplice**_ prendendo come spunto [questo shop](
// //    // https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-91be0b0ae011/
// //    ). La pagina deve comprendere:
// //     1. Lista di prodotti che vengono mostrati. (Possiamo gestire quelli nascosti sia non stampandoli che aggiungendo una
// //        classe per applicare un display:none);
// //     2. Paginazione con 3 bottoni per le pagine: (1,2,3).
// //     3. **_La parte con i filtri possiamo non implementarla al momento_**

// // 2. Partendo dal codice in calce:
// //     1. Scrivere il codice che permette al click su un bottone della paginazione di cambiare shop.page;
// //     2. Implementare il `setter` per la prop `shop.page`;
// //     3. Implementare `renderHTML` in modo da usarla quando necessario aggiornare il contenuto della pagina;
// //     4. Gestire la paginazione, si consiglia di farlo dentro il `getter` di `shop.products`.

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 6, // numero di risultati per pagina

  get getProducts() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */

    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;

    console.log("Stai leggendo i prodotti di ", this.name);
    const startIndex = 0; // ...
    const endIndex = this._products.length / this._per_page; // ...
    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return paginatedProducts;
  },

  set paperino(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.getProducts.map(getProductHTML).join("");
    document.body.innerHTML = `
        <h2>Offerte lampo</h2>
        <ul>${productsHTML}</ul>
    `;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.  \\1
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};

shop.paperino = [
  {
    name: "primo",
    price: 100,
  },
  {
    name: "secondo",
    price: 350,
  },
  {
    name: "Samsung S20",
    price: 899,
  },
  {
    name: "Xiaomi Mi11",
    price: 499,
  },
  {
    name: "Philipps Tv",
    price: 600,
  },
  {
    name: "Macbook Air M1",
    price: 949,
  },
  {
    name: "GTX 3080",
    price: 670,
  },
  {
    name: "Radeon RX6800",
    price: 600,
  },
  {
    name: "Iphone 12",
    price: 899,
  },
  {
    name: "Mele",
    price: 2,
  },
  {
    name: "Banane",
    price: 1,
  },
  {
    name: "Salmone",
    price: 4,
  },
  {
    name: "Cooler Master Case",
    price: 49,
  },
  {
    name: "Cubo di Rubik",
    price: 10,
  },
  {
    name: "Tazza Caffè",
    price: 3,
  },
];
