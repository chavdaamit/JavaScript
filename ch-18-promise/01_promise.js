//the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

// let vote = new Promise((resolve, reject) => {
//   let age = 19;

//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("you are eligible to vote");
//     } else {
//       reject("yopu are not eligible to vote");
//     }
//   }, 2000);
// });

// vote
//   .then((msg) => console.log(msg))

//   .catch((err) => console.log(err));

// example 2

const drive = new Promise((resolve, reject) => {
  const Age = 19;

  setTimeout(() => {
    if (Age >= 18) {
      resolve("you can drive");
    } else {
      reject("you can  not drive");
    }
  }, 2000);
});

drive.then((msg) => console.log(msg)).catch((err) => console.log(err));
