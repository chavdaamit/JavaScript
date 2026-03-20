
// The split() method splits a string into an array based on a given separator.

let text = "Hello Sir"
// Exmaple 1
// Splits the string by space and converts the words into an array
// Output: ["Hello", "Sir"]
console.log(text.split(" "));

// Example 2
// Splits the string into words and converts them into an array
// Output: ["H","e","l","l","o"," ","S","i","r"]
console.log(text.split(""));

console.log(" ");



// The startsWith() method checks whether a string begins with a specified value.
// It returns true or false.

let num = "AD Chavda"

// Example 1
// Checks if the string starts with "AD" Output: true
console.log(num.startsWith("AD"));
// Example  2
// Checks if the string starts with "MM" output: false
console.log(num.startsWith("MM"));

console.log(" ");


// The substring() method extracts a part of a string based on index values.


let name = "Good Morning"

// Example 1
// Extracts characters from index 0 to 3 (4 is not included)   Output: "Good"
console.log(name.substring(0,4));
// Example 2
// Extracts characters from index 5 to the end of the string   Output: "Morning"
console.log(name.substring(5));
// Example 3
// -1 is treated as 0 So it returns the full string            Output: "Good Morning"
console.log(name.substring(-1));

console.log("");


// The toLowerCase() method converts all the letters of a string to lowercase
// Example 1
let add = "AMIT CHAVDA"

console.log(add.toLocaleLowerCase())

// The toUpperCase() method converts all the letters of a string to uppercase
// Example 2

let ad = "amit chavda"
console.log(ad.toLocaleUpperCase());
console.log(" ");



// trim


let space = "    red&white    "

 // Example 1 total length = 17
console.log("space",space.length);

// Example 2  // remove start spaces = 13
console.log("space",space.trimStart().length);
// Example 3  // remove end spaces = 13
console.log("space",space.trimEnd().length);


