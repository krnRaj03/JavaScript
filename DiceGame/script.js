"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");

const diceMain = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnAdd = document.querySelector(".btn--add");
const btnRoll = document.querySelector(".btn--roll");

let scores = [0, 0]; //final scores
let currentScore = 0;
let activePlayer = 0;

// setting the values
score0.textContent = 0;
score1.textContent = 0;
diceMain.classList.add("hidden");

///SWITCH PLAYER functionality
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
}
///Roll dice functionality
btnRoll.addEventListener("click", function () {
  // generate a number from 1 to 6
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceMain.classList.remove("hidden"); //display dice
  diceMain.src = `dice-${diceNumber}.png`; //selecting png file
  // Check for 1
  if (diceNumber !== 1) {
    // add dicenumber to currentscore
    currentScore = currentScore + diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // switch player
  else {
    switchPlayer();
  }
});

///Add Score button functionality
btnAdd.addEventListener("click", function () {
  // 1.Adding the current score to active Player
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. check if score>=100
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
  }
  // 3. switch the player
  switchPlayer();
});

// btnNew.addEventListener("click", function () {});
