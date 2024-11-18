let age = 0;
let firstClick = true;

document.getElementById("ageButton").addEventListener("click", function () {
  age++;

  if (firstClick) {
    firstClick = false;
    document.getElementById("ageDisplay").innerText = "Du bist noch so jung";
  } else {
    let message = "Du bist " + age + " Jahre alt";

    if (age >= 15 && age < 18) {
      message += ", du darfst bis 22 Uhr raus.";
    } else if (age >= 18) {
      message += ", du darfst alles.";

      if (age >= 25) {
        message += ", Du bist alkoholiker";
      } else if (age >= 65) {
        message += ", Du hast kein Geld mehr zum Leben";
        if (age >= 80) {
          message += ", Du bist ein alter Mann";
        }
      }
    }

    document.getElementById("ageDisplay").innerText = message;
  }
});
