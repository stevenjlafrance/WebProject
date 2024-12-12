// Random number to guess
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the guess
function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Get the result message element
    const resultMessage = document.getElementById('resultMessage');

    // Validate the guess
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    // Check the guess
    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the number!';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low. Try again!';
    } else {
        resultMessage.textContent = 'Too high. Try again!';
    }
}

// Optional reset function
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessInput').value = '';
}