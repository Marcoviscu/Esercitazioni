console.log("ciao");

//  alert("Ciao");

// let userMsg = prompt("Ciao chi sei?");

// console.log("Benvenuto", userMsg);

let pippoOne = "Ciao sono Pippo";
const PippoTwo = "Ciao sono pippo";

// Boolean type
// const isOpen = true;
// const myName = "Marco";
// const myAge = 21;
// let something;

// const userName = prompt("Come ti chiami?");
// const userChoice = prompt("Hey inserisci pure numero");

// if (userChoice >= 10) {
//   console.log(
//     "Hai inserito un numero maggiore o uguale a dieci, ovvero:",
//     userChoice
//   );
// } else if (userChoice >=5 && userChoice <==9) {
//   console.log("Qualcos'altro", userChoice);
// } else {
//     console.log('non ci siamo proprio')
// }

// switch (userChoice){
//   case (userChoice >=10):
//     console.log('Hai inserito un numero maggiore o uguale a dieci,ovvero:', userChoice)
//     break;
//   case (userChoice >5= && userChoice <= 9):
//     console.log('qualcos altro!', userChoice);
//     break;
//     default:
//         console.log('Non ci siamo proprio...')
// }

// userChoice >= 10
// ? console.log ('Hai inserito un numero maggiore o uguale a dieci,ovvero:')
// : console.log ('Non ci siamo proprio')

// Calculator -PSEUDO-CODE
// 1. Chiede due numeri da input all'utente
//    - se l'utente non inserisce uno o entrambi i numeri,
//    ci ritorna una stringa che ci informa su ciò e interrompe il flusso del programma

//  2.Chieda all'utente l'operazione da seguire
//    - se l'utente non inserisce alcuna operazione,
//    ritorna una stringa che ci informa su ciò e interrompe tutto

//  3.Venga mostrato il risultato dell'operazione

// Calculatore - code
const firstNum = prompt("inserisci il primo numero");
const secondNum = prompt("inserisci il secondo numero");
const operationChoice = prompt("inserisci pure l'operazione desiderata");

// PROMPT RICHIEDE LA TRASFORMAZIONE DA STRING A NUMBER

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log("non hai inserito un numero");
}

// if (operationChoice === 'addizione') {
//   console.log('Il risultato della tua operazione è;' , parsedFirstNum + parsedSecondNum)
// }

switch (operationChoice) {
  case "+":
    console.log(
      "Il risultato della tua operazione è;",
      parsedFirstNum + parsedSecondNum
    );
    break;
  case "-":
    console.log(
      "Il risultato della tua operazione è;",
      parsedFirstNum - parsedSecondNum
    );
    break;
  case "*":
    console.log(
      "Il risultato della tua operazione è;",
      parsedFirstNum * parsedSecondNum
    );
    break;
  case "/":
    console.log(
      "Il risultato della tua operazione è;",
      parsedFirstNum / parsedSecondNum
    );
    break;
  default:
    console.log("non hai selezionato alcuna operazione");
}
