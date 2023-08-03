// returns computer's choice based on a pseudorandom number
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
	return "rock";
    else if (choice === 1)
	return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    // so we can safely compare
    playerSelection.toLowerCase();
    // we check if the strings match
    if (playerSelection === computerSelection) {
	console.log( "It's a tie.");
	// returns undefined
	return;
    }
    // we check if the player won
    else if (playerSelection === "rock" && computerSelection === "scissors"
	     || playerSelection === "paper" && computerSelection === "rock"
	     || playerSelection === "scissors" && computerSelection === "paper") {
	console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
	return 1;
    }
    else {
	console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
	return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("The Game is over.")
    if (playerScore > computerScore)
	console.log("You won!");
    else if (playerScore < computerScore)
	console.log("You lost!");
    else
	console.org("It's a tie.");
    console.log(`(${playerScore} - ${computerScore})`);
}

game();
