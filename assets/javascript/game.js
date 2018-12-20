// start with 9 guesses, -1 with every key pressed
var guesses = 9;
function guessCount() {
    document.getElementById('demo4').innerHTML = guesses;
}

window.onload = guessCount;

function minusGuess() {
    document.getElementById('demo4').innerHTML = guesses--;
}



// if player pressed key matches computer's random key, +1document.getElementById("demo4").innerHTML = guesses; win
var wins = 1;
// if player doesn't match key within 9 guesses, +1 loss
var losses = 1;
// "guesses" resets back to 9

// array of possible key choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer picks random letter and assigns variable
var rand = letters[(Math.random() * letters.length) | 0]
console.log(rand);

function resetRandom() {
    rand = letters[(Math.random() * letters.length) | 0]
}


// log which keys have been guessed so far
var alreadyGuessed = [];

// player presses any key, which is compared to the computer's key choice
document.onkeyup = function (event) {
    var playerLetter = event.key.toLowerCase();
    alreadyGuessed.push(playerLetter);
    minusGuess();
    console.log(playerLetter);
    showArray();
    if (playerLetter === rand) {
        winCount = function () {
            document.getElementById("demo2").innerHTML = wins++;
        }
        winCount();
        alreadyGuessed.length = 0;
        guesses--;
        console.log("worked!");
    } if (alreadyGuessed.length >= 9) {
        lossCount = function () {
            document.getElementById("demo3").innerHTML = losses++;
        }
        lossCount();
        alreadyGuessed.length = 0;
    } if (guesses < 1 || playerLetter === rand) {
        guesses = 9;
        resetRandom();
    }

};



showArray = function () {
    document.getElementById("demo1").innerHTML = alreadyGuessed;
}



