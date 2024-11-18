const zahl1 = document.getElementById("zahl1");
const operator = document.getElementById("operator");
const zahl2 = document.getElementById("zahl2");

const rechne = () => {
  let result;
  switch (operator.value) {
    case "+":
      result = Number(zahl1.value) + Number(zahl2.value);
      break;
    case "-":
      result = Number(zahl1.value) - Number(zahl2.value);
      break;
    case "*":
      result = Number(zahl1.value) * Number(zahl2.value);
      break;
    case "/":
      if (zahl2.value !== "0") {
        result = Number(zahl1.value) / Number(zahl2.value);
      } else {
        alert("Division durch 0 nicht möglich");
        return;
      }
      break;
    default:
      result = "Error";
  }
  document.getElementById(
    "result"
  ).textContent = `${zahl1.value} ${operator.value} ${zahl2.value} = ${result}`; // Zeigt das Ergebnis an
};
