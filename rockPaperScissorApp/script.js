// Defining the variables to interact with the DOM

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

let userSelection = ""
let computerSelection = "";
let userScore = 0;
let computerScore = 0;

const gameDiv = document.getElementById("game");
const playersDiv = document.createElement("div");
playersDiv.classList.add("players")
const scoresDiv = document.createElement("div");
scoresDiv.classList.add("scores")

const computerSelectionParagraph = document.createElement("p");
computerSelectionParagraph.classList.add("all-paragraphs")
const userSelectionParagraph = document.createElement("p");
userSelectionParagraph.classList.add("all-paragraphs")
const tieMessageParagraph = document.createElement("p");
tieMessageParagraph.classList.add("all-paragraphs", "tie-win-lose")
const loseMessageParagraph = document.createElement("p");
loseMessageParagraph.classList.add("all-paragraphs", "tie-win-lose")
const winMessageParagraph = document.createElement("p");
winMessageParagraph.classList.add("all-paragraphs", "tie-win-lose")
const winGameMessageParagraph = document.createElement("p");
winGameMessageParagraph.classList.add("all-paragraphs")
const loseGameMessageParagraph = document.createElement("p");
loseGameMessageParagraph.classList.add("all-paragraphs")
const userScoreMessageParagraph = document.createElement("p");
userScoreMessageParagraph.classList.add("all-paragraphs")
const computerScoreMessageParagraph = document.createElement("p");
computerScoreMessageParagraph.classList.add("all-paragraphs")

const tieMessage = "This is a tie!";
const loseMessage = "You lose!";
const winMessage = "You win!";

const winGameMessage = "You won the game!"
const loseGameMessage = "Game Over! You lost the game."

// Defining a random computer selection

const computer = "Computer's choice: ";

const getComputerSelection = () => {
    const selectionArray = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3)
    computerSelection = selectionArray[randomIndex];
    computerSelectionParagraph.textContent = `Computer's selection: ${computerSelection}`;
    playersDiv.append(computerSelectionParagraph)
}

// Getting the input from the live player

rockButton.addEventListener("click", (event) => {
    event.preventDefault();
    gameDiv.innerHTML = "";
    playersDiv.innerHTML = "";
    scoresDiv.innerHTML = "";
    userSelection = "Rock";
    userSelectionParagraph.textContent = `Your choice: ${userSelection}`;
    gameDiv.append(playersDiv);
    gameDiv.append(scoresDiv);
    playersDiv.append(userSelectionParagraph);
    getComputerSelection()
    if (userSelection === computerSelection) {
        tieMessageParagraph.textContent = tieMessage;
        scoresDiv.append(tieMessageParagraph)
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
    } else if (computerSelection === "Paper") {
        loseMessageParagraph.textContent = loseMessage;
        scoresDiv.append(loseMessageParagraph)
        computerScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    } else if (computerSelection === "Scissor") {
        winMessageParagraph.textContent = winMessage;
        scoresDiv.append(winMessageParagraph)
        userScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    }
})

paperButton.addEventListener("click", (event) => {
    event.preventDefault();
    gameDiv.innerHTML = "";
    playersDiv.innerHTML = "";
    scoresDiv.innerHTML = "";
    userSelection = "Paper";
    userSelectionParagraph.textContent = `Your choice: ${userSelection}`;
    gameDiv.append(playersDiv);
    gameDiv.append(scoresDiv);
    playersDiv.append(userSelectionParagraph);
    getComputerSelection();
    if (userSelection === computerSelection) {
        tieMessageParagraph.textContent = tieMessage;
        scoresDiv.append(tieMessageParagraph)
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
    } else if (computerSelection === "Scissor") {
        loseMessageParagraph.textContent = loseMessage;
        scoresDiv.append(loseMessageParagraph)
        computerScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    } else if (computerSelection === "Rock") {
        winMessageParagraph.textContent = winMessage;
        scoresDiv.append(winMessageParagraph)
        userScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    }
})

scissorButton.addEventListener("click", (event) => {
    event.preventDefault();
    gameDiv.innerHTML = "";
    playersDiv.innerHTML = "";
    scoresDiv.innerHTML = "";
    userSelection = "Scissor";
    userSelectionParagraph.textContent = `Your choice: ${userSelection}`;
    gameDiv.append(playersDiv);
    gameDiv.append(scoresDiv);
    playersDiv.append(userSelectionParagraph);
    getComputerSelection();
    if (userSelection === computerSelection) {
        tieMessageParagraph.textContent = tieMessage;
        scoresDiv.append(tieMessageParagraph)
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
    } else if (computerSelection === "Rock") {
        loseMessageParagraph.textContent = loseMessage;
        scoresDiv.append(loseMessageParagraph)
        computerScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    } else if (computerSelection === "Paper") {
        winMessageParagraph.textContent = winMessage;
        scoresDiv.append(winMessageParagraph)
        userScore++;
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        endGame();
    }
})

// Defining function to end the game whenever one of the two players reaches 5 points

const endGame = () => {
    if (userScore === 5) {
        playersDiv.innerHTML = "";
        tieMessageParagraph.classList.add("hide")
        winMessageParagraph.classList.add("hide")
        loseMessageParagraph.classList.add("hide")
        winGameMessageParagraph.textContent = winGameMessage;
        scoresDiv.append(winGameMessageParagraph);
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        playersDiv.innerHTML = "";
        tieMessageParagraph.classList.add("hide")
        winMessageParagraph.classList.add("hide")
        loseMessageParagraph.classList.add("hide")
        loseGameMessageParagraph.textContent = loseGameMessage;
        scoresDiv.append(loseGameMessageParagraph)
        userScoreMessageParagraph.textContent = `Your score is ${userScore}`;
        scoresDiv.append(userScoreMessageParagraph);
        computerScoreMessageParagraph.textContent = `The computer's score is ${computerScore}`;
        scoresDiv.append(computerScoreMessageParagraph);
        userScore = 0;
        computerScore = 0;
    }
}

// Defining a function to start the game again once the game is over

const restartGame = () => {
    
}