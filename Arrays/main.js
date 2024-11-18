// Array mit Zitaten und Autoren
const quotes = [
  "Das Leben besteht hauptsächlich darin, dass man mit dem Unvorhergesehenen fertig werden muss.",
  "Das Problem zu erkennen ist wichtiger als die Lösung zu erkennen, denn die genaue Darstellung des Problems führt zur Lösung.",
  "Die meisten Führungskräfte zögern, ihre Leute mit dem Ball laufen zu lassen, aber es ist erstaunlich, wie schnell ein informierter und motivierter Mensch laufen kann.",
  "Eine Investition in Wissen bringt immer noch die besten Zinsen.",
  "Eine positive Einstellung zu lösbaren Problemen ist bereits der halbe Erfolg.",
  "Es ist kein Drama, wenn das Projekt nicht nach Plan läuft. Es ist ein Drama, wenn der Projektmanager nichts davon weiss.",
  "Es ist nicht genug zu wissen, man muss es auch anwenden. Es ist nicht genug zu wollen, man muss es auch tun.",
];

const authors = [
  "John Steinbeck",
  "Albert Einstein",
  "Lee Iacocca",
  "Benjamin Franklin",
  "Ernst Ferstl",
  "Peter Hobbs",
  "Johann Wolfgang von Goethe",
];

// Funktion für zufälliges Zitat
const nextQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
  document.getElementById("author").textContent = `- ${authors[randomIndex]} -`;
};

// Event Listener für die Schaltfläche
document.getElementById("nextQuote").addEventListener("click", nextQuote);
