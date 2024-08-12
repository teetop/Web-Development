const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const restartButton = document.querySelector("#restart");
const firstPlayer = document.querySelector("#player1");
const secondPlayer = document.querySelector("#player2");
const firstPlayerScore = document.querySelector("#player1Score");
const secondPlayerScore = document.querySelector("#player2Score");

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let score1 = 0;
let score2 = 0;

const player1 = getPlayerName(1);
const player2 = getPlayerName(2);

firstPlayer.textContent = player1;
secondPlayer.textContent = player2;

const player1sign = chooseSign(player1);
const player2sign = (player1sign === "X") ? "O" : "X";
if (player1sign === "X") {
    firstPlayer.style.color = "#001524";
    secondPlayer.style.color = "#FF7D00";
} else {
    firstPlayer.style.color = "#FF7D00";
    secondPlayer.style.color = "#001524";
}

alert(`${player1}: ${player1sign}, ${player2}: ${player2sign}`);

function getPlayerName(playerNumber) {
    let playerName = prompt(`Player ${playerNumber}: What is your name?`);
    while (!playerName) {
        playerName = prompt(`Player ${playerNumber}: Please input a valid name`);
    }
    return playerName;
}

function chooseSign(playerName) {
    let sign = prompt(`${playerName}, choose your sign between O and X`).toUpperCase();
    while (sign !== "X" && sign !== "O") {
        sign = prompt(`${playerName}, please choose a valid sign (O or X)`);
    }
    return sign;
}

let currentPlayer = player1sign;
let player = player1;
let running = false;

initializeGame();

function initializeGame() {

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => cellClicked(index));
    });
    restartButton.addEventListener("click", restartGame);
    updateStatus();
    running = true;
}

function restartGame() {
    currentPlayer = player1sign;
    player = player1;
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    cells.forEach((cell) => cell.textContent = "");
    cells.forEach(cell => {
        cell.style.border = "2px solid #232E21"; //after first play, the border color changes
    })
    updateStatus();
    running = true;
}

function updateStatus() {
    status.textContent = `${player}'s turn`;
    status.style.color = currentPlayer === "X" ? "#C2F8CB" : "#FF7D00";
}

function cellClicked(index) {
    if (!running || board[Math.floor(index / 3)][index % 3] !== "") {
        return;
    }

    board[Math.floor(index / 3)][index % 3] = currentPlayer;
    updateCell(cells[index], currentPlayer);

    if (checkWinner(currentPlayer, board)) {
        running = false;
        status.textContent = `${player} wins!`;
        player === player1 ? score1++ : score2++;
        firstPlayerScore.textContent = score1.toString();
        secondPlayerScore.textContent = score2.toString();
    } else if (board.every((row) => row.every((cell) => cell !== ""))) {
        running = false;
        status.textContent = "DRAW!";
        status.style.color = "#F0FFF1";
    } else {
        currentPlayer = currentPlayer === player1sign ? player2sign : player1sign;
        player = player === player1 ? player2 : player1;
        updateStatus();
    }
}

function updateCell(cell, value) {
    if (value === "X") {
        cell.textContent = value;
        cell.style.color = "#001524";
    } else if (value === "O") {
        cell.textContent = value;
        cell.style.color = "#FF7D00";

    }
}


function checkWinner(player, board) {
    for (const condition of winConditions) {
        if (condition.every((i) => board[Math.floor(i / 3)][i % 3] === player)) {
            return true;
        }
    }
    return false;
}