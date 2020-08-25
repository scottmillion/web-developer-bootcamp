// const h1 = document.querySelector("h1");
// h1.innerHTML = "Pizza";
// h1.style.color = "red";

// const body = document.querySelector("body");
// let isBlue = false;

// setInterval(function () {
//   if (isBlue) {
//     body.style.background = "white";
//   } else {
//     body.style.background = "#3498db";
//   }
//   isBlue = !isBlue;
// }, 1000);

let h1 = document.getElementsByTagName("h1");
console.log("---");
console.log(h1);
console.log("---");
h1[0].style.color = "blue";
h1[1].style.color = "red";

let bolded = document.getElementsByClassName("bolded");

console.log("---");
console.log(bolded);
console.log("---");

bolded[0].style.fontFamily = "Arial";
bolded[0].style.fontSize = "30px";
bolded[1].style.fontWeight = "800";
bolded[1].style.fontSize = "20px";

let highlight = document.getElementById("highlight");
highlight.style.background = "yellow";

let highlightMe = document.querySelector("#highlight");

highlightMe.style.color = "orange";

// note: can use any CSS selector for querySelector and querySelectorAll, not just id. For example, ".btn" or "input[type="text"]" or ".nav:hover"

let firstH1 = document.querySelector("h1");
console.log(firstH1); // logs first h1
let allH1 = document.querySelectorAll("h1");
console.log(allH1); // logs nodelist of all h1s
