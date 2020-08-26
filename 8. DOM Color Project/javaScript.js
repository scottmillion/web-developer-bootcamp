let randomColorArr = (arrSize) => {
  let arr = [];
  for (let j = 0; j < arrSize; j++) {
    arr.push(randomRgbStr());
  }
  return arr;
};

function randomRgbStr() {
  let rgbGen = () => Math.floor(Math.random() * 256);
  return `rgb(${rgbGen()}, ${rgbGen()}, ${rgbGen()})`;
}

function allSquaresWinningColor(squares, pickedColor) {
  for (let k = 0; k < squares.length; k++) {
    squares[k].classList.remove("hide");
    squares[k].style.backgroundColor = pickedColor;
  }
  document.querySelector(".heading").style.background = pickedColor;
  document.getElementById("middle").innerHTML = "Correct!";
  document.getElementById("left").innerHTML =
    '<a href="#" id="play-again">Play Again?</a>';
  let playAgain = document.getElementById("play-again");
  playAgain.addEventListener("click", function () {
    resetGame();
    playAgain.innerHTML = '<a href=# id="new-colors">New Colors</a>';
  });
  return;
}

function resetGame() {
  document.getElementById("middle").innerHTML = "";
  document.querySelector(".heading").style.background = "rgb(36, 134, 199)";
  for (let k = 0; k < squares.length; k++) {
    squares[k].style.backgroundColor = pickedColor;
    squares[k].classList.remove("hide");
  }
  colors = randomColorArr(arrSize);
  pickedColor = colors[Math.floor(Math.random() * arrSize)];
  activateSquares(squares);
}

let newColors = document.getElementById("new-colors");

newColors.addEventListener("click", function () {
  resetGame();
});

function setColorArraySize(difficultyLevel = "hard") {
  return difficultyLevel === "easy" ? 3 : 6;
}

let difficultyIsEasy = document.getElementById("easy");
let difficultyIsHard = document.getElementById("hard");
difficultyIsHard.classList.add("game-mode");

difficultyIsEasy.addEventListener("click", function () {
  this.classList.add("game-mode");
  difficultyIsHard.classList.remove("game-mode");
  // arrSize = setColorArraySize("easy");
  // resetGame();
});

difficultyIsHard.addEventListener("click", function () {
  this.classList.add("game-mode");
  difficultyIsEasy.classList.remove("game-mode");
  // arrSize = setColorArraySize();
});

let arrSize = setColorArraySize();
let colors = randomColorArr(arrSize);
let pickedColor = colors[Math.floor(Math.random() * arrSize)];
let squares = document.getElementsByClassName("square");

let span = document.querySelector("span");
span.innerHTML = pickedColor;

function activateSquares(squares) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        allSquaresWinningColor(squares, clickedColor);
      } else {
        this.classList.add("hide");
        document.getElementById("middle").innerHTML = "Try again!";
      }
    });
  }
}

activateSquares(squares);
