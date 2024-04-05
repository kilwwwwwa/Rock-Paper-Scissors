function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let input;
do {
input = prompt("Rock, Paper, or Scissors?").toLowerCase();
} 
while (input !== "rock" && input !== "paper" && input !== "scissors");
const computerChoice = getComputerChoice();
//*****************************************************************************
console.log(computerChoice);
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Equality";
    }
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You Won!";
    }
    if ((playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
        || (playerSelection === "rock" && computerSelection === "paper")) {
        return "You Lost!";
    }
}
console.log(playRound(input,computerChoice));
//*******************************************************************************
function playGame(){
    let playerScore=0;
    let computerScore=0;
    for (let round=1;round<=5;round++) {
        const playerSelection = prompt("Round " + round + ": Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log("Round " + round + ": " + result);
        if (result === "You Won!") {
            playerScore++;
        } else if (result === "You Lost!") {
            computerScore++;
        }
    }
    console.log("****** Game Over ******");
    console.log("Your Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Congratulations ! You won the game !");
    } else if (playerScore < computerScore) {
        console.log("Sorry ! You lost the game !");
    } else {
        console.log("It's an equality!");
    }
}
playGame();