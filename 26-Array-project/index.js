let output = document.getElementById("output")

let createArray = document.getElementById("createArray")


let arr = []

function startNum() {
    let numInput = document.getElementById("arrayNum").value

    itemArray.innerHTML = ""
    arr = []

    for (let i = 1; i <= numInput; i++) {
        itemArray.innerHTML += `
            <input type="text" class="mb-2 form-control w-75" placeholder="Enter Element ${i}" id="el${i}">
        `;
    }
    
}

function loadArray() {
    let count = document.getElementById("arrayNum").value

    arr = []

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById("el" + i).value
        if (val !== "") {
            arr.push(val)
        }
    }

    createArray.innerHTML = "Array : [ " + arr.join(", ") + " ]"
}

function newArray() {
    output.innerHTML = "Output: [ " + arr.join(", ") + " ]"
}

showArray.onclick = loadArray

function pushBtn() {
    let value = document.getElementById("moreInput").value

    if (value !== "") {
        arr.push(value)
        newArray()
    }

    document.getElementById("moreInput").value = ""
};


function unshiftBtn() {
    let value = document.getElementById("moreInput").value

    if (value !== "") {
        arr.unshift(value)
        newArray()
    }

    document.getElementById("moreInput").value = ""
}

function popBtn() {
    if (arr.length === 0) loadArray()

    arr.pop()
    newArray()
}

function shiftBtn() {
    if (arr.length === 0) loadArray()

    arr.shift()
    newArray()
}

function reverseBtn() {
    if (arr.length === 0) loadArray()

    arr.reverse()
    newArray()
}

function toStringBtn() {
    if (arr.length === 0) loadArray();

    output.innerHTML = "Output: " + arr.toString();
};

function lengthBtn() {
    if (arr.length === 0) {
        output.innerHTML = "Array is empty!";
        return;
    }

    output.innerHTML = "Length: " + arr.length;
}

function indexOfBtn(){
    let value = document.getElementById("moreInput").value;

    if (arr.length === 0) loadArray();

    let index = arr.indexOf(value);

    output.innerHTML = "Index of " + value + " : " + index;

    document.getElementById("moreInput").value = "";
}


function includesBtn(){
    let value = document.getElementById("moreInput").value;

    if (arr.length === 0) loadArray();

    let ans = arr.includes(value);

    output.innerHTML = "Includes " + value + " : " + ans;

    document.getElementById("moreInput").value = "";
}

function sortBtn(){
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => a - b);
    newArray();
}

function ascendingBtn() {
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => a - b);
    newArray();
};

function descendingBtn() {
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => b - a);
    newArray();
};

function findBtn(){
    let value = Number(document.getElementById("moreInput").value);

    if (arr.length === 0) loadArray();

    let result = arr.find(el => el > value);

    output.innerHTML = "First element greater than " + value + " : " + result;

    document.getElementById("moreInput").value = "";
}

function someBtn(){
    let value = Number(document.getElementById("moreInput").value);

    if (arr.length === 0) loadArray();

    let result = arr.some(el => el > value);

    output.innerHTML = "Any element greater than " + value + " : " + result;

    document.getElementById("moreInput").value = "";
}

function everyBtn(){
    let value = Number(document.getElementById("moreInput").value);

    if (arr.length === 0) loadArray();

    let result = arr.every(el => el > value);

    output.innerHTML = "All elements greater than " + value + " : " + result;

    document.getElementById("moreInput").value = "";
}

function filterBtn(){
    let value = Number(document.getElementById("moreInput").value);

    if (arr.length === 0) loadArray();

    let result = arr.filter(el => el %2===0);

  
        output.innerHTML = "Even  Number : [ " + result.join(", ") + " ]";
    

    document.getElementById("moreInput").value = "";
}

function mapBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.map(el => el * 2);

    output.innerHTML = "multiplication *2 : [ " + result.join(", ") + " ]";
}

function reduceBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.reduce((total, el) => total + el, 0);

    output.innerHTML = "Sum of Array: " + result
}

function sliceBtn(){
    if (arr.length === 0) loadArray()

    let result = arr.slice(1, 4)

    output.innerHTML = "Slice : [ " + result.join(", ") + " ]"
}

function joinBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.join(" - ");

    output.innerHTML = "Joined: " + result;
}