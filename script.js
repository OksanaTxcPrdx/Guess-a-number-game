'use strict'
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


function resetGame(game) {
    let option = confirm("Do you want play again?");
    if (option) {
        let newGame =  game();
        newGame();
    }
}



function startGameGuessNumber() {
    const chosenNumber = parseInt(Math.random() * 100);
    let attemptscounter = 10;

    return function getHint() {
        if (attemptscounter === 0 ) {
            resetGame(startGameGuessNumber);
        }
        let userNumber = prompt("Enter a number from 1 to 100:");
        if (userNumber === null) {
            alert("Game is over");
            return;
        }
        switch (true) {
            case !isNumber(userNumber):
                alert("It is not a number! Try again!");
                getHint();
                break;
            case +userNumber === chosenNumber:
                alert("You win!");
                resetGame(startGameGuessNumber);
                break;
            case +userNumber > chosenNumber:
                attemptscounter--;
                alert(`Chosen number is less then yours.${attemptscounter} attempts left. Try again`);
                getHint();
                break;
            case +userNumber < chosenNumber:
                attemptscounter--;
                alert(`Chosen number is greater then yours.${attemptscounter} attempts left. Try again`);
                getHint();
                break;
            default:
                alert("Game is over");
        }

    }
}

let guessNumber = startGameGuessNumber();
guessNumber();





