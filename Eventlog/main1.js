const eventLog = document.getElementById("eventLog");

function logEvent(message) {
  eventLog.value += message + "\n"; // Füge die Nachricht zur Textarea hinzu
}
document.addEventListener("readystatechange", function () {
  logEvent("readystatechange: " + document.readyState);
});

document.addEventListener("DOMContentLoaded", function () {
  logEvent(
    "DOMContentLoaded: Das HTML-Dokument ist vollständig geladen und geparst."
  );
});

window.addEventListener("load", function () {
  logEvent("load: Alle Ressourcen sind vollständig geladen.");
});

// Optional: Button zum Neuladen der Seite
document.getElementById("reload").addEventListener("click", function () {
  eventLog.value = ""; // Leere das Log bei Reload
  location.reload(); // Lade die Seite neu
});
