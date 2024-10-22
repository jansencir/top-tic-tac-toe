const GameBoard = (() => {
    gameBoard = ["", "", "", "", "", "", "", "", ""]
})

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
    console.log("LeBron James");
})


const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    console.log("Baskemtball");
})