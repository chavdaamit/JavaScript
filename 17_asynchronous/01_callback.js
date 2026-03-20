function total(result) {
  console.log(result);
}

function calculate(a, b, cb) {
  const total = a + b;

  cb(total);
}

calculate(10, 15, total);


// exampale 2

function sum(result) {
  console.log(result);
}

function calculate(a, b, cd) {
  let sum = a * b;

  cd(sum);
}

calculate(20,30,sum)
