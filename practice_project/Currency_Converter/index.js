document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault()


    let amount = Number(document.getElementById("amount").value)
    let type = document.getElementById("type").value
    let result = document.getElementById("result")


    let rate = 83;

    if(type==="usdToInr"){

        let inr =amount*rate;
        result.textContent = `INR =₹${inr}`

    } else {
    let usd = amount / rate;
    result.textContent = `USD = $${usd.toFixed(2)}`;
  }



})