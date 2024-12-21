const word = "spanzuratoare".toLowerCase();
let lives = 7;  // Number of lives
let guessedWord = Array(word.length).fill('_');

function updateDisplay() {
    document.getElementById('wordDisplay').innerText = guessedWord.join(' ');
}

function checkLetter() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    document.getElementById('guessInput').value = "";

    if (input && input.length === 1 && /^[a-z]$/.test(input)) {
        if (word.includes(input)) {
            let found = false;
            // Loop through the word and reveal the letter
            for (let i = 0; i < word.length; i++) {
                if (word[i] === input && guessedWord[i] === '_') {
                    guessedWord[i] = input; 
                    found = true;
                }
            }
            if (found) {
                document.getElementById('gameResult').innerText = "Letter found!";
            }
        } else {
            --lives;
            document.getElementById('gameResult').innerText = `Lives left: ${lives}. "${input}" is incorrect.`;
        }

        updateDisplay();

        if (lives === 0) {
            document.getElementById('gameResult').innerText = `Game over! The word was: "${word}"`;
            document.getElementById('guessInput').disabled = true;
        } else if (!guessedWord.includes('_')) {
            document.getElementById('gameResult').innerText = "win!";
            document.getElementById('guessInput').disabled = true;
        }
    }
}

updateDisplay();