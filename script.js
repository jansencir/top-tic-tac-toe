// task 1: build a GameBoard and display it when "start" is clicked
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

function createPlayers(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    }
}

const GamePlayers = (() => {

})

playerOneInput = document.getElementById("player-one-name");
playerTwoInput = document.getElementById("player-two-name");
function returnPlayerValue(player) {
    if (player.value === "") {
        console.log(player.placeholder)
    } else {
        console.log(player.value);
    }
}


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
    GameBoard.renderBoard();
})


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    console.log("Baskemtball");
})