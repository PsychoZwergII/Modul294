document.addEventListener("DOMContentLoaded", function () {
  function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/;

    if (!emailPattern.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return false;
    }

    if (!phonePattern.test(phone)) {
      alert("Bitte geben Sie eine gültige Telefonnummer ein.");
      return false;
    }

    calculateCompletionDate();
    return true;
  }

  function calculateCompletionDate() {
    const priority = document.getElementById("priority").value;
    const currentDate = new Date();
    let additionalDays;

    switch (priority) {
      case "tief":
        additionalDays = 5;
        break;
      case "standard":
        additionalDays = 0;
        break;
      case "express":
        additionalDays = -2;
        break;
      default:
        additionalDays = 0;
    }

    const completionDate = new Date(currentDate);
    completionDate.setDate(currentDate.getDate() + additionalDays);
    alert(
      `Das voraussichtliche Fertigstellungsdatum ist ${completionDate.toLocaleDateString()}`
    );
  }

  window.openSidebar = function () {
    document.getElementById("mySidebar").style.width = "250px";
  };

  window.closeSidebar = function () {
    document.getElementById("mySidebar").style.width = "0";
  };
});
