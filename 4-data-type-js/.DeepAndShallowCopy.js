//deep copy

let student1 = { NAME: "Amit", AGE: "23" };

console.log("Student 1 ",student1);

let student2 = student1;

console.log("Student 2",student2);

student2.NAME="Amit Chavda"

console.log("After Change Student 2",student2);
console.log("After Change Student 1",student1);


console.log("    ")

//Shallow copy

let a = 10;
let b = a;   

b = 20;

console.log("a =", a); 
console.log("b =", b); 

