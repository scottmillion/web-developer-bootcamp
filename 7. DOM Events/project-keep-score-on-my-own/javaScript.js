let playToNum = 5;
let playTo = document.getElementById("play-to-num");
let playToMinus = document.querySelector("#play-to-minus");
let playToPlus = document.querySelector("#play-to-plus");

playToMinus.addEventListener("click", function () {
  if (playToNum >= 2) {
    playToNum--;
  }
  playTo.innerHTML = "Playing to " + playToNum.toString();
  winCondition(playerOneScore, playerTwoScore, playToNum);
});

playToPlus.addEventListener("click", function () {
  playToNum++;
  playTo.innerHTML = "Playing to " + playToNum.toString();
});

document.getElementById("reset").addEventListener("click", function () {
  playToNum = 5;
  playerOneScore = 0;
  playerTwoScore = 0;

  image1.classList.remove("pointAnimationNeg");
  image2.classList.remove("pointAnimation");
  playTo.innerHTML = "Playing to " + playToNum.toString();
  displayPlayerOne.textContent = playerOneScore;
  displayPlayerTwo.textContent = playerTwoScore;
  playerOnePointBtn.disabled = false;
  playerTwoPointBtn.disabled = false;
  playToMinus.disabled = false;
  playToPlus.disabled = false;
  h1.innerHTML = "Keep Score";
});

let playerOneScore = 0;
let playerTwoScore = 0;
let displayPlayerOne = document.getElementById("score-box-player-one");
let displayPlayerTwo = document.getElementById("score-box-player-two");

let playerOnePointBtn = document.querySelector("#add-point-p1");
let playerTwoPointBtn = document.querySelector("#add-point-p2");
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");

playerOnePointBtn.addEventListener("click", function () {
  playerOneScore++;
  displayPlayerOne.textContent = playerOneScore;
  let win = winCondition(playerOneScore, playerTwoScore, playToNum);
  if (!win) {
    image1.classList.toggle("pointAnimationNeg");
    setTimeout(() => image1.classList.toggle("pointAnimationNeg"), 300);
  }
});

playerTwoPointBtn.addEventListener("click", function () {
  playerTwoScore++;
  displayPlayerTwo.textContent = playerTwoScore;
  let win = winCondition(playerOneScore, playerTwoScore, playToNum);
  if (!win) {
    image2.classList.toggle("pointAnimation");
    setTimeout(() => image2.classList.toggle("pointAnimation"), 300);
  }
});

let h1 = document.querySelector("h1");

function winCondition(playerOneScore, playerTwoScore, roundLimit) {
  let result = null;
  let moreThan = null;
  if (playerOneScore / roundLimit > 0.5 || playerTwoScore / roundLimit > 0.5) {
    moreThan = true;
  }

  if (playerOneScore + playerTwoScore === roundLimit || moreThan) {
    if (playerOneScore === playerTwoScore) {
      h1.innerHTML =
        '<span style="color:rgb(245, 58, 58);">It\'s a Tie!</span>';
      result = "tie";
      image1.classList.toggle("pointAnimationNeg");
      image2.classList.toggle("pointAnimation");
    } else {
      playerOneScore > playerTwoScore
        ? ((h1.innerHTML =
            '<span style="color:rgb(245, 58, 58);">Player 1 Wins</span>'),
          image1.classList.toggle("pointAnimationNeg"),
          (result = "player1"))
        : ((h1.innerHTML =
            '<span style="color:rgb(245, 58, 58);">Player 2 Wins</span>'),
          image2.classList.toggle("pointAnimation"),
          (result = "player2"));
    }
    playerOnePointBtn.disabled = true;
    playerTwoPointBtn.disabled = true;
    playToMinus.disabled = true;
    playToPlus.disabled = true;
    return result;
  }
}
