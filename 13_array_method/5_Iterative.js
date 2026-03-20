let fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let vegitabels = ["potato", "tomato", "red chilli", "onion"];

for (let i = 0; i < vegitabels.length; i++) {
  console.log(vegitabels[i]);
}

console.log(" ");

// for...of Loop

for (let vegitabel of vegitabels) {
  console.log(vegitabel);
}

console.log(" ");

// forEach Method

const fruitss = ["apple", "banana", "mango", "orange"];

fruitss.forEach(function (fruit) {
  console.log(fruit);
});
