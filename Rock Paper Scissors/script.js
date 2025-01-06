// DOM elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");

// Variables for scores
let playerScore = 0;
let computerScore = 0;

// DOM elements for displaying scores
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

// DOM elements for displaying choices
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");

// Function to get computer's choice (random)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to decide the winner
function decideWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++; // Increment player score
    playerScoreDisplay.textContent = playerScore; // Update player score in UI
    return "You win!";
  } else {
    computerScore++; // Increment computer score
    computerScoreDisplay.textContent = computerScore; // Update computer score in UI
    return "Computer wins!";
  }
}

// Function to play a round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  // Update the displayed choices
  playerChoiceDisplay.textContent = `Your Choice: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  const result = decideWinner(playerChoice, computerChoice);
  resultText.textContent = `${result} (You: ${playerChoice}, Computer: ${computerChoice})`;
}

// Event listeners for player choices
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultText.textContent = "Make your move!";

  // Reset the choices display
  playerChoiceDisplay.textContent = "Your Choice: ";
  computerChoiceDisplay.textContent = "Computer's Choice: ";
}

// Reset button event listener
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);
