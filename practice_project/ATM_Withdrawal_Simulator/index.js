document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let balance = Number(document.getElementById("balance").value);
  let amount = Number(document.getElementById("amount").value);
  let result = document.getElementById("result");

  if (amount <= 0) {
    result.textContent = "Enter valid amount";
  }
  else if (amount > balance) {
    result.textContent = "Insufficient Balance";
  }
  else {
    balance = balance - amount;
    result.textContent = `Withdrawal Successful. Remaining Balance = ₹${balance}`;
  }
});
