// Calculator

const firstNum = prompt("inserisci il primo numero");
const secondNum = prompt("inserisci il secondo numero");
const operationChoice = prompt("inserisci pure l'operazione desiderata");

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log("non hai inserito un numero");
}

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
