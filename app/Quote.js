export class Quote {
    constructor(text) {
        this.text = text;
    }
    changeLettersOnFloor() {
        let content = "";
        for (const char of this.text) {
            
            if (char !== " ") {
                content += "_";
            } else if (char == " ") {
                content += " ";
            }
        }
       
        return content;
    }
}