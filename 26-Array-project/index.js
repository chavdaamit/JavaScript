
let output = document.getElementById("output")
let pushBtn = document.getElementById("pushBtn")
let popBtn = document.getElementById("popBtn")
let shiftBtn = document.getElementById("shiftBtn")
let unshiftBtn = document.getElementById("unshiftBtn")
let itemArray = document.getElementById("itemArray")
let showArray = document.getElementById("showArray")
let createArray = document.getElementById("createArray")
let lengthBtn = document.getElementById("lengthBtn")
let reverseBtn = document.getElementById("reverseBtn")

let arr = []

function startNum() {
    let numInput = document.getElementById("arrayNum").value;

    itemArray.innerHTML = "";
    arr = []

    for (let i = 1; i <= numInput; i++) {
        itemArray.innerHTML += `
            <input type="text" class="mb-2 form-control w-75" placeholder="Enter Element ${i}" id="el${i}">
        `;
    }
}

function loadArray() {
    let count = document.getElementById("arrayNum").value;

    arr = [];

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById("el" + i).value;
        if (val !== "") {
            arr.push(val)
        }
    }


    createArray.innerHTML = "Array : [ " + arr.join(", ") + " ]";
}

function updateUI() {
    output.innerHTML = "Output: [ " + arr.join(", ") + " ]";
}

showArray.onclick = loadArray;

pushBtn.onclick = function () {
    document.getElementById("pushInput").style.display = "block";
    document.getElementById("addBtn").style.display = "block";
};

document.getElementById("addBtn").onclick = function () {
    let value = document.getElementById("pushInput").value;

    if (value !== "") {
        arr.push(value)
        updateUI();
    }

    document.getElementById("pushInput").value = "";
};
popBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    arr.pop()
    updateUI()
};


shiftBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    arr.shift()
    updateUI()
};


unshiftBtn.onclick = function () {
    document.getElementById("unshiftInput").style.display = "block";
    document.getElementById("unshiftAddBtn").style.display = "block";
};

document.getElementById("unshiftAddBtn").onclick = function () {
    let value = document.getElementById("unshiftInput").value;

    if (value !== "") {
        arr.unshift(value);
        updateUI();
    }

    document.getElementById("unshiftInput").value = "";
};

reverseBtn.onclick = function(){

    if(arr.length ===0 ) loadArray()

        arr.reverse()

        updateUI()
}

