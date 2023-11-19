function getComputerChoice(){
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
playerSelection = "Rock";
computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
  if(playerSelection == "Rock"){
    if(computerSelection == "Rock"){
      return "It's a tie!";
    }else if(computerSelection == "Scissors"){
      return "You win! Rock beats Scissors.";
    }else{
      return "You lose! Paper beats Rock.";
    }
  }else if(playerSelection == "Paper"){
    if(computerSelection == "Paper"){
      return "It's a tie!";
    }else if(computerSelection == "Rock"){
      return "You win! Paper beats Rock.";
    }else{
      return "You lose! Scissors beats Paper.";
    }
  }else{
    if(computerSelection == "Scissors"){
      return "It's a tie!";
    }else if(computerSelection == "Paper"){
      return "You win! Scissors beats Paper.";
    }else{
      return "You lose! Rock beats Scissors.";
    }
  }
}


console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
