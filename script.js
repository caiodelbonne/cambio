// cotalcao fixa
const USD = 6.1;
const EUR = 6.9;
const GBP = 7.9;

// obtendo elemento
const form = document.querySelector("form"); // elemento do formulario
const amount = document.getElementById("amount");
const currency = document.getElementById("currency"); // moeda
const footer = document.querySelector("main footer") 
const description = document.getElementById("description")

// capt a entrada de dados do input
amount.addEventListener("input", () => {
  // restrigindo apenas o valor
  const hasCharacterRegex = /\D+/g; // acha padrao e remove as letras nao permite caracter
  amount.value = amount.value.replace(hasCharacterRegex, "");
});


// capt evento de sub
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");

    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// funcao de converter
function convertCurrency(amount, price, symbol) {
  try {

    description.textContent = `${symbol} 1 = ${price}`

    // mostra o footer com resultado
    footer.classList.add("show-result")


  } catch (error) {
    // remove o footer com resultado da tela

    footer.classList.remove("show-result")
    console.log(error);
    alert(" erro na conversao");
  }
}
