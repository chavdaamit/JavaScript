// document.getElementById("form").addEventListener("submit", (e) => {

//   e.preventDefault();

//   let num = Number(document.getElementById("number").value);
//   let result = document.getElementById("result");

//   if (num % 2 === 0) {
//     result.textContent = "Even Number";
//   } else {
//     result.textContent = "Odd Number";
//   }

// });

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault()


    let num  =Number(document.getElementById("number").value)
    let result = document.getElementById("result")


    if (num % 2===0){

        result.innerHTML = `<h3> Even Number</h3>`
    }else{
        result.innerHTML = `<h3> Odd Number</h3>`

    }


})
