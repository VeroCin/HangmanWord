const word = ['January', 'February', 'March','Spanzuratoare', 'maria', 'ion'];
const oneWord = word[Math.floor(Math.random() * word.length)].toLowerCase();
let lives = 7;
let guessedWord = Array(oneWord.length).fill('_');

function updateDisplay() {
    document.getElementById('wordDisplay').innerText = guessedWord.join(' ');
}

function isValidLetter(input) {
    return input.length === 1 && ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z'));
}

function checkLetter() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    document.getElementById('guessInput').value = "";
    if (isValidLetter(input)) {
        verifyLetter(input);
        checkGameState();
    }
}

function verifyLetter(input) {
    if (oneWord.includes(input)) {
        let found = false;
        for (let i = 0; i < oneWord.length; ++i) {
            if (oneWord[i] === input && guessedWord[i] === '_') {
                guessedWord[i] = input;
                found = true;
            }
        }
        document.getElementById('gameResult').innerText = found ? "Letter found!" : "";
    } else {
        --lives;
        document.getElementById('gameResult').innerText = `Lives left: ${lives} "${input}" is incorrect.`;
    }
    updateDisplay();
}

function checkGameState() {
    if (lives === 0) {
        document.getElementById('gameResult').innerText = `Game over! The word was: "${oneWord}"`;
        document.getElementById('guessInput').disabled = true;
    } else if (!guessedWord.includes('_')) {
        document.getElementById('gameResult').innerText = "You win!";
        document.getElementById('guessInput').disabled = true;
    }
}

updateDisplay();
