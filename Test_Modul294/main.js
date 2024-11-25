document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (document.getElementById("firstName").value === "") {
      alert("Bitte geben Sie Ihren Vornamen ein.");
      return;
    }

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const ticketCount = parseInt(document.getElementById("ticket").value) || 0;
    const legiCount = parseInt(document.getElementById("legi").value) || 0;

    const ticketPrice = 30.0;
    const legiPrice = 20.0;

    const ticketTotal = ticketCount * ticketPrice;
    const legiTotal = legiCount * legiPrice;
    const totalPrice = ticketTotal + legiTotal;

    const summary = `
        <h2>Bestellübersicht</h2>
        <p>Vorname: ${firstName}</p>
        <p>Nachname: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Normalpreis Tickets: ${ticketCount} x 30.00 CHF = ${ticketTotal.toFixed(
      2
    )} CHF</p>
        <p>Legi Tickets: ${legiCount} x 20.00 CHF = ${legiTotal.toFixed(
      2
    )} CHF</p>
        <p><strong>Gesamtpreis: ${totalPrice.toFixed(2)} CHF</strong></p>
    `;

    document.getElementById("summary").innerHTML = summary;
  });
