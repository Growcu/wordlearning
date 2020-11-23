// Dane 

let englishWords = [];
let polishWords = [];
let numberOfWords = null;
let inputWord = "";


const askedWord = document.querySelector("[data-holder='asked-word']");
const input = document.querySelector("[data-holder='answer-input']");
const correctAnswer = document.querySelector("[data-holder='correct-answer-place']");
const times = document.querySelector("[data-holder='times']")
const check = document.querySelector("[data-holder='check']")
const popUp = document.querySelector("[data-holder='pop-up']")
const popUpButton = document.querySelector("[data-holder='pop-up-button']")
const popUpText = document.querySelector("[data-holder='pop-up-text']")

const cleaner = function () {
    inputWord = ""
    correctAnswer.textContent = "";
    input.value = "";
    times.classList.remove("fa-times--show")
    check.classList.remove("fa-check--show")
}
const writeToInput = function () {
    input.value = inputWord;
}
const nextGame = function () {
    if(!polishWords.length) return showPopup("Proszę wybrać dział");
    numberOfWords = Math.floor(Math.random() * polishWords.length);
    askedWord.textContent = polishWords[numberOfWords];
}
const showPopup = (content) => {
    popUp.classList.add("--show");
    popUpText.textContent = content;
    popUpButton.addEventListener("click", popUpHide = () => {
        popUp.classList.remove("--show");
    })
}
const removeGoodWord = function() {
    polishWords.splice(numberOfWords, 1);
    englishWords.splice(numberOfWords, 1);
}
const checkWord = function () {

    const wordTocheck = englishWords[numberOfWords];
    const inputWord = input.value.toLowerCase();


    if (!wordTocheck) return showPopup("Proszę wylosować słowo");

    if (inputWord === "") return showPopup("Proszę podać słowo");

    else {
        if (wordTocheck === inputWord) {
            check.classList.add("fa-check--show")
            removeGoodWord()
        } else {
            times.classList.add("fa-times--show")
            correctAnswer.textContent = wordTocheck;
        }
        setTimeout(cleaner, 3000);
        setTimeout(nextGame, 3000);
    }
}

input.addEventListener("keyup", numersLock = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 32 || e.keyCode === 189 || e.keyCode === 191 || e.keyCode === 222) {
        inputWord += e.key;
        return writeToInput();
    } else if (e.keyCode >= 48 && e.keyCode <= 57) {
        return writeToInput();
    } else if (e.keyCode === 8) {
        inputWord = inputWord.slice(0, inputWord.length - 1);
        return writeToInput();
    } else {
        return writeToInput();
    }
})
window.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) return checkWord();
})
document.querySelector("[data-holder='random']").addEventListener("click", nextGame);
document.querySelector("[data-holder='check-word']").addEventListener("click", checkWord);