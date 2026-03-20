document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault()

    let ch = document.getElementById("char").value.toLowerCase()
    let result = document.getElementById("result")


    if ("aeiou".includes(ch)) {

        result.textContent = "vowel"

    } else {

        result.textContent = "Consonant"

    }

})