const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(number);

const OldNumber = number.filter((ad) => ad % 2 !== 0);

console.log(OldNumber);

// example 2

const person = [
  { name: "Ankit", age: 21, city: "ucha kotda" },
  { name: "price", age: 18, city: "bhavnagar" },
  { name: "mohin Khan", age: 23, city: "Ghogha" },
  { name: "kalpesh", age: 19, city: "Ghogha" },
  { name: "dharmik", age: 20, city: "Shihor" },
];

const age = person.filter((as) => as.age >= 20);

console.log(age);
