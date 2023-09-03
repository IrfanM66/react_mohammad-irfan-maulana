function productForm(event) {
  event.preventDefault();
  const productNameInput = document.getElementById("product-name").value;
  const productPriceInput = document.getElementById("product-price").value;
  console.log(productNameInput, productPriceInput);

  if (productNameInput == "") {
    alert("Please enter a valid Prouct name.");
  } else if (productNameInput.length > 25) {
    alert("Last Name must not exceed 25 characters.");
  } else if (/[@#{}]/.test(productNameInput)) {
    alert("detected symbol input value");
  } else if (productPriceInput == "") {
    alert("Please enter a valid Prouct price.");
  } else if (productPriceInput.length > 25) {
    alert("Last Price must not exceed 25 characters.");
  }
}

