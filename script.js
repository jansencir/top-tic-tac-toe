// task 1: build a GameBoard and display it when "start" is clicked
// task 2: grab players info and attach it to a mark "X" or "O"

const GameDisplay = (() => {
    const displayMessage = (message) => {
        document.querySelector(".game-message").innerHTML = message;
    }

    return { displayMessage }
})();

const GameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]
    const gameContainer = document.querySelector(".game-container");
    const renderBoard = () => {
        let boardHTML = "";
        gameBoard.forEach((square, index) => {
            console.log(index)
            boardHTML += `<button class="square" id="square-${index}">${square}</button>`
        })
        gameContainer.innerHTML = boardHTML;
        gameContainer.classList.add("background-clr");
    }

    return { renderBoard }
})();


function createPlayers(input, symbol) {
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
    let currentPlayer;
    
    const start = () => {
        players = [
            playerOne = createPlayers(document.getElementById("player-one-name"), "X"),
            playerTwo = createPlayers(document.getElementById("player-two-name"), "O"),
        ]
        currentPlayer = 0;
        console.log(playerOne)
        console.log(playerTwo)
        GameBoard.renderBoard();
    }

    return { start }
})();


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
    GameController.start();
});


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    console.log("Baskemtball");
});