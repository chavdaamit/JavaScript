let person = {
    firstName: "Amit",
    LastName: "Chavda",
    get fullName() {
        return this.firstName + "  " + this.LastName
    }
}
console.log(person.fullName);
console.log("  ");

// Example 2

let email ={
    firstName: "AD",
    LastName: "Chavda",
    num:7777,
    get gmail(){

        return this.firstName + this.LastName + this.num + "@gmail.com"

    }
}

console.log(email.gmail);
