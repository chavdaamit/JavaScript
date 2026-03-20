document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault()



    let age = Number(document.getElementById("age").value)

    let result = document.getElementById("result")


    if (age >= 60) {
        result.textContent = "Senior Citizen";
    } else if (age >= 18) {
        result.textContent = "Eligible for Vote and Drive";
    } else {
        result.textContent = "Not Eligible";
    }



})