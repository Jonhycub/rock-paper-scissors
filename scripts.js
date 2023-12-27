// Scores.
let playerScore = 0;
let computerScore = 0;
const myScore = document.querySelector('#player-score');
const pcScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');

//Function that resets the game
function resetGame(){
  roundResult.innerText ="First to score 5 points wins the game";
  playerScore = 0;
  computerScore = 0;
}

// Function that gets the random computer choice.
function getComputerChoice(){
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

//Function that plays a round and increases the score of the winner of the round by 1.
function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock"){
    if(computerSelection == "rock"){
      playerScore += 1;
      computerScore += 1;
      roundResult.innerText ="It's a tie!";
    }else if(computerSelection == "scissors"){
      playerScore += 1;
      roundResult.innerText ="You win! Rock beats Scissors.";
    }else{
      computerScore += 1;
      roundResult.innerText ="You lose! Paper beats Rock.";
    }
  }else if(playerSelection == "paper"){
    if(computerSelection == "paper"){
      playerScore += 1;
      computerScore += 1;
      roundResult.innerText ="It's a tie!";
    }else if(computerSelection == "rock"){
      playerScore += 1;
      roundResult.innerText ="You win! Paper beats Rock.";
    }else{
      computerScore += 1;
      roundResult.innerText ="You lose! Scissors beats Paper.";
    }
  }else{
    if(computerSelection == "scissors"){
      playerScore += 1;
      computerScore += 1;
      roundResult.innerText ="It's a tie!";
    }else if(computerSelection == "paper"){
      playerScore += 1;
      roundResult.innerText ="You win! Scissors beats Paper.";
    }else{
      computerScore += 1;
      roundResult.innerText ="You lose! Rock beats Scissors.";
    }
  }
  if(playerScore == 5 && computerScore == 5){
    alert("It's a tie!");
    resetGame();
  }else if(playerScore == 5){
    alert("You Win!");
    resetGame();
  }else if(computerScore == 5){
    alert("You Lose!");
    resetGame();
  }
}

//Event listeners for the rock, paper and scissors buttons. When clicked a round is played with the correct playerSelection.
const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () =>{
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    myScore.innerText = "Player: " + playerScore;
    pcScore.innerText = "Computer: " + computerScore;
});

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () =>{
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    myScore.innerText = "Player: " + playerScore;
    pcScore.innerText = "Computer: " + computerScore;
});  

const buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', () =>{
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    myScore.innerText = "Player: " + playerScore;
    pcScore.innerText = "Computer: " + computerScore;
});
