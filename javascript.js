const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result')
const gameResult = document.querySelector('.game-result')
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
let playerScore = 0;
let compuerScore = 0;

function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function outputString(result, my_choice, computer_choice) {
    if (result == 'draw') {
        return `Draw! Both chose ${my_choice}`;
    } else if (result == 'win') {
        return `You Won! ${my_choice} beats ${computer_choice}`;
    } else {
        return `You Lose! ${computer_choice} beats ${my_choice}`;
    }
}

playRound = (playerSelection, computerSelection) => {
    computerSelection = computerSelection || computerPlay()
    if (playerSelection == computerSelection) {
        return ['draw', outputString('draw', playerSelection, computerSelection)];
    }
    switch ([playerSelection, computerSelection].join('-')) {
        case 'Rock-Scissors':
            return ['win', outputString('win', playerSelection, computerSelection)];
        case 'Scissors-Paper':
            return ['win', outputString('win', playerSelection, computerSelection)];
        case 'Paper-Rock':
            return ['win', outputString('win', playerSelection, computerSelection)];
        default:
            return ['lose', outputString('lose', playerSelection, computerSelection)];
    }
};

function updateScore() {
    playerScoreElement.textContent = 'Player: ' + playerScore
    computerScoreElement.textContent = 'Computer: ' + compuerScore
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let [result, comment] = playRound(button.dataset.choice);
        roundResult.textContent = comment;
        if (gameResult.textContent) {
            gameResult.textContent = ''
            playerScore = 0;
            compuerScore = 0;
        }
        if (result === "win") {
            if (++playerScore == 5) {
                gameResult.textContent = 'YOU WON!'
            }
        } else if (result == "lose") {
            if (++compuerScore == 5){
                gameResult.textContent = 'YOU LOSE!'
            }

        }
        updateScore()
    })
})
