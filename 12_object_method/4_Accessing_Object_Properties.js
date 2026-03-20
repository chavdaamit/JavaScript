// Creating an object
const bike = {
  brand: "Hero",
  model: "Splendor",
  mileage: 65,
  price: 80000
};



console.log(bike);

// Accessing property using Dot Notation
console.log(bike.brand);


// Accessing property using Bracket Notation
console.log(bike["model"]);

// now Destructuring

const {brand, model}=bike


console.log(brand);
console.log(model);

