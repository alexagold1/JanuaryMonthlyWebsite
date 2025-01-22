
let userName = prompt('What is your name?')
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
//End Prompts

let myTitle = `
 Click your choice below to start, ${userName}!
`;

console.log(myTitle);

document.getElementById('greeting').innerHTML = myTitle;


const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");

function game(playerChoice) {
  const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
  
  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = "🪨";
  } else if (randomNumber === 1) {
    computerChoice = "🗒️";
  } else {
    computerChoice = "✂️";
  }

  const getResult = (playerChoice, computerChoice) =>
    playerChoice === computerChoice
      ? "It's a tie 😫"
      : (playerChoice === "🪨" && computerChoice === "✂️") ||
        (playerChoice === "🗒️" && computerChoice === "🪨") ||
        (playerChoice === "✂️" && computerChoice === "🗒️")
      ? "You win! 😄"
      : "You Lose! 🥲";

  const result = getResult(playerChoice, computerChoice);
  resultDisplay.textContent = result;
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

  resultDisplay.style.backgroundColor =
    result === "It's a tie 😫"
      ? "blue"
      : result === "You win! 😄"
      ? "green"
      : result === "You Lose! 🥲"
      ? "red"
      : "";

  resultDisplay.style.border = "2px solid transparent";
  resultDisplay.style.color = "white";
}