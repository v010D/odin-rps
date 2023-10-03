const myArray = ["Rock", "Paper", "Scissors"];
const resultMessage = ["You win!", "You tie!", "You Lose"];
const resultCondition = ["Rock beats Scissors", "Paper beats Rock", "Scissors beats Paper", "You both picked the same thing"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function capitalizeFirstLetter(inputString) {
  const lowercaseString = inputString.toLowerCase();
  const capitalizedString = lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
  return capitalizedString;
}

// Function to check if the game should end
function checkGameEnd() {
    if (playerScore === 5) {
      console.log("Player wins the game!");
      resetGame();
    } else if (computerScore === 5) {
      console.log("Computer wins the game!");
      resetGame();
    }
  }
  
  // Function to reset the game
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    console.log("Scores have been reset.");
  }



  function playRound(playerSelection, computerSelection) {
    const resultElement = document.getElementById("round-result");
    const playerChoiceElement = document.getElementById("player-choice");
    const computerChoiceElement = document.getElementById("computer-choice");
    const gameResultElement = document.getElementById("game-result");

    // Check if the game is already won
    if (playerScore === 5 || computerScore === 5) {
        return;  // Game is already won, do nothing
    }

    // Update the scores
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        document.getElementById("player-score").textContent = "Player Wins: " + playerScore;
    } else if (playerSelection !== computerSelection) {
        computerScore++;
        document.getElementById("computer-score").textContent = "Computer Wins: " + computerScore;
    }

    // Determine the winner and update the result element
    let result;

    // Check if a player has reached 5 points
    if (playerScore === 5) {
        result = "Player wins the game!";
    } else if (computerScore === 5) {
        result = "Computer wins the game!";
    } else if (playerSelection === computerSelection) {
        result = `${resultMessage[1]} ${resultCondition[3]}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result = `${resultMessage[0]} ${resultCondition[myArray.indexOf(playerSelection)]}`;
    } else {
        result = `${resultMessage[2]} ${resultCondition[myArray.indexOf(computerSelection)]}`;
    }

    // Update the HTML elements with the result and choices
    resultElement.textContent = "Result: " + result;
    playerChoiceElement.textContent = "Player's Choice: " + playerSelection;
    computerChoiceElement.textContent = "Computer's Choice: " + computerSelection;

    // Update the round count
    const roundCountElement = document.getElementById("round-count");
    roundCountElement.textContent = "Round: " + (playerScore + computerScore);

    // Update the game result
    gameResultElement.textContent = result;
}




function checkGameEnd() {
    if (playerScore === 5) {
      alert("Player wins the game!");
      resetGame();
    } else if (computerScore === 5) {
      alert("Computer wins the game!");
      resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const roundCountElement = document.getElementById("round-count");
    roundCountElement.textContent = "Round: 0";

    const playerScoreElement = document.getElementById("player-score");
    playerScoreElement.textContent = "Player Wins: 0";

    const computerScoreElement = document.getElementById("computer-score");
    computerScoreElement.textContent = "Computer Wins: 0";
}

// ... (other parts of your code)



  



  document.getElementById("rock").addEventListener("click", () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
  

// Inside the playRound function after determining the winner
document.getElementById("player-choice").textContent = "Player's Choice: " + playerSelection;
document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerSelection;

// Update the round count
const roundCountElement = document.getElementById("round-count");
roundCountElement.textContent = "Round: " + (playerScore + computerScore);
