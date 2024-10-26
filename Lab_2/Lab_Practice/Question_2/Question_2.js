function validateForm() {
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Validate mobile values
    function isNotValid(val) {
    const number = parseFloat(val);
    return !Number.isFinite(number);
}

    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    successMessage.style.display = "none";
    successMessage.innerHTML = "";

    const errors = [];
    const success = [];

    if (!email) {
      errors.push("Please enter an email address.");
    }

    if (!mobile || isNotValid(mobile)) {
      errors.push("Please enter a valid mobile phone number.");
    }

    if (!country) {
      errors.push("Please select a country.");
    }

    if (!terms) {
      errors.push("You must agree to the terms of service.");
    }

    // Display errors or submit the form
    if (errors.length > 0) {
      errorMessage.style.display = "block";
      errorMessage.innerHTML =
        "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
    } else {
        success.push("Form submitted successfully!");
        if (success.length > 0) {
        successMessage.style.display = "block";
        successMessage.innerHTML =
            "<ul><li>" + success.join("</li><li>") + "</li></ul>";
        }
    }
  }

  function resetForm() {
    document.getElementById("registrationForm").reset();
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";
    successMessage.style.display = "none";
    successMessage.innerHTML = "";

    document.getElementById("email").focus();
  }

    // Set up event listener and focus on load
    window.onload = function () {
    document.getElementById("email").focus();
  };