document.getElementById("form").addEventListener("submit",(e)=>{


e.preventDefault()

 let num = document.getElementById("num").value;
  let result = document.getElementById("result");

  let originalNum = num; // original value save
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (rev == originalNum) {
    result.textContent = "Number is Palindrome";
  } else {
    result.textContent = "Number is NOT Palindrome";
  }








})