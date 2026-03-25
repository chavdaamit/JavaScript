// example 1

new Promise((resolve, reject) => {
  let order = true;

  setTimeout(() => {
    if (order) {
      resolve("pizza");
    } else {
      reject("order failed");
    }
  }, 2000);
})

  .then((food) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(food + " ordered");
        resolve(food);
      }, 1000);
    });
  })

  .then((food) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(food + " prepared");
        resolve(food);
      }, 2000);
    });
  })

  .then((food) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(food + " delivered");
        resolve(food);
      }, 3000);
    });
  });

// example 2

// new Promise((resolve) => {
//   resolve("Study 📚");
// })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("Open Book 📖");
//       return task;
//     }, 2000);
//   })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("Read Chapter");
//       return task;
//     }, 3000);
//   })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("Complete Study ✅");
//     }, 4000);
//   });

// example 3

// new Promise((resolve) => {
//   resolve("game");
// })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("Open Game");
//       return task;
//     }, 2000);
//   })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("Start The Game");
//       return task;
//     }, 3000);
//   })

//   .then((task) => {
//     setTimeout(() => {
//       console.log("wining the Game");
//       return task;
//     }, 4000);
//   });


