function playGame() {
    let userSelection, computerSelection;
    let userScore, computerScore;
    let playOutcome;

    for (let i = 1; i <= 5; i++) {
        userSelection = getUserChoice();
        computerSelection = getComputerChoice();

        playOutcome = playRound(userSelection, computerSelection);

        if (playOutcome === "user") {
            userScore++;
        } else if (playOutcome === "computer") {
            computerScore++;
        } else {
            continue;
        }
    }

    if (userScore > computerScore) {
        console.log("You win the game! Congratulations!!!");
    } else if (computerScore > userScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("The game ends in a TIE!");
    }
}


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "tie";
    } else if (userSelection === "rock" && userSelection === "scissors") {
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
    let humanChoice = prompt("Choose an option; rock, paper, or scissors: ").toLowerCase();

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        console.log("Invalid input. Input should be (rock, paper, or scissors)");
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

playGame();
