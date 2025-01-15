// Enable keyboard input for calculator
document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Enter') {
        calculateResult();
    } else if ('0123456789+-*/.%()'.includes(key)) {
        appendToDisplay(key);
    }
});

// Normal and Scientific Calculator functionality
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
      currentExpression = eval(currentExpression).toString();
      document.getElementById('display').value = currentExpression;
  } catch (e) {
      document.getElementById('display').value = 'Error';
  }
}

// VAT Calculator functionality
function updateVatRate() {
  const selectedCurrency = document.getElementById('currency');
  const vatInput = document.getElementById('vat');
  const selectedOption = selectedCurrency.options[selectedCurrency.selectedIndex];
  const vatRate = selectedOption.getAttribute('data-vat');

  vatInput.value = vatRate;
}

function calculateVAT() {
    const priceInput = document.getElementById('price');
    const vatInput = document.getElementById('vat');
    const resultDiv = document.getElementById('result');

    const price = parseFloat(priceInput.value);
    const vatRate = parseFloat(vatInput.value);

    if (isNaN(price) || isNaN(vatRate)) {
        resultDiv.textContent = "Please enter a valid price and select a currency.";
        return;
    }

    const vatAmount = (price * vatRate) / 100;
    const totalPrice = price + vatAmount;

    resultDiv.textContent = `VAT Amount: ${vatAmount.toFixed(2)}, Total Price: ${totalPrice.toFixed(2)}`;
}

// Initial VAT rate update on page load
updateVatRate();


// JavaScript for Toggle Navigation on Small Screens
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Add an event listener to a hamburger button (if you have one)
// document.querySelector('.hamburger').addEventListener('click', toggleNav);