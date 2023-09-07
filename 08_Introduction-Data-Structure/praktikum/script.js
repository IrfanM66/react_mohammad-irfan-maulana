function productForm(event) {
  event.preventDefault();
  const productNameInput = document.getElementById("product-name").value;
  const productCategoryInput =
    document.getElementById("product-category").value;
  const productFreshness = document.getElementsByName("freshness");
  const productImage = document.getElementById("formFileMultiple").value;
  const additionalDescription =
    document.getElementById("additional-desc").value;
  const productPriceInput = document.getElementById("product-price").value;
  let freshness = "";
  for (const radio of productFreshness) {
    if (radio.checked) {
      freshness = radio.value;
    }
  }
  console.log(
    productNameInput,
    productCategoryInput,
    freshness,
    productImage,
    additionalDescription,
    productPriceInput
  );

  if (productNameInput == "") {
    alert("Please enter a valid Product name.");
    productForm = false;
  } else if (productNameInput.length > 25) {
    alert("Last Name must not exceed 25 characters.");
    productForm = false;
  } else if (/[@#{}]/.test(productNameInput)) {
    alert("detected symbol input value");
    productForm = false;
  } else if (productPriceInput == "") {
    alert("Please enter a valid Prouct price.");
    productForm = false;
  } else if (productPriceInput.length > 25) {
    alert("Last Price must not exceed 25 characters.");
    productForm = false;
  }
  if (productForm) {
    const formProduct = {
      productName: productNameInput,
      productCategory: productCategoryInput,
      freshness: freshness,
      productImg: productImage,
      additionalDesc: additionalDescription,
      productPrice: productPriceInput,
    };
    productTable(formProduct);
  }
}

let num = 0;
function productTable(tabel) {
  let listTable = document.getElementById("form-check");
  let productNameTable = listTable.insertRow();
  for (let i = 0; i < 7; i++) {
    let column = productNameTable.insertCell(i);
    switch (i) {
      case 0:
        num++;
        column.innerHTML = num;
        break;
      case 1:
        num++;
        column.innerHTML = tabel.productName;
        break;
      case 2:
        num++;
        column.innerHTML = tabel.productCategory;
        break;
      case 3:
        num++;
        column.innerHTML = tabel.productImg;
        break;
      case 4:
        num++;
        column.innerHTML = tabel.freshness;
        break;
      case 5:
        num++;
        column.innerHTML = tabel.additionalDesc;
        break;
      case 6:
        num++;
        column.innerHTML = tabel.productPrice;
        break;
      default:
        break;
    }
  }
}
