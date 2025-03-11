const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;



function getComputerChoice() {
    index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    return prompt("Please choose 'rock', 'paper'or 'scissors'");
}

function playRound(humanChoice,computerChoice) {
    const humanLower = humanChoice.toLowerCase();
    const computerLower = computerChoice.toLowerCase();

    if((humanLower==="rock" && computerLower ==="paper") ||
        (humanLower==="paper" && computerLower ==="scissors") ||
        (humanLower==="scissors" && computerLower ==="rock"))
        {
            console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

    else if ((humanLower==="rock" && computerLower ==="scissors") ||
            (humanLower==="paper" && computerLower ==="rock") ||
            (humanLower==="scissors" && computerLower ==="paper"))
            {console.log(`You won ! ${humanChoice} beats ${computerChoice}`);
        humanScore++;}

    else{console.log(`It's a draw! You both chose ${humanChoice}`)};
}

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

for (let i=1;i<6;i++) {
    playGame()
}

