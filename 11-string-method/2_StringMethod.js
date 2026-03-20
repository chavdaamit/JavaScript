
// The match() method is used to search a string for a specific word or pattern.
// Example 1

let num = "My Name Is Amit"

// "ad" is not present, so it will return null
console.log(num.match("ad"));
// "Amit" is present, so it will return an array with the matched value
console.log(num.match("Amit"));

// Example 2
let student = "I Am Student"
console.log(student.match("red"));

console.log(student.match("Am"));

console.log(" ");


// repeat  The repeat() method is used to repeat a string multiple times.

// Example 1

let text = "hello "
// repeat(4) means the string will repeat 4 times
console.log(text.repeat("4"));

// Example 2

let name = "Amit "
// repeat(3) means the string will repeat 3 times
console.log(name.repeat("3"));


// repalace The replace() method is used to replace a specific word or character in a string with another value.

let add = "Hello Amit";

// Example 1
// Replacing "Amit" with "Raj"
console.log(add.replace("Amit", "Raj"));
// Example 2
// replaceAll("l","L") will replace all small "l" letters with capital "L"
console.log(add.replaceAll("l", "L"));

console.log(" ");



// search() finds the position (index) of "Amit" in the string

let word = "hello Amit"

// Example 1
// "A" starts at index 6, so it returns 6
console.log(word.search("A"));

// Example 2
// "o" starts at index 4, so it returns 4
console.log(word.search("o"));

// Example 3
// "Raj" is not present in the string So it returns -1
console.log(word.search("raj"));



// The slice() method is used to extract a part of a string and return it as a new string.
let ex = "Red and White";

// Example 1
// Extracts characters from index 0 to 6 (7 is not included)  Output: "Red and"
console.log(ex.slice(0, 7));

// Example 2
// Extracts characters from index 7 to the end of the string  Output: " White"
console.log(ex.slice(7));

// Example 3
// -1 means the last character of the string  Output: "e"
console.log(ex.slice(-1));








