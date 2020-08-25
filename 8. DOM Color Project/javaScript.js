let randomColorArr = (arrSize) => {
  let arr = [];
  for (let j = 0; j < arrSize; j++) {
    arr.push(randomRGB());
  }
  return arr;
};

function randomRGB() {
  let rgbGen = () => Math.floor(Math.random() * 256);
  return `rgb(${rgbGen()}, ${rgbGen()}, ${rgbGen()})`;
}

let colors = randomColorArr(6);
let square = document.getElementsByClassName("square");

for (let i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];
}
