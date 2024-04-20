let guessField = document.querySelector('.guessField');
const submitButton = document.querySelector('#subt');
let prvGuess = document.querySelector('.guesses')
let guessRem = document.querySelector('.lastResult')  
const lowOrHigh = document.querySelector('.lowOrHigh');
const resultPassing = document.querySelector('.resultPassing')

const p = document.createElement('p')

// To start the game
let playGame = true;

// store the remaining guesses
let guessRemaining = 10;

// Random Number Generator
let randNum = Math.round(Math.random()*100 + 1);
// console.log(randNum);

// Driver Code
if (playGame === true){    
    submitButton.addEventListener('click', (e)=>{
        const guess = parseInt(guessField.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // Check if the entered value is a number or not
    if (guess < 1){
        alert('Enter a number greater than 1');
    }
    else if (guess > 100){
        alert('Enter a number less than 100');
    }
    else if (isNaN(guess)){
        alert('Enter a number');
    }
    else{
        if(guessRemaining === 0){
            displayGuess(guess);
            displayMessage(`Game Over!!! Random number was ${randNum}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
        
    }
}

function checkGuess(guess) {
    // check if the guess is equal to generated value
    if (guess < randNum){
        displayMessage('Guess Higher!!')
    }
    else if (guess > randNum){
        displayMessage('Guess Lower!!')
    }
    else{
        displayMessage('You are right!!');
        endGame();
    }
    
}

function displayGuess(guess) {
    // Update the Previous Guess and Guesses Remaining
    guessField.value=''
    prvGuess.innerHTML += `${guess}; `;
    guessRemaining--;
    guessRem.innerHTML = guessRemaining;

}

function displayMessage(message) {
    // Update the lowOrHigh
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    // Disable the input field and show the generated number
    guessField.value = ''
    guessField.setAttribute('disabled', '')
    
    p.innerHTML = `<h2 class='newGame'>Start Over</h2>`
    resultPassing.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    // Reset the input field, previous guess and remaining guess 
    const nGame = document.querySelector('.newGame')
    nGame.addEventListener('click', (e)=>{
        prvGuess.innerHTML = [];
        guessRem.innerHTML = 10;
        guessRemaining =10;
        guessField.removeAttribute('disabled');
        displayMessage('New Game!!')
        resultPassing.removeChild(p);
        randNum = Math.round(Math.random()*100 + 1);
        // console.log(randNum);
        playGame = true;
    })
}