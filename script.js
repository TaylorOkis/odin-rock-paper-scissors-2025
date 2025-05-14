
let userSelection, computerSelection;
let userScore = 0, computerScore = 0;
let playOutcome;

function playRound(userSelection, computerSelection) {

    console.log(`User Selection: ${userSelection}; Computer Selection: ${computerSelection}`);

    playOutcome = decideRoundWinner(userSelection, computerSelection);


    if (playOutcome === "user") {
        userScore++;
    } else if (playOutcome === "computer") {
        computerScore++;
    }

    console.log(`User score: ${userScore}; Computer Score: ${computerScore}`);

    if (userScore === 5 || computerScore === 5) {
        declareGameWinner();
        // Deactivate choice buttons.
        // This would not be here
        userScore = 0;
        computerScore = 0;
    }
}

function declareGameWinner() {
    if (userScore > computerScore) {
        console.log("You win the game! Congratulations!!!");
    } else if (computerScore > userScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("The game ends in a TIE!");
    }
}

function decideRoundWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "tie";
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        return "user";
    } else if (userSelection === "paper" && computerSelection === "rock") {
        return "user";
    } else if (userSelection === "scissors" && computerSelection == "paper") {
        return "user";
    } else {
        return "computer";
    }
}

function getUserChoice() {

    let userChoice = "";

    if (userChoice === "rock") {
        return "rock";
    } else if (userChoice === "paper") {
        return "paper";
    } else if (userChoice === "scissors") {
        return "scissors";
    } else {
        throw new Error("Invalid input. Input should be (rock, paper, or scissors)");
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const userBtn = document.querySelectorAll("button");
userBtn.forEach((button) => {
    button.addEventListener("click", () => {
        let userChoice = button.id;

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            userSelection = userChoice;
            computerSelection = getComputerChoice();
            playRound(userSelection, computerSelection);
        }
    });
});
