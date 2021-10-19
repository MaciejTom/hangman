export class Quote {
    constructor(text) {
        this.text = text;
        this.guessed = [];
    }
    changeLettersOnFloor() {
  
        let content = "";
        for (const char of this.text) {
            
            // if (char !== " ") {
            //     content += "_";
            // } else if (char == " ") {
            //     content += " ";
            // }

            if (char == " " || this.guessed.includes(char)) {
                content += char;
            } else {
                content += "_";
            }
        }
       
        return content;
    }

    guess(letter) {
        if (!this.text.includes(letter)) {
            return false;
        } 
        this.guessed.push(letter)
       
        console.log(letter)
        return true

    }
}