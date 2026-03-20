
// “This is an ES6 Class used to create objects using the constructor method.”
class Employee {

    constructor(name, position, salary, city) {

        this.name = name
        this.position = position
        this.salary = salary
        this.city = city
    }
}

const employee1 = new Employee("Amit", "sales officer", 22000, "Bhavnagr")
const employee2 = new Employee("price", "sales officer", 25000, "ahmedabad")
const employee3 = new Employee("Dharmik", "sales officer", 32000, "surat")
const employee4 = new Employee("kalpesh", "sales officer", 42000, "baroda")
const employee5 = new Employee("mohin khan", "sales officer", 52000, "pune")


console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);

console.log(" ");


// Example 2

class Bike {

    constructor(brand, model, mileage, price) {


        this.brand = brand
        this.model = model
        this.mileage = mileage;
        this.price = price
    }
}

const bike1 = new Bike("Hero", "splendor", 65, 85000)
const bike2 = new Bike("Honda", "Shine", 70, 98000)

console.log(bike1);
console.log(bike2);
