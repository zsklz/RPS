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
    // we put the results into this div
    const results = document.querySelector('#results');
    const result = document.createElement('p');
    // we check if the strings match
    if (playerSelection === computerSelection) {
	result.textContent = "It's a tie."
	results.appendChild(result);
	// returns undefined
	return;
    }
    // we check if the player won
    else if (playerSelection === "rock" && computerSelection === "scissors"
	     || playerSelection === "paper" && computerSelection === "rock"
	     || playerSelection === "scissors" && computerSelection === "paper") {
	result.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`);
	results.appendChild(result);
	return 1;
    }
    else {
	result.textContent = (`You lose! ${computerSelection} beats ${playerSelection}.`);
	results.appendChild(result);
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

// game();

const buttons = document.querySelectorAll('button'); // this is a node list
// we add to each button an event listener,
// which plays a round when clicked according to the button's id
buttons.forEach((button) => {

  button.addEventListener('click', () => {
      playRound(button.id, getComputerChoice());
  });
});



