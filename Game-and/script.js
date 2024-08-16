const rock = document.getElementById("game_rock");
const paper = document.getElementById("game-paper");
const scissors = document.getElementById("game_scissors");
const you = document.getElementById("game-you").querySelector("img");
const computer = document.getElementById("game_computer").querySelector("img");
const result = document.getElementById("results");
const startButton = document.getElementById("startButton");

let playerChoice = "";
let computerChoice = "";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateChoice(choice, element) {
  if (choice === "rock") {
    element.src = "./img/leadership.png";
  } else if (choice === "paper") {
    element.src = "./img/hand.png";
  } else if (choice === "scissors") {
    element.src = "./img/scissors (2).png";
  }
}

function startGame() {
  computerChoice = getComputerChoice();
  updateChoice(playerChoice, you);
  updateChoice(computerChoice, computer);
  result.textContent = determineWinner(playerChoice, computerChoice);
}

function determineWinner(player, computer) {
  let result;

  if (player === computer) {
    result = "It's a draw!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  let gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
  gameResults.push(result);
  localStorage.setItem("gameResults", JSON.stringify(gameResults));

  return result;
}
