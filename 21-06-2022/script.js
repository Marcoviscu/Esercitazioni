// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']
// Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:

// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];
// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];
(function () {
  const nameArray = [
    "MarcoV",
    "Martina",
    "MarcoG",
    "Chiara",
    "Noemi",
    "RobertaR",
    "Gabriele",
    "Domenico",
    "Eleonora",
  ];
  const arrayToIndex = nameArray.map((e, i, array) => i + "-" + e);
  const reverseIndex = nameArray.map((e, i, array) => array.length - 1 - i);
  const reverseName = nameArray.map(
    (e, i, array) => nameArray[array.length - 1 - i]
  );

  console.log(arrayToIndex);
  console.log(reverseIndex);
  console.log(reverseName);
})();
