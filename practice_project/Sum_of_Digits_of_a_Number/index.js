document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault()



    let num = (document.getElementById("num"). value)
    let result = document.getElementById("result")

    let sum = 0


    while (num > 0) {

        sum = sum + (num % 10)
        num = Math.floor(num / 10)

    }

    result.textContent = `Sum of Digits = ${sum}`;



})