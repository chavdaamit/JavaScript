

//1 Arithmetic Operators

let a = 20
let b = 40

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

console.log("")


//2 Assignment Operators

// Add and Assign

let x = 30
x += 22
console.log(x)

// Subtract and Assign
let s = 20
s -= 10
console.log(s)

// Multiply and Assign
let d = 40
d *= 30
console.log(d)


// Divide and Assign

let c = 50
c /= 40
console.log(c)

// Modulus and Assign

let f = 10
f %= 3
console.log(f)
console.log("")

//3 Comparison Operators


// Equal value

let ad = 44
let ads = "44"
console.log(ads == ads)


// Equal value + type

console.log(ad === ads)

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

console.log("")

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

console.log("")


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
let fd=30

console.log(++fd)


//Post Increment / Decrement

let fds=30

console.log(--fds)