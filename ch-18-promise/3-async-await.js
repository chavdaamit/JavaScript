const PlaceOrder = () => {
  return new Promise((resolve, reject) => {
    let cart = ["mobile", "charger"];

    setTimeout(() => {
      if (cart.length > 0) {
        console.log("order placed successfully");
        resolve();
      } else {
        reject("cart is empty");
      }
    }, 2000);
  });
};

const processPayment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processd");
      resolve();
    }, 2000);
  });
};

const shipOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order shipped");
      resolve();
    }, 2000);
  });
};

const deliverOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order delivered");
      resolve();
    }, 2000);
  });
};

async function orderProcess() {
  try {
    await PlaceOrder();
    await processPayment();
    await shipOrder();
    await deliverOrder();
  } catch (error) {
    console.log(error);
  }
}

orderProcess();
