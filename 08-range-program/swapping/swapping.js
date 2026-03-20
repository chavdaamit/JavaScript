document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault();


let value1=document.getElementById("value1").value;
let value2=document.getElementById("value2").value;

let temp=value1

let result1=document.getElementById("result1")
let result2=document.getElementById("result2")

result1.textContent = value2
result2.textContent= temp



})