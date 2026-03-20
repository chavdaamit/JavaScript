document.getElementById("form").addEventListener("submit",(e)=>{


e.preventDefault()


let num =document.getElementById("num").value
let result=document.getElementById("result")

let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);   
    num = Math.floor(num / 10);   
  }

  result.textContent = `Reverse Number = ${rev}`;
})