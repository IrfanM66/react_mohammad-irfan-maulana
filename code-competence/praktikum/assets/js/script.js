// DOM Selector
function contactUsForm(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailAddressInput = document.getElementById("exampleInputEmail1");
  const descriptionInput = document.getElementById("floatingTextarea2");

  // Variables
  const MAX_CHAR_PER_INPUT = 25;

  // Validation Function
  const checkMaxInputChar = (element, maxChar) => {
    return element.value.length > maxChar;
  };
  const checkBlankInput = (element) => {
    return element.value == "";
  };

  if (
    checkBlankInput(firstNameInput) ||
    checkBlankInput(lastNameInput) ||
    checkBlankInput(emailAddressInput) ||
    checkBlankInput(descriptionInput)
  ) {
    alert("field must not be blank!!!");
    return;
  } else if (checkMaxInputChar(productNameInput, MAX_CHAR_PER_INPUT)) {
    alert("Product name must not exceed 25 characters!!!");
    return;
  } else if (checkInputSpecificChars(productNameInput, FORBIDDEN_CHAR_REGEX)) {
    alert("Name must not contain symbols!!!");
    return;
  }
}

