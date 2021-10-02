//Dice Generator
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

/* -------------------------------------------------------------- */

//Player 1

// Dice

var playerOneDice = document.querySelector(".img1");

if (randomNumber1 === 1) {
    playerOneDice.setAttribute("src", "images/dice1.png")
} else if (randomNumber1 === 2) {
    playerOneDice.setAttribute("src", "images/dice2.png")
} else if (randomNumber1 === 3) {
    playerOneDice.setAttribute("src", "images/dice3.png")
} else if (randomNumber1 === 4) {
    playerOneDice.setAttribute("src", "images/dice4.png")
} else if (randomNumber1 === 5) {
    playerOneDice.setAttribute("src", "images/dice5.png")
} else if (randomNumber1 === 6) {
    playerOneDice.setAttribute("src", "images/dice6.png")
}

// Win 

var playerOneWin = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    playerOneWin.textContent = "Player 1 wins";
    document.querySelector(".titleOne").textContent = "🚩 Player 1";
}


/* -------------------------------------------------------------- */


//Player 2

//Dice

var playerTwoDice = document.querySelector(".img2");

if (randomNumber2 === 1) {
    playerTwoDice.setAttribute("src", "images/dice1.png")
} else if (randomNumber2 === 2) {
    playerTwoDice.setAttribute("src", "images/dice2.png")
} else if (randomNumber2 === 3) {
    playerTwoDice.setAttribute("src", "images/dice3.png")
} else if (randomNumber2 === 4) {
    playerTwoDice.setAttribute("src", "images/dice4.png")
} else if (randomNumber2 === 5) {
    playerTwoDice.setAttribute("src", "images/dice5.png")
} else if (randomNumber2 === 6) {
    playerTwoDice.setAttribute("src", "images/dice6.png")
}

//Win

var playerTwoWin = document.querySelector("h1");

if (randomNumber2 > randomNumber1) {
    playerTwoWin.textContent = "Player 2 wins";
    document.querySelector(".titleTwo").textContent = "🚩 Player 2";
}

/* -------------------------------------------------------------- */

//Draw 

if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").textContent = "Draw!";
}