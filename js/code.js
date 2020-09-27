// Dane 

const englishWords = ["be fond of sb", "confide in sb", "date sb", "deal with sb", "easy to get on with", "feel sick to death of sb", "have a lot of common", "know sb by sight", "love at first sight", "relate to sb", "stay in touch with sb", "take care of sb", "take sb for granted"];
const polishWords = ["lubić kogoś", "zwierzać sie komuś", "chodzić z kimś", "radzić sobie z kimś", "taki z którym można sie dogadać", "mieć kogoś serdecznie dosyć", "mieć wiele wspólnego", "znać kogoś z widzenia", "zakochać sie od pierwszego wejrzenia", "znaleźć z kimś wspólny język", "utrzymać z kimś kontakt", "zajmować sie kimś", "nie doceniać kogoś"];
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
const checkWord = function () {

    const wordTocheck = englishWords[numberOfWords];
    const inputWord = input.value.toLowerCase();

    if (!wordTocheck) return showPopup("Proszę wylosować słowo");

    if (inputWord === "") return showPopup("Proszę podać słowo");

    else {
        if (wordTocheck === inputWord) {
            check.classList.add("fa-check--show")
        } else {
            times.classList.add("fa-times--show")
            correctAnswer.textContent = wordTocheck;
        }
        setTimeout(cleaner, 3000);
        setTimeout(nextGame, 3000);
    }
}

input.addEventListener("keyup", numersLock = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 32) {
        inputWord += e.key;
        console.log(inputWord);
        return writeToInput();
    } else if (e.keyCode >= 48 && e.keyCode <= 57) {
        return writeToInput();
    } else if (e.keyCode === 8) {
        inputWord = inputWord.slice(0, inputWord.length - 1);
        return writeToInput();
    }
    console.log(e.keyCode);
})

document.querySelector("[data-holder='random']").addEventListener("click", nextGame);
document.querySelector("[data-holder='check-word']").addEventListener("click", checkWord);