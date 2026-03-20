// // syntax error

// conts num =10;
// const num = 10;

// console.log(num);

// rumtime error

function play() {
  console.log("I am student ");
}

play();

// plays();

// console.log(Number);

try {
  plays();
} catch (error) {
  console.log(error.message);
}

const age = 18;

function CheckAge() {
  try {
    if (age < 10) {
      throw new Error("Age is not define");
    }
    console.log("you are eligile");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("age checked");
  }
}

CheckAge();
