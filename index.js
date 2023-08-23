const myArray = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

