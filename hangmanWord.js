const word = "spanzuratoare".toLowerCase();
let lives = 7;
let guessedWord = Array(word.length).fill('_');

function updateDisplay() {
    document.getElementById('wordDisplay').innerText = guessedWord.join(' ');
}

function checkLetter() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    document.getElementById('guessInput').value = "";

    if (input && input.length === 1 && /^[a-z]$/.test(input)) {
        verifyLetter(input);
        checkGameState();
    }
}

function verifyLetter(input) {
    if (word.includes(input)) {
        let found = false;
        for (let i = 0; i < word.length; ++i) {
            if (word[i] === input && guessedWord[i] === '_') {
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
        document.getElementById('gameResult').innerText = `Game over! The word was: "${word}"`;
        document.getElementById('guessInput').disabled = true;
    } else if (!guessedWord.includes('_')) {
        document.getElementById('gameResult').innerText = "You win!";
        document.getElementById('guessInput').disabled = true;
    }
}

updateDisplay();
