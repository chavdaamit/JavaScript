document.getElementById("form").addEventListener("submit", (e) => {

  e.preventDefault();

  let age = Number(document.getElementById("age").value);
  let show = document.getElementById("show").value;
  let result = document.getElementById("result");

  let price = 0;


  if (age < 12) {
    price = 100;
  }
  else if (age <= 60) {
    price = 150;
  }
  else {
    price = 120;
  }

  
  if (show === "evening") {
    price = price + 50;
  }

  result.textContent = `Ticket Price = ₹${price}`;

});
