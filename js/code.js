// Dane 

const englishWords = ["be fond of sb", "confide in sb", "date sb", "deal with sb", "easy to get on with", "feel sick to death of sb", "have a lot of common", "know sb by sight", "love at first sight", "relate to sb", "stay in touch with sb", "take care of sb", "take sb for granted"];
const polishWords = ["lubić kogoś", "zwierzać sie komuś", "chodzić z kimś", "radzić sobie z kimś", "taki z którym można sie dogadać", "mieć kogoś serdecznie dosyć", "mieć wiele wspólnego", "znać kogoś z widzenia", "zakochać sie od pierwszego wejrzenia", "znaleźć z kimś wspólny język", "utrzymać z kimś kontakt", "zajmować sie kimś", "nie doceniać kogoś"];
let numberOfWords = null;

// Elementy strony
// Miejsce na pytane wyrażenie
const askedWord = document.querySelector("[data-holder='asked-word']");
// Pole tekstowe
const input = document.querySelector("[data-holder='answer-input']");
// Pole poprawnej odpowiedzi
const correctAnswer = document.querySelector("[data-holder='correct-answer-place']");
// Ikony
const times = document.querySelector("[data-holder='times']")
const check = document.querySelector("[data-holder='check']")

// Losowanie słowa i resetownie pól

const randomWord = function () {

    correctAnswer.textContent = "";
    input.value = "";
    times.classList.remove("fa-times--show")
    check.classList.remove("fa-check--show")
    numberOfWords = Math.floor(Math.random() * polishWords.length);
    askedWord.textContent = polishWords[numberOfWords];

}

// Funkcja sprawdzająca poprawność

const checkWord = function () {

    const wordTocheck = englishWords[numberOfWords];
    const inputWord = input.value;

    // Zabezpiecznia
    if (!wordTocheck) return alert("Prosze wylosawać słowo");

    if (inputWord === "") {
        return alert("Proszę podać słowo");
    } else if (isNaN(Number(inputWord))) {
        if (wordTocheck === inputWord) {
            check.classList.add("fa-check--show")
        } else {
            times.classList.add("fa-times--show")
            correctAnswer.textContent = wordTocheck;
        }
        setTimeout(randomWord, 3000);
    } else {

        return alert("Podana wartość nie jest słowem");
    }

}
document.querySelector("[data-holder='random']").addEventListener("click", randomWord);
document.querySelector("[data-holder='check-word']").addEventListener("click", checkWord);