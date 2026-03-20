// join method

let car = ["swift", "i20", "BMW", "Audi", "Toyato"];

console.log(car);

console.log(car.join(" - "));

console.log(" ");

// flate method

let number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(number.flat());

number = [
  [1, 2, 3, [10, 11, 12], [13, 14, 15]],
  [4, 5, 6, [23, 44, 55], [22, 32, 44]],
  [7, 8, 9],
];

console.log(number.flat(Infinity));

console.log(" ");

// slice method

let fruits = ["apple", "banana", "mango", "grapes"];

let result = fruits.slice(1, 3);

console.log(result);

// some method

let num = [10, 20, 30, 40, 70, 60, 80];

let someNUM = num.some((a) => {
  return a > 10;
});
console.log("some :", someNUM);

// reverse

console.log("reverse :", num.reverse());

// value

const numValue = num.values();

for (let value of numValue) {
  console.log("value", value);
}
