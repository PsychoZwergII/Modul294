let age = 0;
let firstClick = true;

document.getElementById("ageButton").addEventListener("click", function () {
  age++;
  if (firstClick) {
    firstClick = false;
    document.getElementById("ageDisplay").innerText = "Du bist noch so jung";
  } else {
    document.getElementById("ageDisplay").innerText = "Du bist " + age + " alt";
  }
});
