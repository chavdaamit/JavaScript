document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault();


    let amount = Number(document.getElementById("Amount").value);
    let time = Number(document.getElementById("time").value);
    let rate = Number(document.getElementById("rate").value);

    let result = document.getElementById("result");

    let timeInYears = time / 12;

    let interest = (amount * timeInYears * rate) / 100;
    let totalAmount = amount + interest;



    result.textContent = `Final Amount = ₹${totalAmount.toFixed(2)}`;


})