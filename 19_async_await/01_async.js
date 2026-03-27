function getuser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = { name: "amit", age: "23" };

      if (user) {
        resolve(user);
      } else {
        reject("user not found");
      }
    }, 3000);
  });
}

async function fetchUserData() {
  try {
    console.log("fetching user data");

    const user = await getuser();

    console.log("user data", user);

    console.log("data fetched successfully");
  } catch (error) {
    console.log("eroor", error);
  }
} 

fetchUserData();

console.log("this will run firts");
