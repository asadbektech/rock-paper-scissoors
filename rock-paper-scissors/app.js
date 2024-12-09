// Get elements
const comp = document.getElementById('computer');
const resultGame = document.getElementById('luck');
const yours = document.getElementById('you');
const opponent = document.getElementById('opponent');

// Modal elements
const element = document.getElementById('t');
const message = document.getElementById('message');

// Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let yourScore = 0;
let computerScore = 0;
let result = '';

// Check scores and update the game
function checkScores() {
  if (yourScore === 3) {
    element.style.display = 'flex';
    message.textContent = 'You win🥳!';
    disableButtons();
  } else if (computerScore === 3) {
    element.style.display = 'flex';
    message.textContent = 'You lose😔!';
    disableButtons();
  }
}

// Disable buttons after the game ends
function disableButtons() {
  rock.removeAttribute('onclick');
  paper.removeAttribute('onclick');
  scissors.removeAttribute('onclick');
}

// Game function (for rock, paper, and scissors)
function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display computer's choice
  if (computerChoice === 'rock') {
    comp.textContent = '👊';
  } else if (computerChoice === 'paper') {
    comp.textContent = '🖐';
  } else {
    comp.textContent = '✌️';
  }

  // Compare choices and determine the result
  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    yourScore += 1;
    result = 'You win!';
  } else {
    computerScore += 1;
    result = 'You lose!';
  }

  // Update result and score
  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;

  // Check if anyone has reached 3 points
  checkScores();
}

// Event listeners for buttons
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));

// Reset function to start a new game
function reset() {
  yourScore = 0;
  computerScore = 0;
  result = 'Good luck!';
  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
  comp.textContent = '🤝';
  element.style.display = 'none';

  // Re-enable buttons after reset
  rock.setAttribute('onclick', 'playGame("rock")');
  paper.setAttribute('onclick', 'playGame("paper")');
  scissors.setAttribute('onclick', 'playGame("scissors")');
}
