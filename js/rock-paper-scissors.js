
const computerScoreContainer = document.querySelector('#computerScore');
const playerScoreContainer = document.querySelector('#playerScore');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    if (button.id == "resetScores") {
        button.addEventListener('click', () => resetScores());
    } else {
        button.addEventListener('click', () => {
            playRound(button.value, computerPlay());
        })
    }
})

function resetScores() {
    computerScoreContainer.textContent = 0;
    playerScoreContainer.textContent = 0;
}

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (evaluateRound(playerSelection, computerSelection)) {
        case 0:
            alert(`You've tied! You both picked ${playerSelection}`);
            break;
        case 1: 
            alert(`You win! ${playerSelection} beats ${computerSelection}`);

            playerScoreContainer.textContent = +playerScoreContainer.textContent + 1;
            break;
        case 2:
            alert(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScoreContainer.textContent = +computerScoreContainer.textContent + 1;
    }
}


function evaluateRound(playerSelection, computerSelection) {

      // Converts any input to uppercase first letter, lowercase remaining letters
      playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

      let result;

      switch (playerSelection) {
        case computerSelection:
            return 0;
        case "Rock":
            if (computerSelection == "Scissors") {
                return 1;
            } else {
                return 2;
            }
        case "Scissors":
            if (computerSelection == "Paper") {
                return 1;
            } else {
                return 2;
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return 1;
            } else {
                return 2;
            }
        default:
            return -1;
      }
}

/* Deprecated function that ran without buttons or HTML

function game() {
        
    // Plays 5 rounds of Rock-Paper-Scissors against a computer

    let playerScore = computerScore = 0;
    let roundCount = 0;
    let result;
    for ( ; roundCount < 5; roundCount++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        
        result = playRound(playerSelection, computerSelection)

        switch (result) {
            case (0):
                console.log(`You've tied! You both picked ${playerSelection}`);
                break;
            case (1):
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            case (2):
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
            case (-1):
                console.log(`Invalid input ${playerSelection} detected. Please enter 'Rock', 'Paper', or 'Scissors'`);
                break;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win! You: ${playerScore}, Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose! Computer: ${computerScore}, You: ${playerScore}`);
    } else {
        console.log(`Tie game! Computer: ${computerScore}, You: ${playerScore}`);
    }
}

*/