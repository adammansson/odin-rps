const MOVES = ["rock", "paper", "scissors"];

function computerPlay() {
    const rand = Math.floor(Math.random()*3);
    return MOVES[rand];
}

function singleRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        result = "It's a tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You win";
    } else {
        result = "You lose";
    }
    return result + `, you played ${playerSelection} and the computer played ${computerSelection}.`
}

function game() {
    const container = document.querySelector("#container");

    const displayInfo = document.querySelector("#displayInfo");
    displayInfo.textContent = "This is a game of rock paper scissors. First to 5 wins!"
    const displayResult = document.querySelector("#displayResult");
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    const displayFinal = document.querySelector("#displayFinal");

    let playerCount = 0;
    let computerCount = 0;
    container.childNodes.forEach(btn => {
        btn.addEventListener("click", () => {
            if (playerCount < 5 && computerCount < 5) {
                let result = singleRound(btn.textContent.toLowerCase(), computerPlay());
                displayResult.textContent = result;

                if (result.substring(0, 7) === "You win") {
                    playerCount++;
                } else if (result.substring(0, 8) === "You lose") {
                    computerCount++;
                }
                playerScore.textContent = playerCount;
                computerScore.textContent = computerCount;
            } 

            if (playerCount >= 5 || computerCount >= 5) {
                displayFinal.textContent = `You got ${playerCount} points and the computer got ${computerCount} points.`;
                if (playerCount > computerCount) {
                    displayFinal.textContent += " You win the game.";
                } else if (playerCount < computerCount) {
                    displayFinal.textContent += " You lose the game.";
                } else {
                    displayFinal.textContent += " The game is a tie.";
                }
                displayResult.textContent = "";
                displayScore.textContent = "";
            }
        });
    });
}

game()
