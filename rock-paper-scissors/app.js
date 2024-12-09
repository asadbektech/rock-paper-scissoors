// Get elements
const comp = document.getElementById('computer');
const resultGame = document.getElementById('luck');
const yours = document.getElementById('you');
const opponent = document.getElementById('opponent');
const element = document.getElementById('t');
const message = document.getElementById('message');
const buttons = document.querySelectorAll('.btn'); // Unified buttons

let yourScore = 0;
let computerScore = 0;

// Choices mapping for emoji display
const emojiMap = {
  rock: '👊',
  paper: '🖐',
  scissors: '✌️'
};

// Check scores and update the game
function checkScores() {
  if (yourScore === 3 || computerScore === 3) {
    element.style.display = 'flex';
    message.textContent = yourScore === 3 ? 'You win🥳!' : 'You lose😔!';
    disableButtons();
  }
}

// Disable buttons after the game ends
function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

// Game function
function playGame(userChoice) {
  const choices = Object.keys(emojiMap);
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  comp.textContent = emojiMap[computerChoice];

  // Determine the result
  if (userChoice === computerChoice) {
    resultGame.textContent = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    yourScore++;
    resultGame.textContent = 'You win!';
  } else {
    computerScore++;
    resultGame.textContent = 'You lose!';
  }

  // Update scores
  yours.textContent = yourScore;
  opponent.textContent = computerScore;

  // Check if the game has ended
  checkScores();
}

// Event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => playGame(button.id));
});

// Reset function to start a new game
function reset() {
  yourScore = 0;
  computerScore = 0;
  resultGame.textContent = 'Good luck!';
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
  comp.textContent = '🤝';
  element.style.display = 'none';

  // Re-enable buttons
  buttons.forEach(button => button.disabled = false);
}
