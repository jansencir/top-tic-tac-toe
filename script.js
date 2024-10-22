// task 1: build a GameBoard and display it when "start" is clicked
// task 2: grab players info and attach it to a mark "X" or "O"
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



const GamePlayers = (() => {
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
    }

    // what am i even trying to do rn
    // create players one and two in this function and hold them as objects
    // return players one and two but ONLY when the start button is clicked
    // so the logic is click the start button, and then the two players are created

    function playersOneTwo() {
        // stuff
    }

    // maybe put all this in a function
    playerOneInput = document.getElementById("player-one-name");
    playerTwoInput = document.getElementById("player-two-name");

    const playerOne = () => createPlayers(playerOneInput, "X");
    const playerTwo = () => createPlayers(playerTwoInput, "O");

    return { createPlayers }
})();


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
    GameBoard.renderBoard();
})


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    console.log("Baskemtball");
})