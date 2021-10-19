import { Quote } from "./Quote.js";

export class Game {
    
    quotes = [{
        text: 'pan tadeusz',
        category: "Utwór literacki"
    },
    {
        text: "akademia pana kleksa",
        category: "Utwór literacki"
    },
    {
        text: "Siala baba mak",
        category: "Powiedzenie"
    }]

    constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {

        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text)
        
       
    }
    drawLetters() {
        for (let i = 10; i < 36; i++) {

            const label = i.toString(36);
            const button = document.createElement('button');
            button.textContent = label;
            this.lettersWrapper.appendChild(button);
            button.addEventListener("click", () => this.guess(label))
        }
    }
    drawQuote() {
        const content = this.quote.changeLettersOnFloor()
        this.wordWrapper.innerHTML = content
    }
    guess(letter) {
        this.quote.guess(letter)
        this.drawQuote()
    }

    start() {
        
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
console.log(game)
game.start();
