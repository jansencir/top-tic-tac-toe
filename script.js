// task 1: build a GameBoard and display it when "start" is clicked
// task 2: grab players info and attach it to a mark "X" or "O"

const GameDisplay = (() => {
    const displayMessage = (message) => {
        document.querySelector(".game-message").innerHTML = message;
    }

    return {
        displayMessage
    }
})();

const GameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]
    const gameContainer = document.querySelector(".game-container");
    const renderBoard = () => {
        let boardHTML = "";
        gameBoard.forEach((square, index) => {
            boardHTML += `<button class="square" id="square-${index}">${square}</button>`
        })

        gameContainer.innerHTML = boardHTML;
        gameContainer.classList.add("background-clr");

        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", GameController.clickHandler)
        })
    }

    const update = (index, value) => {
        gameBoard[index] = value;
        renderBoard();
    }

    const getGameBoard = () => gameBoard;

    return {
        renderBoard,
        update,
        getGameBoard,
    }
})();


const createPlayers = (input, symbol) => {
    if (input.value === "" ) {
        return {
            name: input.placeholder,
            symbol: symbol,
        }
    }
    else if (input.value !== "") {
        return {
            name: input.value,
            symbol: symbol,
        }
    }
};


const GameController = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;
    
    const start = () => {
        players = [
            playerOne = createPlayers(document.getElementById("player-one-name"), "X"),
            playerTwo = createPlayers(document.getElementById("player-two-name"), "O"),
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        GameDisplay.displayMessage(`It's ${players[currentPlayerIndex].name}'s turn, place your ${players[currentPlayerIndex].symbol}`)
        GameBoard.renderBoard();
    }

    const clickHandler = (event) => {
        if (gameOver) {
            return
        }

        let squareIndex = parseInt(event.target.id.split("-")[1])
        if (GameBoard.getGameBoard()[squareIndex] !== "") {
            return
        }

        GameBoard.update(squareIndex, players[currentPlayerIndex].symbol);

        if (checkForWin(GameBoard.getGameBoard(), players[currentPlayerIndex].symbol)) {
            gameOver = true;
            GameDisplay.displayMessage(`${players[currentPlayerIndex].name} wins!`)
        } else if (checkForTie(GameBoard.getGameBoard())) {
            gameOver = true;
            GameDisplay.displayMessage("It's a tie!")
        }

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (i = 0; i < 9; i++) {
            GameBoard.update(i, "")
        }
        GameBoard.renderBoard();
    }

    return {
        start,
        clickHandler,
        restart,
    }
})();


function checkForWin(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}


function checkForTie(board) {
    return board.every(cell => cell !== "")
}


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
    GameController.start();
});


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    GameController.restart();
});