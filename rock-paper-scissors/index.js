console.log("Hello");

const choice = ["Rock", "Paper", "Scissors"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return choice[getRandomInt(3)];
}

let computerChoice = getComputerChoice(choice)
console.log(computerChoice)

function getHumanChoice() {
    let humanChoice = prompt();
    return humanChoice;
}


for (let i = 0; i < 5; i++) {
    let humanScore = 0
    let computerScore = 0

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "Scissors" && computerChoice === "Rock") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Rock" && computerChoice === "Paper")) {
            computerScore += 1;
        }
        else if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Rock" && computerChoice === "Scissors")) {
            humanScore +=1;
        }
        return computerScore - humanScore;
    }



    let score = playRound(humanSelection, computerSelection)

    if (score > 0) {
        console.log("Computer wins.")
    }
    else if (score < 0) {
        console.log("Human wins.")
    }
    else {
        console.log("tie")
    }
}
