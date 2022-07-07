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

  return `<li><img src="${img}"><p class="title_product">${name}</p><p class="price_product">${price}$</p><button class="buy">Compra</button></li>`;
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

// const $pagination = document.querySelector(".pagination");

// const $buttons = document.querySelector(".buttons");

// $pagination.addEventListener("click", function (event) {
//   console.log("click su pagination");

//   if (e.target.tagName === "BUTTON") {
//     e.preventDefault();

//     console.log("stai cliccando su button");
//     const buttonEl = e.target;
//     const newPage = Number(buttonEl.innnerText) - 1;

//     shop.setPage(newPage);
//   }
// });

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
    name: "Boxer",
    price: 100,
    img: "https://www.mediawavestore.com/78181-large_default/boxer-uomo-pedro-pacco-8-pz-mutande-cotone-elasticizzato-intimo-colori-assortiti.jpg",
  },
  {
    name: "Ps5",
    price: 350,
    img: "https://images.stockx.com/images/Sony-PS5-Playstation-5-Blu-Ray-Edition-Console-White-V5.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1642201363",
  },
  {
    name: "Samsung S20",
    price: 899,
    img: "https://images.samsung.com/is/image/samsung/assets/sg/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg",
  },
  {
    name: "Xiaomi Mi11",
    price: 499,
    img: "https://miopc.it/222421-large_default/xiaomi-mi-11-lite-5g-166-cm-655-dual-sim-ibrida-android-11-usb-tipo-c-8-gb-128-gb-4250-mah-verde.jpg",
  },
  {
    name: "Philips Tv",
    price: 600,
    img: "https://images.philips.com/is/image/PhilipsConsumer/43PUS8556_12-IMS-it_IT?$jpglarge$&wid=960",
  },
  {
    name: "Macbook Air M1",
    price: 949,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
  },
  {
    name: "RTX 3080",
    price: 670,
    img: "https://m.media-amazon.com/images/I/619h9dd1VhS._AC_SL1000_.jpg",
  },
  {
    name: "Radeon RX6800",
    price: 600,
    img: "https://m.media-amazon.com/images/I/819aJhrkFIL._AC_SS450_.jpg",
  },
  {
    name: "Iphone 12",
    price: 899,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-purple-2021_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000",
  },
  {
    name: "Mele",
    price: 2,
    img: "https://www.salepepe.it/files/2018/10/mele-1140x636.jpg",
  },
  {
    name: "Banane",
    price: 1,
    img: "https://www.tuttogreen.it/wp-content/uploads/2017/02/shutterstock_518328943.jpg",
  },
  {
    name: "Salmone",
    price: 4,
    img: "https://www.romagnaatavola.it/wp-content/uploads/romagnaatavola.it/2018/10/Filetti-di-salmone-3.jpg",
  },
  {
    name: "Cooler Master Case",
    price: 49,
    img: "https://media.ldlc.com/r1600/ld/products/00/05/92/99/LD0005929973_1.jpg",
  },
  {
    name: "Cubo di Rubik",
    price: 10,
    img: "https://czstore.it/wp-content/uploads/2021/11/0778988387337.jpg",
  },
  {
    name: "Tazza Caffè",
    price: 3,
    img: "https://pidakshop.com/16439/dragon-ball-mug-goku-transformations-tazza-da-caffe-da-320-ml-le-trasformazioni-di-goku-abystyle.jpg",
  },
];
