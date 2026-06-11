'use strict'
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function startGameGuessNumber() {
    const chosenNumber = parseInt(Math.random() * 100);

    return function getHint() {
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
            case userNumber === null:
                alert("Game is over");
                break;
            case +userNumber === chosenNumber:
                alert("You win!");
                break;
            case +userNumber > chosenNumber:
                alert("Chosen number is less then yours. Try again");
                getHint();
                break;
            case +userNumber < chosenNumber:
                alert("Chosen number is greater then yours. Try again");
                getHint();
                break;
            default:
                alert("Game is over");
        }

    }
}

let guessNumber = startGameGuessNumber();
guessNumber();





