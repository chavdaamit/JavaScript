const button = document.getElementsByClassName("btn")[0];

let userStatus = document.getElementById("add");

button.addEventListener("click", () => {
  userStatus.textContent = "logged in";
});

document.getElementById("para").innerHTML =
  `<h1> I am the owner of White & Red Company. </h1>`;

document.getElementsByClassName("text")[0].innerHTML = "Hi";




document.querySelector("h4").textContent =
  "this is changed query selector paragraph";

const newPara = document.querySelector(".style");

newPara.style.color = "green";
newPara.style.fontSize = "40px";

