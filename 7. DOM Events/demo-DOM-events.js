// let colorArr = ["cyan", "yellow", "green", "blue", "magenta", "cream"];

// let myBody = document.getElementsByTagName("body")[0];

// myBody.addEventListener("click", () => {
//   let indice = Math.floor(Math.random() * colorArr.length);
//   myBody.style.background = colorArr[indice];
// });

let h1 = document.querySelector("h1");
let originalH1 = h1.textContent;
let h1Changed = false;
let myButton = document.getElementById("action-button");

myButton.addEventListener("click", () => {
  if (h1Changed) {
    h1.textContent = originalH1;
  } else {
    h1.textContent = "Nice!";
  }
  h1Changed = !h1Changed;
});

let ul = document.querySelector("ul");

ul.addEventListener("click", () => {
  console.log("you clicked the ul");
});

let lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  console.log("here", lis[i]);
  lis[i].addEventListener("click", function () {
    this.style.color = "red";
  });
}

let imageArr = [
  "https://sonderhills.com/wp-content/uploads/2020/02/cascara_tea_mist_gallery.jpg",
  "https://sonderhills.com/wp-content/uploads/2020/02/sonder_hills_2_gallery.jpg",
  "https://sonderhills.com/wp-content/uploads/2020/02/house_night_gallery.jpg",
  "https://sonderhills.com/wp-content/uploads/2020/02/bbq_gallery.jpg",
  "https://sonderhills.com/wp-content/uploads/2020/02/watermelon_gallery.jpg",
];

let images = document.getElementsByClassName("anImage");

let photoButton = document.getElementById("photo-button");
console.log(photoButton);

photoButton.addEventListener("click", function () {
  for (let i = 0; i < images.length; i++) {
    let indice = Math.floor(Math.random() * imageArr.length);
    images[i].setAttribute("src", imageArr[indice]);
  }
});

let backgroundColorButton = document.getElementById("background-color");
backgroundColorButton.addEventListener("click", () => {
  document.body.classList.toggle("magenta");
});
