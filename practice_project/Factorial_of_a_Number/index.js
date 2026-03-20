document.getElementById("form").addEventListener("submit",(e)=>{


e.preventDefault()


let num =Number(document.getElementById("num").value)
let result =document.getElementById("result")

let fact =1

if (num < 0) {
    result.textContent = "Factorial not defined for negative numbers";
  } 
  else {
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    result.textContent = `Factorial = ${fact}`;
  }



})