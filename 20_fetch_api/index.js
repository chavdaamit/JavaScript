async function userData() {
  try {
    const Data = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log("data", Data);

    const users = await Data.json();

    console.log("user data", users);
  } catch (error) {
    console.log(error);
  }
}

userData();
