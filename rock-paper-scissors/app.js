const comp = document.getElementById('computer');
const resultGame = document.getElementById('luck');

const yours = document.getElementById('you');
const opponent = document.getElementById('opponent')

let yourScore = 0;
let computerScore = 0;

let result = '';


// There function of user choise to rock

function rock() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const userChoice = 'rock';

  if(computerChoice == 'rock'){
    comp.textContent = '👊';
  }else if (computerChoice == 'paper'){
    comp.textContent = '🖐';
  }else{
    comp.textContent = '✌️';
  }


  if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
      yourScore +=1;
      result = 'You win!'
  } else {
      computerScore += 1;
      result = 'You lose!'
  }

  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
}





// There function of user choise to paper

function paper() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const userChoice = 'paper';

  if(computerChoice == 'rock'){
    comp.textContent = '👊';
  }else if (computerChoice == 'paper'){
    comp.textContent = '🖐';
  }else{
    comp.textContent = '✌️';
  }

  if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
      yourScore +=1;
      result = 'You win!'
  } else {
      computerScore += 1;
      result = 'You lose!'
  }

  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
}




// There function of user choise to scissors

function scissors() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const userChoice = 'scissors';

  if(computerChoice == 'rock'){
    comp.textContent = '👊';
  }else if (computerChoice == 'paper'){
    comp.textContent = '🖐';
  }else{
    comp.textContent = '✌️';
  }

  if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
      yourScore +=1;
      result = 'You win!'
  } else {
      computerScore += 1;
      result = 'You lose!'
  }

  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
}


function reset(){
  yourScore = 0;
  computerScore = 0;
  result = 'Good luck!';

  resultGame.textContent = result;
  yours.textContent = yourScore;
  opponent.textContent = computerScore;
  comp.textContent = '🤝';
}