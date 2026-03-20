document.getElementById("form").addEventListener("submit", (e) => {

  e.preventDefault();

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let result = document.getElementById("result");

  if (a > b && a > c) {
    result.textContent = "First Number is Largest";
  } 
  else if (b > a && b > c) {
    result.textContent = "Second Number is Largest";
  } 
  else if (c > a && c > b) {
    result.textContent = "Third Number is Largest";
  } 
  else {
    result.textContent = "All Numbers are Equal";
  }

});
