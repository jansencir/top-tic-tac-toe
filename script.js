/**PB
 * factory to create players
 * something to start the game
 * something to control the flow of the game
 * something to determine when there is a winner or a draw/no winner
 * something to keep track of wins
 * something to restart the board
 */

const GameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let squareHTML = "";
        gameBoard.forEach((square, index) => {
            squareHTML += `<button class="square" id="square-${index}"${square}</button>`
        })
        const gameContainer = document.querySelector(".game-container");
        gameContainer.innerHTML = squareHTML;
        gameContainer.classList.add("background-clr");
    }

    return { render }
})();



const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    // Do something
});