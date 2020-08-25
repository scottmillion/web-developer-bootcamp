let snowDog = document.getElementsByTagName("img")[1];

snowDog.style.width = "500px";

let h1 = document.querySelector("h1");

h1.style.color = "yellow";
h1.style.border = "5px solid pink";

let paragraph = document.querySelector("p");

console.log(paragraph.classList);
paragraph.classList.add("big");
console.log(paragraph.classList);
paragraph.classList.remove("big");
console.log(paragraph.classList);
paragraph.classList.toggle("big");
console.log(paragraph.classList);
paragraph.classList.toggle("big");
console.log(paragraph.classList);
paragraph.classList.toggle("big");
console.log(paragraph.classList);

paragraph.textContent = "Oh yeah";
console.log(paragraph.textContent);

let ul = document.getElementsByTagName("ul")[0];
console.log(ul.textContent);

paragraph.innerHTML = "This is my <strong>dog</strong> Corky";

console.log(ul.innerHTML);

let link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "http://www.mozilla.org/");
console.log(link.getAttribute("href"));
link.setAttribute("alt", "my favorite link");
console.log(link);

let image1 = document.getElementsByTagName("img")[0];
console.log(image1.getAttribute("src"));
image1.setAttribute(
  "src",
  "https://images.beano.com/store/215f3f05f61ebdf3265d3997e249a1ada8d9f42b643d738ecb7711353b01?auto=compress%2Cformat&dpr=1&rect=0%2C0%2C0%2C0&w=195"
);

link.textContent = "Now we like Mozilla";
