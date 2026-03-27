// document
//   .getElementById("btn")
//   .addEventListener("click", async function imges() {
//     const img = document.getElementById("img");

//     try {
//       const api = await fetch(
//         "https://www.thecocktaildb.com/api/json/v1/1/random.php",
//       );

//       const data = await api.json();

//       img.src = data.drinks[0].strDrinkThumb;
//     } catch (error) {
//       console.log(error);
//     }
//   });

document.getElementById("btn").addEventListener("click", async () => {
  const img = document.getElementById("img");

  const drinks = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  );

  const result = await drinks.json();

  if (result.drinks) {
    // throw new Error("faild to fetch drink img");
    img.src = result.drinks[0].strDrinkThumb;
  } else {
    img.src = result.message;
  }
});
