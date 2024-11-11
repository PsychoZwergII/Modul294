function easycalculation() {
  const num1 = Math.floor(Math.random() * 21);
  const num2 = Math.floor(Math.random() * 21);
  const correctAnswer = num1 + num2;
  let userAnswer;
  let isCorrect = false;

  console.write("Was ist die Antwort auf ${num1} + ${num2}?");

  while (!isCorrect) {
    userAnswer = prompt(`Was ist ${num1} + ${num2}?`);
    userAnswer = parseInt(userAnswer, 10);

    if (userAnswer === correctAnswer) {
      isCorrect = true;
      document.write("${num1} + ${num2} = ${correctAnswer}<br>");
    } else {
      alert("rechner\n\nDie Antwort ist falsch bitte fersuche es erneut.");
    }
  }
}

easycalculation();
