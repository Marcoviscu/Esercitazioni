// setTimeout
// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato

// "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

// 3 Timeout diversi
(function () {
  const showTime = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  setTimeout(showTime, 1000);
  setTimeout(showTime, 5000);
  setTimeout(showTime, 10000);
})();

// bonus
(function () {
  const showTime2 = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  array = [1, 5, 10];
  array.forEach((element, index, array) => {
    setTimeout(() => showTime2(), 1000 * element);
  });
})();

// dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero.
//  Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
//  tip: Contiamo quante volte abbiamo fatto parte l'intervallo
(function () {
  array = [42, 23, 1, 7, 12, 99];
  let TimeMs = 1000;
  const random = () => {
    Math.floor(Math.random() * arrayExtraction.length);
    console.log(array[random]);
  };
  const stopInterval = () => {
    clearInterval(timerId);
  };

  const timerId = setInterval(randomizeNumber, 1000);

  array.reduce(setTimeout);
})();

// Interval
// Fare il console.log analogo a quello mostrato su time.is
// DOM
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

function showTime() {
  console.clear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  console.log(`${hour}.${minutes}.${seconds}`);
  document.body.innerHTML = `<h1>${hour}:${minutes}:${seconds}<h1>`;
}
setInterval(showTime, 1000);
