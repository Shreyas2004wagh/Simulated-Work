const buttons = document.querySelectorAll("button");
const resultDisplay = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    console.log(`Player chose: ${playerChoice}`);
    playGame(playerChoice);
  });
});

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer chose: ${computerChoice}`);

  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  resultDisplay.textContent = result;
}
