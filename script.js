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
        console.log(playerOne)
        console.log(playerTwo)
        GameBoard.renderBoard();
    }

    const clickHandler = (event) => {
        let squareIndex = parseInt(event.target.id.split("-")[1])
        if (GameBoard.getGameBoard()[squareIndex] !== "") {
            return
        }

        GameBoard.update(squareIndex, players[currentPlayerIndex].symbol);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    return {
        start,
        clickHandler
    }
})();


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
    GameController.start();
});


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    console.log("Baskemtball");
});