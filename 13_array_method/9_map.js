let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(num);

let multiplication = num.map((a) => a * 5);

let result  = num.map((b) => b + 10);

console.log(multiplication);

console.log(result);



// Example 2


let fruits =["apple", "Pineapple", "banana", "strawberry", "Mango","kiwi", "papaya" ]

console.log("fruites", fruits)

let fruitsArray = fruits.map((fruits) => {
  return fruits;
});

console.log("fruits array : ", fruitsArray);