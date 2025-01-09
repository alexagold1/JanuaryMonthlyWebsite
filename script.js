let userName = prompt('What is your name?')
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
//End Prompts

let myTitle = `
  <h2> Welcome to Rock Paper Scissors, ${userName}!</h2>
`;
// Entire Title End

console.log(myTitle);

document.getElementById('title').innerHTML = myTitle;

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! Invalid input.');
    }
  };
  
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You won with a secret cheat code!';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // You can change 'rock' to 'paper', 'scissors', or 'bomb'
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();