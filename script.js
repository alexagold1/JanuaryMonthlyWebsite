
let userName = prompt('What is your name?')
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
let myTitle = `
 Click your choice below to start, ${userName}!
`;

console.log(myTitle);

document.getElementById('greeting').innerHTML = myTitle;


const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function game(playerChoice) {
  if (roundsPlayed >= 5) {
    alert(`Game over! Final score - Player: ${playerScore}, Computer: ${computerScore}.    
    Reload page to play again!`);
    return;
  }

  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNumber === 0) {
    computerChoice = "🪨";
  } else if (randomNumber === 1) {
    computerChoice = "🗒️";
  } else {
    computerChoice = "✂️";
  }

  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie 😫";
    } 
    if (
      (playerChoice === "🪨" && computerChoice === "✂️") ||
      (playerChoice === "🗒️" && computerChoice === "🪨") ||
      (playerChoice === "✂️" && computerChoice === "🗒️")
    ) {
      return "You win! 😄";
    }
    return "You Lose! 🥲";
  };

  const result = getResult(playerChoice, computerChoice);
  resultDisplay.textContent = result;
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

  resultDisplay.style.backgroundColor =
    result === "It's a tie 😫"
      ? "blue"
      : result === "You win! 😄"
      ? "green"
      : "red";

  resultDisplay.style.border = "2px solid transparent";
  resultDisplay.style.color = "white";

  switch (result) {
    case "You win! 😄":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose! 🥲":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

  roundsPlayed++;
}