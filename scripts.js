// Scores.
let playerScore = 0;
let computerScore = 0;

// Gets the random computer choice.
function getComputerChoice(){
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Plays a round and increases the score of the winner of the round by 1.
function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock"){
    if(computerSelection == "rock"){
      playerScore += 1;
      computerScore += 1;
      return "It's a tie!";
    }else if(computerSelection == "scissors"){
      playerScore += 1;
      return "You win! Rock beats Scissors.";
    }else{
      computerScore += 1;
      return "You lose! Paper beats Rock.";
    }
  }else if(playerSelection == "paper"){
    if(computerSelection == "paper"){
      playerScore += 1;
      computerScore += 1;
      return "It's a tie!";
    }else if(computerSelection == "rock"){
      playerScore += 1;
      return "You win! Paper beats Rock.";
    }else{
      computerScore += 1;
      return "You lose! Scissors beats Paper.";
    }
  }else{
    if(computerSelection == "scissors"){
      playerScore += 1;
      computerScore += 1;
      return "It's a tie!";
    }else if(computerSelection == "paper"){
      playerScore += 1;
      return "You win! Scissors beats Paper.";
    }else{
      computerScore += 1;
      return "You lose! Rock beats Scissors.";
    }
  }
}

// Main game loop that displays the score and the winner.
function game(){ 
  while(playerScore < 5 && computerScore < 5){
    const playerSelection = prompt("Enter your choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    console.log("Your score is: " + playerScore);
    console.log("The computer's score is: " + computerScore);
  }
  if(playerScore == 5 && computerScore == 5){
    alert("It's a tie!");
  }else if(playerScore == 5){
    alert("You win!");
  }else{
    alert("You lose!");
  }
}

//Calling the game function.
game();