document.getElementById("form").addEventListener("submit", (e)=>{



e.preventDefault()


let signal=document.getElementById("signal").value
let result =document.getElementById("result")


switch (signal) {
    case "red":
      result.textContent = "STOP 🚫";
        break;

    case "yellow":
      result.textContent = "GET READY ⚠️";
        break;

    case "green":
    result.textContent = "GO ✅";
        break;

    default:
        console.log("Invalid Signal");
}



})