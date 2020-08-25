let paragraph = document.getElementsByTagName("p");
paragraph[0].style.color = "red";

let paragraphAgain = document.getElementsByClassName("special");

paragraphAgain[0].style.fontSize = "50px";

let paragraphId = document.getElementById("first");

paragraphId.style.fontFamily = "courier new";

document.querySelector("p").style.lineHeight = "7rem";

document.querySelectorAll("#first")[0].style.background = "blue";

document.querySelector("h1 + p").style.padding = "50px";

// h1 + p in CSS means the p tag adjacent to (immediately following) the h1 tag.
