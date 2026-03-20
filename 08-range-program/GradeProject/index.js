
document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault()

    let marks = document.getElementById("marks").value;

    let result = document.getElementById("result")


    if (marks >= 90){

        result.innerHTML= `<h1>you have achieved A Grade</h1>`

    }else if (marks>=70){

        result.innerHTML=`<h1>you have achieved B Grade</h1>`

    }else if (marks>=50){

        result.innerHTML=`<h1>you have achieved C Grade</h1>`

    }else if (marks>=35){

        result.innerHTML=`<h1>you have achieved D Grade</h1>`

}else{

    result.innerHTML=`<h1>you have failde this exam</h1>`

}

})