
let userSelection, computerSelection;
let userScore = 0, computerScore = 0, round = 0;
let playOutcome;

function playRound(userSelection, computerSelection) {

    round++;
    let htmlGameRound = document.querySelector("#round");
    htmlGameRound.textContent = round;

    let htmlUserChoice = document.querySelector("#user-choice");
    htmlUserChoice.textContent = userSelection;

    let htmlComputerChoice = document.querySelector("#computer-choice");
    htmlComputerChoice.textContent = computerSelection;

    playOutcome = decideRoundWinner(userSelection, computerSelection);

    if (playOutcome === "user") {
        userScore++;
    } else if (playOutcome === "computer") {
        computerScore++;
    }

    let htmlUserScore = document.querySelector("#user-score");
    htmlUserScore.textContent = userScore;

    let htmlComputerScore = document.querySelector("#computer-score");
    htmlComputerScore.textContent = computerScore;

    if (userScore === 5 || computerScore === 5) {
        declareGameWinner();

        let choiceButtons = document.querySelectorAll(".choice-button");
        choiceButtons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function declareGameWinner() {
    let htmlMessageArea = document.querySelector(".main-container>p");

    if (userScore > computerScore) {
        htmlMessageArea.textContent = "You win the game! Congratulations!!!";
        htmlMessageArea.style.color = "green";
    } else if (computerScore > userScore) {
        htmlMessageArea.textContent = "Computer wins the game! Better luck next time.";
        htmlMessageArea.style.color = "red";
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


function resetGame() {
    let htmlGameRound = document.querySelector("#round");
    htmlGameRound.textContent = 0;
    round = 0;

    let htmlUserScore = document.querySelector("#user-score");
    htmlUserScore.textContent = 0;
    userScore = 0;

    let htmlComputerScore = document.querySelector("#computer-score");
    htmlComputerScore.textContent = 0;
    computerScore = 0;

    let htmlUserChoice = document.querySelector("#user-choice");
    htmlUserChoice.textContent = "-";

    let htmlComputerChoice = document.querySelector("#computer-choice");
    htmlComputerChoice.textContent = "-";

    let htmlMessageArea = document.querySelector(".main-container>p");
    htmlMessageArea.textContent = "Make your move!";
    htmlMessageArea.style.color = "black";

    let choiceButtons = document.querySelectorAll(".choice-button");
    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
}

const userBtn = document.querySelectorAll("button");
userBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let userChoice = e.target.id;

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            userSelection = userChoice;
            computerSelection = getComputerChoice();
            playRound(userSelection, computerSelection);
        } else if (userChoice === "reset-game") {
            resetGame();
        } else {
            console.log("Invalid event passed");
        }
    });
});
