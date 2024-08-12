const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");

let playerChoice;
let computerChoice;
choices.forEach(eachButton => {
    eachButton.addEventListener("click", () => {
        playerChoice = eachButton.textContent;
        computerChoice = computerTurn();

        player.textContent = `Player: ${playerChoice}`;
        computer.textContent = `Computer: ${computerChoice}`;
        result.textContent = determineWinner();
    })
});

function determineWinner() {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (computerChoice === "ROCK") {
        return (playerChoice === "PAPER") ? "You win!" : "You lose!";
    } else if (computerChoice === "PAPER") {
        return (playerChoice === "SCISSORS") ? "You win!" : "You lose!";
    } else if (computerChoice === "SCISSORS") {
        return (playerChoice === "ROCK") ? "You win!" : "You lose!";
    }
}

function computerTurn() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return choices[0].textContent;
        case 2:
            return choices[1].textContent;
        case 3:
            return choices[2].textContent;
    }
}