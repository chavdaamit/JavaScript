document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let price = Number(document.getElementById("price").value);
  let discount = Number(document.getElementById("discount").value);
  let result = document.getElementById("result");

  if (price <= 0 || discount < 0) {
    result.textContent = "Enter valid price and discount";
  }
  else {
    // discount amount = price * discount% / 100
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    // show both discount amount and final price
    result.textContent = `Discount = ₹${discountAmount.toFixed(2)}, Final Price = ₹${finalPrice.toFixed(2)}`;
  }
});
