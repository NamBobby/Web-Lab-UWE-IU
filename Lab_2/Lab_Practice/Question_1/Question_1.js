// Calculate future value
function calcFutureValue(investment, rate, years) {
    return investment * Math.pow(1 + rate / 100, years);
}

// Validate input values
function isNotValid(val) {
    const number = parseFloat(val);
    return !Number.isFinite(number) || number <= 0;
}

// Handle calculate button click event
function calcButtonClick(event) {
    
    event.preventDefault();

    const investmentInput = document.getElementById("investment");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const futureValueInput = document.getElementById("futureValue");
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    const investment = parseFloat(investmentInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);

    if (isNotValid(investment)) {
        errorMessage.textContent = "* Please enter a valid investment amount greater than 0.";
        investmentInput.focus();
        return;
    }

    if (isNotValid(rate)) {
        errorMessage.textContent = "* Please enter a valid interest rate greater than 0.";
        rateInput.focus();
        return;
    }

    if (isNotValid(years)) {
        errorMessage.textContent = "* Please enter a valid number of years greater than 0.";
        yearsInput.focus();
        return;
    }

    // Calculate future value and display
    const futureValue = calcFutureValue(investment, rate, years);
    futureValueInput.value = futureValue.toFixed(2);
}

// Set up event listener and focus on load
window.onload = function() {
    document.getElementById("calculateButton").onclick = calcButtonClick;
    document.getElementById("investment").focus();
};

