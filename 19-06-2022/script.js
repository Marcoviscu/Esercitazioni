// // --- Problematiche emerse ---
// // ---- JS ----
// // Capire la logica e come funziona
// // Capire la sintassi di JS, parentesi tonde e quadre, etc...
// // Problema con oggetti e come puntare ad un elemento all'interno
// //
// // ---- Approccio ----
// // Avere una Task e capire come dividere il lavoro in piccoli step
// //
// // ---- CSS -----
// //

// console.clear();

// const variable = { prop: "val" };
// console.log({ variable });

// const constVar = "prova"; // non ri riassegna, ma si modifica
// let letVar = "prova"; // si riassegna e si modifica

// letVar = [];

// // ----
// console.clear();
// const arrayIndex = 5;
// const array = ["Marco", "Federica", "Richard"]; // lista di 5 numeri
// // 0 -> 'Marco'
// // 1 -> 'Federica'
// // 2 -> 'Richard'
// // parentesi [] sono il modo di dire di JS "Quello che c'è all'indirizzo: "

// array[arrayIndex] = "Prova";
// console.log(array);

// array[2] = "Roberta";

// console.log(array[2]);

// const person = {
//   firstName: "Luca",
//   lastName: "Pagliaro",
//   address: {
//     street: "Via Etnea",
//     civic: 10,
//     city: "Catania",
//     2: 0,
//   },
// };

// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log("Prima lettera del nome:");
// console.log(person.firstName[0]);

// console.log(person["city"]);
// person["city"] = "Catania";
// console.log(person["city"]);

// console.log(person["address"]["street"]);
// console.log(person.address.street);

// console.clear();

// if (true) console.log("true");
// console.log("ciao");

// console.clear();

// function sayHelloTo(name) {
//   console.log("Hello " + name + " ! :)");
// }

// console.log(sayHelloTo());

// console.clear();

// const writeIntoConsole = function (method, text) {
//   method(text);
// };

// writeIntoConsole(console.warn, "aiuto");

// console.clear;

// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma ci deve dire che non posso dividere per 0

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

// esercizio 1=
// crea nuovo scope
const func = function (num1, num2) {
  return num1 + num2;
};

function funcClassic(num1, num2) {
  return num1 + num2;
}

// non crea scope
const funcArrowImplicit = (num1, num2) => num1 + num2;
const funcArrow = (num1, num2) => {
  num1 + num2;
};

console.log(func(1, 2));
console.log("funcClassic", funcClassic(1, 2));
console.log("funcArrowImplicit", funcArrowImplicit(1, 2));
console.log("funcArrow", funcArrow(1, 2));
// Esercizio 2

function sum2(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Non hai inserito un numero valido");
  }
  return num1 + num2;
}

// Esercizio 3
function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero valido");
  }
  return num1 * num2;
}

function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero valido");
  }
  return num1 - num2;
}

function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Non hai inserito un numero valido");
  } else if (num1 === 0 || num2 === 0) {
    console.log("Non puoi dividere per 0");
  } else {
    return num1 / num2;
  }
}

const operation = (methodFn, num1, num2) => {
  methodFn(num1, num2);
};

console.log();
