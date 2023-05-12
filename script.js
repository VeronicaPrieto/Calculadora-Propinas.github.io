const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", () => {
  const selectedLanguage = languageSelector.value;

  if (selectedLanguage === "en") {
    // Cambiar texto a inglés
    document.querySelector("h1").innerText = "Tip Calculator💸";
    document.querySelector('label[for="bill"]').innerText = "Account Amount:";
    document.querySelector("#percentage-titulo").innerText = "You can add any percentage of tips:";
    document.querySelector("#people-titulo").innerText = "Number of people:";
    document.querySelector("#calculate").innerText = "Calculate";
    document.querySelector("#reset").innerText = "Reset";
    document.querySelector(".tip-btn:nth-child(1)").innerText = "10%";
    document.querySelector(".tip-btn:nth-child(2)").innerText = "15%";
    document.querySelector(".tip-btn:nth-child(3)").innerText = "20%";
    document.querySelector(".tip-btn:nth-child(4)").innerText = "25%";
  } else if (selectedLanguage === "es") {
    // Cambiar texto a español
    document.querySelector("h1").innerText = "Calculadora de propinas💸";
    document.querySelector('label[for="bill"]').innerText = "Monto de la cuenta:";
    document.querySelector("#percentage-titulo").innerText = "Puedes agregar el porcentaje que quieras de propinas:";
    document.querySelector("#people-titulo").innerText = "Cantidad de personas:";
    document.querySelector("#calculate").innerText = "Calcular";
    document.querySelector("#reset").innerText = "Reiniciar";
    document.querySelector(".tip-btn:nth-child(1)").innerText = "10%";
    document.querySelector(".tip-btn:nth-child(2)").innerText = "15%";
    document.querySelector(".tip-btn:nth-child(3)").innerText = "20%";
    document.querySelector(".tip-btn:nth-child(4)").innerText = "25%";
  } else if (selectedLanguage === "fr") {
    // Cambiar texto a francés
    document.querySelector("h1").innerText = "Calculateur de pourboire💸";
    document.querySelector('label[for="bill"]').innerText = "Montant du Compte:";
    document.querySelector("#percentage-titulo").innerText = "Vous pouvez ajouter n'importe quel pourcentage de pourboire:";
    document.querySelector("#people-titulo").innerText = "Nombre de personnes:";
    document.querySelector("#calculate").innerText = "Calculer";
    document.querySelector("#reset").innerText = "Réinitialiser";
    document.querySelector(".tip-btn:nth-child(1)").innerText = "10%";
    document.querySelector(".tip-btn:nth-child(2)").innerText = "15%";
    document.querySelector(".tip-btn:nth-child(3)").innerText = "20%";
    document.querySelector(".tip-btn:nth-child(4)").innerText = "25%";
  }
});

const calculateBtn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const percentageInput = document.getElementById("percentage");
const peopleInput = document.getElementById("people");
const resultsDiv = document.getElementById("results");

const defaultPercentage = 15;

percentageInput.value = defaultPercentage;

const propinaTitulo = document.getElementById("percentage-titulo");
const totalTitulo = document.getElementById("total-titulo");
const perPersonTitulo = document.getElementById("per-person-titulo");

const formatter = new Intl.NumberFormat('es-PY', {
  style: 'currency',
  currency: 'PYG',
});

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const percentage = parseFloat(percentageInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(percentage) || isNaN(people)) {
    resultsDiv.innerText = "Por favor ingrese números válidos.";
  } else {
    const tipAmount = bill * (percentage / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    resultsDiv.innerText = `Propina: ${formatter.format(tipAmount)}, Total: ${formatter.format(total)}, Total por persona: ${formatter.format(perPerson)}.`;

    propinaTitulo.innerText = `Propina (${percentage}%):`;
    totalTitulo.innerText = `Total (incluyendo propina):`;
    perPersonTitulo.innerText = `Total por persona (${people} personas):`;
  }
});

percentageInput.addEventListener("input", () => {
  const percentage = parseFloat(percentageInput.value);

  if (!isNaN(percentage)) {
    percentageInput.value = percentage;
  } else {
    percentageInput.value = defaultPercentage;
  }
});

const tipButtons = document.querySelectorAll(".tip-btn");

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const percentage = button.dataset.percentage;
    percentageInput.value = percentage;
  });
});
window.onload = () => {
  languageSelector.dispatchEvent(new Event('change'));
};