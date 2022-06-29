// (fuction () {
//     console.clear();
//     const array = [1,2,3,4,5,6];

//     for (let i=0; i< array.length; i++) {
//         const item = array[i];
//         const index = i;

//         console.log ( `indice: $${index}, Valore: ${item}`);
//     }
// })();

// Per tutti gli esercizi avremo:

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// forEach
// Eseguire console.log() di ogni elemento di array

// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)
// filter
// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]
// Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], usare utility come Array.includes oppure Array.indexOf.
// risultato: [1,2,5,6]

(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const array2 = [10, 1, 2, 5, 6];
  // Esercizio 1
  listFn = (element, index, array) => console.log(element);
  const elementList = array.forEach(listFn);
  elementList;
  //
  // Esercizio 2
  const elementDelay = () => {
    let timer = 0;
    array.forEach((element, index) => {
      setTimeout(() => {
        console.log(element);
      }, timer);
      timer = timer + 1000 * (index + 1);
    });
  };
  elementDelay();

  //
  //   Esercizio 3
  showEvenNumbers = (element, index, array) => element % 2 === 0;
  const evenNumbers = array.filter(showEvenNumbers);
  console.log(evenNumbers);
  //
  //   esercizio 4
  toCompareElements = (element, index, array) => array2.includes(element);
  console.log(array.filter(toCompareElements));
  //
})();
