function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
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

function sanitize_input(selection) {
    const valid = ['rock', 'paper', 'scissors'];
    if (valid.includes(selection.toLowerCase())) {
        return selection.toLowerCase();
    } else {
        return null;
    }
}

playRound = (playerSelection, computerSelection) => {
    player_input = sanitize_input(playerSelection);
    computer_input = sanitize_input(computerSelection);
    if ([player_input, computer_input].includes(null)) {
        return 'Invalid input!';
    }
    if (player_input == computer_input) {
        return outputString('draw', playerSelection, computerSelection);
    }
    switch ([player_input, computer_input].join('-')) {
        case 'rock-scissors':
            return outputString('win', playerSelection, computerSelection);
        case 'scissors-paper':
            return outputString('win', playerSelection, computerSelection);
        case 'paper-rock':
            return outputString('win', playerSelection, computerSelection);
        default:
            return outputString('lose', playerSelection, computerSelection);
    }
};

game = () => {
    playerScore = 0;
    computerScore = 0;
    for (i = 0; i < 5; i++) {
        input = prompt('Rock, Paper, Scissors?', '');
        result = playRound(input, computerPlay());
        if (result.includes('Invalid')) {
            console.log('Invalid Input! Enter Again');
            i--;
            continue;
        } else if (result.includes('Won')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        } else {
            i--;
            console.log(result);
            continue;
        }
        console.log(`Round ${i + 1}:\nYou: ${playerScore} \nComputer: ${computerScore}`);
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log('You WON!');
    } else if (playerScore < computerScore) {
        console.log('You LOSE!');
    } else {
        console.log('DRAW!');
    }
    console.log(`FINAL SCORE: (${playerScore} : ${computerScore})`);
};