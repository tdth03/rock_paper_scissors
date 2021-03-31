// Keep Score and state selections

let playerSelection = "";
let playerScore = 0;
let computerSelection = 0;
let computerScore = 0;


//computerPlay function: randomly generate a selection for the computer and return it as "computerSelection"

function computerPlay () {
    computerSelection = Math.floor(Math.random() * Math.floor(3));

    switch (computerSelection) {
        case 0:
            return computerSelection = 'rock';
        case 1: 
            return computerSelection = 'paper';
        case 2:
            return computerSelection = 'scissors';
    }
}





 


//Single round function that compares "computerSelection" and "playerSelection" and returns result in a string

function playGame() {
    i = 5;
    while (i > 1) {
        playRound(playerSelection, computerSelection);
        if (computerScore === 2 && playerScore === 2) {
            alert("Tie breaker! Good luck!")
        } else if (computerScore > 2) {
            alert("Computer wins!"); i=1;
        } else if (playerScore > 2) {
            alert("You win!"); i=1;
        }
     i--;
}

    function playRound() { //Play each round.

        computerPlay(); //Calls function to randomly select computer's choice

        playerSelection = prompt('Rock, Paper, or Scissors?'); //Take input from user and store as "playerSelection."
        playerSelection = playerSelection.toLowerCase(); //Make caseInsensitive

        if (playerSelection === computerSelection) {
            alert('It\'s a Tie!')
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                    (playerSelection == 'scissors' && computerSelection == 'paper') ||
                    (playerSelection == 'paper' && computerSelection == 'rock')) {
                        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
                        playerScore ++;
        } else {
                        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
                        computerScore ++;

        } 
        
        

    }

}

playGame();

        
        
     
    

//Create "game()" function to run 5 rounds and determine winner.
