function play() {
  setTimeout(() => {
    console.log("play");
  }, 1000);

  console.log("i am running");
}

play();

// const checkyear = () => {
//   console.log("checking current year....");

//   setTimeout(() => {
//     const current = new Date().getFullYear();

//     console.log("current year is", current);
//   }, 5000);
// };

// checkyear();

const checkyear = () => {
  console.log("checking current year....");

  setTimeout(() => {
    const current = new Date().getFullYear();

    console.log("current year is", current);
  }, 5000);
};

checkyear();
