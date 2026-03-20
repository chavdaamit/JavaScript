// Example 1

let mobile = {
  model: "iPhone13",
  price: 70000,
  color: "black",
  ram:   "128GB"
};

for(let key in mobile){
  console.log(key + " => " + mobile[key]);
}
console.log("  ");

// Example 2
let car ={

    brand:"Swift",
    color:"black",
    price: 1000000,
    model:"CNG"

}

for(let key in car){

    console.log(key+ " => " + car[key]);
    

}