let morseCodeDict = {
   'A': '.-', 'B': '-...', 'C': '-.-.',
    'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-',
    'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
};

let currentWord;
let correctAnswer;
let attempts = 0;
let startTime = new Date();

function getRandomWord() {
    let letters = Object.keys(morseCodeDict);
    let wordLength = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    currentWord = Array.from({length: wordLength}, () => letters[Math.floor(Math.random() * letters.length)]).join('');
    return currentWord;
}

function getMorseCode(word) {
    return word.split('').map(letter => morseCodeDict[letter]).join(' ');
}

function showMorseDictionary() {
    let morseDictContent = document.getElementById('morseDictContent');
    morseDictContent.innerHTML = Object.entries(morseCodeDict).map(([letter, code]) => `<p>${letter}: ${code}</p>`).join('');
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('morseDict').style.display = 'block';
}

function beginTraining() {
    document.getElementById('morseDict').style.display = 'none';
    document.getElementById('training').style.display = 'block';
    showNewWord();
}

function showNewWord() {
    let entry = document.getElementById('entry');
    entry.value = '';
    getRandomWord();
    document.getElementById('wordLabel').innerText = 'Word: ' + currentWord;
    correctAnswer = getMorseCode(currentWord);
    document.getElementById('resultLabel').innerText = '';
}

function checkAnswer() {
    let entry = document.getElementById('entry');
    let userInput = entry.value.toUpperCase();
    if (userInput === 'EXIT') {
        exitTraining();
        return;
    }

    if (userInput === correctAnswer) {
        let endTime = new Date(); 
        let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
        document.getElementById('resultLabel').innerText = `Congratulations! Your answer is correct. Time taken: ${timeTaken} seconds.`;
        document.getElementById('resultLabel').style.color = 'green';
    } else {
        attempts++;
        if (attempts === 1) {
            document.getElementById('resultLabel').innerText = 'Oops...!!! You Entered The Wrong Answer.';
        } else if (attempts === 2) {
            document.getElementById('resultLabel').innerText = 'Oops...!!! Again You Entered The Wrong Answer.';
        } else if (attempts >= 3) {
            document.getElementById('resultLabel').innerText = `Incorrect. The Correct Morse Code is: ${correctAnswer}`;
            attempts = 0;
        }
        document.getElementById('resultLabel').style.color = 'red';
    }
}

function showHint() {
    let hintContent = Object.entries(morseCodeDict).map(([letter, code]) => `${letter}: ${code}`).join('<br>');
    let hintWindow = window.open('', '_blank', 'width=400,height=300');
    hintWindow.document.write(`<h2>Morse Code Hint</h2><p>${hintContent}</p>`);
}

function exitTraining() {
    window.close(); 

    if (window.opener && !window.opener.closed) {
        window.opener.close();
    }
}
