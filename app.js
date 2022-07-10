let computerSelection;
let playerSelection;
let counter = 0;

const computerPlay = () => {
	let compTurn = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (compTurn === 1) {
		compTurn = "Rock";
	} else if (compTurn === 2) {
		compTurn = "Paper";
	} else if (compTurn === 3) {
		compTurn = "Scissors";
	}
	return compTurn;
};

const playRound = (playerSelection, computerSelection) => {
	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		counter += 1;
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === computerSelection) {
		return `Tie!`;
	} else {
		counter -= 1;
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
};

const game = () => {
	for (let i = 0; i < 5; i++) {
		computerSelection = computerPlay();
		playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
		playerSelection =
			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
		console.log(playRound(playerSelection, computerSelection));
	}
	return counter > 0 ? `You win!` : counter === 0 ? "Tie game!" : `You lose!`;
};

console.log(game(playRound()));
