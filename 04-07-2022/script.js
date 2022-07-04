// 1) scrivere una funzione che unisce le proprietà di due oggetti
const objOne = { firstName: "Marco" };
const objTwo = { secondName: "Viscuso" };

const fullName = (objOne, objTwo);

// ```js
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }
// ```

// 2) Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line

const objectOne = { firstName: "Marco" };

const objectTwo = { secondName: "Viscuso" };

const fullNameProp = { firstName: "Marco", secondName: "Viscuso" };

// ```js
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };
// ```

// ## Destructuring:

// 1) Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la
// length

const array = [
  "Paolo",
  "Marco non ha un portatile",
  "Federica",
  "Eleonora",
  "Mattia",
  "Martina",
  "Richard",
  "Roberta",
  "Luca",
  "Lucia",
];

const filteredArray = array.filter((letters) => {
  return letters >= 10;
});

// ## Get/Set

// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// - leggere _products nel getter
// - sovrascrivere _products nel setter
// - contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

// ```js
// -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>
const shop = {
  _products: [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
  ],
  get getProducts() {
    return this._products;
  },
  set products(value) {
    this._products = [...this._products, value];
  },
};

console.log(shop._products);
shop.products = { id: 3, name: "Computer", price: 899 };
console.log(shop._products);

document.body.innerHTML = `
<ul class= "product-list">
<li>Id: ${shop._products[0].id}</li>
<li>Name: ${shop._products[0].name} </li>
<li>Price: ${shop._products[0].price} </li>
<ul class= "product-list">
<li>Id: ${shop._products[1].id}</li>
<li>Name: ${shop._products[1].name} </li>
<li>Price: ${shop._products[1].price} </li>
<ul class= "product-list">
<li>Id: ${shop._products[2].id}</li>
<li>Name: ${shop._products[2].name} </li>
<li>Price: ${shop._products[2].price} </li>
`;
