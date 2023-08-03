let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button'); // this is a node list

// returns computer's choice based on a pseudorandom number
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
	return "rock";
    else if (choice === 1)
	return "paper";
    else return "scissors";
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    // we put the results into this div
    const results = document.querySelector('#results');
    const result = document.createElement('p');
    // we check if the strings match
    if (playerSelection === computerSelection) {
	result.textContent = "It's a tie."
	results.appendChild(result);
    }
    // we check if the player won
    else if (playerSelection === "rock" && computerSelection === "scissors"
	     || playerSelection === "paper" && computerSelection === "rock"
	     || playerSelection === "scissors" && computerSelection === "paper") {
	++playerScore;
	result.textContent = (`You win! ${playerSelection} beats ${computerSelection}.
        (${playerScore} - ${computerScore})`);
	results.appendChild(result);
    }
    else {
	++computerScore;
	result.textContent = (`You lose! ${computerSelection} beats ${playerSelection}.
        (${playerScore} - ${computerScore})`);
	results.appendChild(result);
    }
}

function clickEvent(event) {
    // we reset if game over
    if (playerScore === 5 || computerScore === 5) {
	const results = document.querySelector('#results');
	// removes all children (in this case paragraphs) of the results div
	while (results.firstChild) {
	    results.removeChild(results.lastChild);
	}
	playerScore = 0;
	computerScore = 0;
    }
    playRound(event.target.id);
    const result = document.createElement('p');
    result.style.fontWeight = 'bold';
    if (playerScore === 5) {
	result.textContent = "You won!"
	results.appendChild(result);
    }
    else if (computerScore === 5) {
	result.textContent = "You lost!"
	results.appendChild(result);
    }
}

// we add to each button an event listener,
// which plays a round when clicked according to the button's id
buttons.forEach((button) => { button.addEventListener('click', clickEvent); });

