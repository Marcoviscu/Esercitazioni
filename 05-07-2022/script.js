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

const getProductHTML = (product) => {
  const { name, price, img } = product;

  return `<li><img src="${img}"><p class="title_product">${name}</p><p class="price_product">${price}</p><button class="buy">Compra</button></li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 6, // numero di risultati per pagina

  get products() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */

    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;
    // console.log(indexOfFirstPost, indexOfLastPost);

    // console.log("Stai leggendo i prodotti di ", this.name);
    // const startIndex = 0; // ...
    // const endIndex = this._products.length / this._per_page; // ...
    const paginatedProducts = this._products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return paginatedProducts;
  },

  set products(newProducts) {
    this._products = newProducts;
    this.renderHTML();
  },

  set page(newPage) {
    this._page = newPage;
    // console.log(this._page);
    this.renderHTML();
  },

  renderHTML() {
    const productsEl = document.querySelector(".products");

    const productsHTML = this.products.map(getProductHTML).join("");
    productsEl.innerHTML = `
         <ul>${productsHTML}</ul>
     `;
  },
};

// let button = document.querySelector("button");

// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     shop.page = button.getAttribute("id");
//     shop.renderHTML();
//   });
// });

let button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    shop.page = button.getAttribute("id");
    // shop.renderHTML();
  });
});

shop.products = [
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
