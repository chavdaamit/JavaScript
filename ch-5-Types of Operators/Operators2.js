

//1 Arithmetic Operators

let a = 50
let b = 50

// Addition
console.log(a + b)

// Subtraction

console.log(a - b)

// Multiplication

console.log(a * b)

// Division

console.log(a / b)

// Modulus
console.log(a % b)


console.log(" ") 


//2 Assignment Operators

// Add and Assign

let xy = 35
xy += 26
console.log(xy)

// Subtract and Assign
let se = 50
se -= 5
console.log(se)

// Multiply and Assign
let dw = 60
dw *= 70
console.log(dw)


// Divide and Assign

let cd = 500
cd /= 400
console.log(cd)

// Modulus and Assign

let fs = 17
fs %= 7
console.log(fs)


console.log(" ") 

//3 Comparison Operators


// Equal value

let add = 48
let adds = "48"
console.log(add == adds)


// Equal value + type

console.log(add === adds)

// Not equal

let value1 = 30
let value2 = "30"
console.log(value1 != value2)


// Not equal value + type
console.log(value1 !== value2)

// Greater than

let Greater1 = 22
let Greater2 = 34

console.log(Greater1 > Greater2)

// Less than
console.log(Greater1 < Greater2)

// Greater or equal

let gret1 = 33
let gret2 = 37
console.log(gret1 >= gret2)

// Less or equal


let gret11 = 37
let gret22 = 37
console.log(gret11 >= gret22)


console.log(" ") 


//4 Logical Operators

// AND && Example

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter")
}

// OR || Example\

let hasTicket =false

let isVip=true

if(hasTicket||isVip){
    console.log("you can enter")
}

// NOT ! Example


let isLogin = false;

if (!isLogin) {
  console.log("Please Login First");
}


console.log(" ") 



//5.Ternary Operator


const age11=20;
const result=(age11>=18)?"You are eligible to drive":"You are not eligible to drive";

console.log(result)

console.log(" ") 



//6.Type Operator

let num=123
let str="Amit"
let object={NAME:"Amit",Age:"23"}

console.log(typeof num)
console.log(typeof str)
console.log(typeof object)
console.log(" ") 

 
//7.Increment / Decrement


//Pre Increment / Decrement
let fdss=30

console.log(++fdss)


//Post Increment / Decrement

let fds=30

console.log(--fds)