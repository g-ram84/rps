let computerSelection;
let playerSelection;
let pScore = 0;
let cScore = 0;
const buttons = document.querySelectorAll("button");

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

const disableButton = () => {
	buttons.disabled = true;
};

const playRound = (playerSelection, computerSelection) => {
	const div = document.createElement("div");
	const container = document.querySelector("#game");
	container.appendChild(div);
	if (pScore === 5) {
		return (div.innerText = `You win!`);
	}
	if (cScore === 5) {
		return (div.innerText = `You lose!`);
	}
	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		pScore += 1;
		return (
			(div.style.cssText =
				"background-color: green; border: 3px black solid; max-width: 50%"),
			(div.innerText = `You win! ${playerSelection} beats ${computerSelection}. Current score is: Player - ${pScore} / Computer = ${cScore}`)
		);
	} else if (playerSelection === computerSelection) {
		return (
			(div.style.cssText =
				"background-color: aqua; border: 3px black solid;  max-width: 50%"),
			(div.innerText = `Tie!`)
		);
	} else {
		cScore += 1;
		return (
			(div.style.cssText =
				"background-color: red; border: 3px black solid;  max-width: 50% "),
			(div.innerText = `You lose! ${computerSelection} beats ${playerSelection}. Current score is: Player - ${pScore} / Computer = ${cScore}`)
		);
	}
};

// const logPlay = (e) => {
// 	return e.target.innerText;
// };

// const rock = document.querySelector("#rock");

// rock.addEventListener("click", logPlay);

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		game(e);
	});
});

const game = (e) => {
	computerSelection = computerPlay();
	playerSelection = e.target.innerText;

	playRound(playerSelection, computerSelection);
};

// console.log(game(playRound));
