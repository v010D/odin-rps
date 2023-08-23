const myArray = ["Rock", "Paper", "Scissors"];
const resultMessage = ["You win!", "You tie!", "You Lose"];
const resultCondition = ["Rock beats Scissors", "Paper beats Rock", "Scissors beats Paper", "You both picked the same thing"];

function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}


function playRound(playerSelection, computerSelection = getComputerChoice()){
    let message;
    if (playerSelection === "Rock" & computerSelection === "Scissors") {
        message = `${resultMessage[0]} ${resultCondition[0]}`;
        return message;
    } else if (playerSelection === "Rock" & computerSelection === "Paper") {
        message = `${resultMessage[2]} ${resultCondition[1]}`;
        return message;
    } else if (playerSelection === "Rock" & computerSelection === "Rock") {
        message = `${resultMessage[1]} ${resultCondition[3]}`;
        return message;
    } else if (playerSelection === "Paper" & computerSelection === "Rock") {
        message = `${resultMessage[0]} ${resultCondition[1]}`;
        return message;
    } else if (playerSelection === "Paper" & computerSelection === "Scissors") {
        message = `${resultMessage[2]} ${resultCondition[0]}`;
        return message;
    } else if (playerSelection === "Paper" & computerSelection === "Paper") {
        message = `${resultMessage[1]} ${resultCondition[3]}`;
        return message;
    } else if (playerSelection === "Scissors" & computerSelection === "Paper") {
        message = `${resultMessage[0]} ${resultCondition[0]}`;
        return message;
    }else if (playerSelection === "Scissors" & computerSelection === "Rock"){
        message = `${resultMessage[2]} ${resultCondition[0]}`;
        return message;
    } else if (playerSelection === "Scissors" & computerSelection === "Paper") {
        message = `${resultMessage[1]} ${resultCondition[3]}`;
        return message;
    }
}