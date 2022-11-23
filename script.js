const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"];
let scores = [0, 0];
let output;
message.innerHTML = "Select either Heads or Tails";
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let computerToss = Math.floor(Math.random() * 2);
  let playerGuess = e.target.innerText;
  let computerGuess = coinArray[computerToss];

  message.innerHTML =
    "Computer Selected : " +
    computerGuess +
    "</br> User selected :" +
    playerGuess;

  if (playerGuess === computerGuess) {
    output = "Player won!";
    scores[0]++;
  } else {
    output = "Computer won!";
    scores[1]++;
  }
  message.innerHTML +=
    "</br>" +
    output +
    "</br>" +
    "Player score : " +
    scores[0] +
    "</br> Computer score :" +
    scores[1];
}
