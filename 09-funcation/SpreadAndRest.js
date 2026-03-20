
// spread operator
const num = [1, 2, 3, 4, 5, 6]

console.log(...num);


const num2 = [...num, 7, 8, 9, 10]
console.log(num2)


let user = { name: "Amit", age: "23" }

let newUser = { ...user, city: "Bhavnagar" };
console.log(newUser);

console.log(" ");


// rest operator


function Fruits(...fruits) {
    console.log(...fruits);

    console.log("i like 🍎", fruits[0])

}

Fruits("Apple", "Banana", "Mango", "Orange");
