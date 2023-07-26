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
    if (playerSelection === computerSelection)
	return "It's a tie."
    // we check if the player won
    else if (playerSelection === "rock" && computerSelection === "scissors"
	     || playerSelection === "paper" && computerSelection === "rock"
	     || playerSelection === "scissors" && computerSelection === "paper") {
	return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else return `You lose! ${computerSelection} beats ${playerSelection}.`;
}

