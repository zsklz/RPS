console.log("Hello World!");

// returns computer's choice based on a pseudorandom number
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
	return "rock";
    else if (choice === 1)
	return "paper";
    else return "scissors";
}
