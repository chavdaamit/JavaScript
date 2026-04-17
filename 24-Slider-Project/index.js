const drinks = [
  "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
  "https://images.pexels.com/photos/164474/pexels-photo-164474.jpeg",
  "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg",
  "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
  "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
  "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
  "https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg",
  "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg"
];

let btnpri = document.getElementById("pri");

let btnNext = document.getElementById("next");

let drinksImg = document.getElementById("img");


let index =0;

drinksImg.src = drinks[index];


function priIMG() {

    index--
    if (index < 0) {
        index = drinks.length - 1
    }
    drinksImg.src = drinks[index]

}
function nextIMG() {
    index++
    if (index >= drinks.length) {
        index = 0
    }
    drinksImg.src = drinks[index]
}

setInterval(() => {

    nextIMG()
}, 3000
)