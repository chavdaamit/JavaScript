
// Constructor Function
function laptop(brand,RAM,price){

    this.brand = brand;
    this.RAM=RAM;
    this.price=price
}

// Creating object using new keyword
const laptop1 = new laptop("ASUS VivoBook", "16GB", 55000);
    

console.log(laptop1);
console.log(typeof laptop1);

const laptop2 = new laptop("DELL", "16GB", 65000);
console.log(laptop2);
console.log(typeof laptop2);

console.log(" ");


// Example 2


function Mobile(brand,RAM,price,color){

    this.brand=brand
    this.RAM=RAM
    this.price=price
    this.color=color

}


 const mobile1 = new Mobile("Sumsung s24","128Gb",7500,"black")

 console.log(mobile1);
 

 const mobile2=new Mobile("Iphone 13" ,"128GB",70000,"white")

 console.log(mobile2);
 



