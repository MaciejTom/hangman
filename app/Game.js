import { Quote } from "./Quote.js";


export class Game {
    currentStep = 0
    lastStep = 7;
    quotes = [{
        text: 'pan tadeusz',
        category: "Utwór literacki"
    },
    {
        text: "akademia pana kleksa",
        category: "Utwór literacki"
    },
    {
        text: "siala baba mak",
        category: "Powiedzenie"
    }]

    constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {

        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text)


    }
    drawLetters() {
        for (let i = 10; i < 36; i++) {

            const label = i.toString(36);
            const button = document.createElement('button');
            button.textContent = label;
            this.lettersWrapper.appendChild(button);
            button.addEventListener("click", (event) => this.guess(label, event));
        }
    }
    drawQuote() {
        const content = this.quote.changeLettersOnFloor();
        this.wordWrapper.innerHTML = content;
        if (!content.includes("_")) {
            this.winning();
        }
    }
    guess(letter, event) {
        this.quote.guess(letter)
        if (this.quote.guess(letter)) {
            this.drawQuote()
            event.target.disabled = true;
        } else {
            this.currentStep++;
            document.querySelectorAll(".step")[this.currentStep].style.opacity = "1";
            if (this.currentStep == this.lastStep) {
                this.loosing()
            }
           


        }


    }
    winning() {
        this.wordWrapper.innerHTML = `GRATULACJE! WYGRYWASZ GRE!`;
        this.lettersWrapper.innerHTML = ``;
        this.categoryWrapper.innerHTML = ``;
    }
    loosing() {
        this.wordWrapper.innerHTML = `PRZEGRYWASZ! NIESTETY!`;
        this.lettersWrapper.innerHTML = ``;
        this.categoryWrapper.innerHTML = ``;
    }

    start() {

        document.querySelectorAll(".step")[this.currentStep].style.opacity = "1"
        this.drawLetters()
        const content = this.quote.changeLettersOnFloor()
        this.wordWrapper.innerHTML = content
        this.drawQuote()
    }
}


const game = new Game({
    lettersWrapper: document.querySelector("#letters"),
    categoryWrapper: document.querySelector("#category"),
    wordWrapper: document.querySelector("#word"),
    outputWrapper: document.querySelector("#output")
})

game.start();
