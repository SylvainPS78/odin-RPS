const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

function getComputerChoice() {
    index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    return prompt("Please choose 'rock', 'paper'or 'scissors'");
}


function declareWinner(score1,score2) {
    if (score1 === 5) {
        winner.textContent = "Congratulation, you WON !"
    }
    else if (score2 === 5) {
        winner.textContent = "Sorry, you LOST!"
    }
    else {return}
}

function playRound(humanChoice,computerChoice) {
    const humanLower = humanChoice.toLowerCase();
    const computerLower = computerChoice.toLowerCase();

    if((humanLower==="rock" && computerLower ==="paper") ||
        (humanLower==="paper" && computerLower ==="scissors") ||
        (humanLower==="scissors" && computerLower ==="rock"))
        {
            console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
            result.textContent = `You lose ! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            score.textContent = `Your score : ${humanScore} | Computer score : ${computerScore}`;
            declareWinner(humanScore,computerScore);

        }

    else if ((humanLower==="rock" && computerLower ==="scissors") ||
            (humanLower==="paper" && computerLower ==="rock") ||
            (humanLower==="scissors" && computerLower ==="paper"))
            {console.log(`You won ! ${humanChoice} beats ${computerChoice}`);
            result.textContent = `You won ! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            score.textContent = `Your score : ${humanScore} | Computer score : ${computerScore}`;
            declareWinner(humanScore,computerScore);
        }

    else{console.log(`It's a draw! You both chose ${humanChoice}`);
    result.textContent = `It's a draw! You both chose ${humanChoice}`;
    score.textContent = `Your score : ${humanScore} | Computer score : ${computerScore}`
    };
}

function declareWinner(score1,score2) {
    if (score1 === 5) {
        winner.textContent = "Congratulation, you WON !"
    }
    else if (score2 === 5) {
        winner.textContent = "Sorry, you LOST!"
    }
    else {return}
}

rockBtn.addEventListener("click", () => playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors",getComputerChoice()));



function playGame() {
    playRound(getHumanChoice(),getComputerChoice());
    roundCount++;
    if (roundCount>5){
        if (humanScore>computerScore){
            console.log(`Congratulation, you won the game with ${humanScore} points !`);
        }
        else if (humanScore<computerScore){
            console.log(`Unfortunatly, you loose the game with ${humanScore} points !`);
        }
        else {
            console.log(`It's a draw, with ${humanScore} points each !`);
        }
    }
}

//for (let i=1;i<6;i++) {
//  playGame()
//}

