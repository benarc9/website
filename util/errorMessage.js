class ErrorContent {
    constructor (label, value) {
        this.label = label;
        this.value = value;
    }

    getLabel () { return this.label || 'Empty Label';}

    getValue () { return this.value || 'Empty Value';}
}

class ErrorMessage {
    constructor (contents){
        this.contents = contents;
    }

    getContents() {return this.contents || 'Content Empty';}
}

module.exports = ErrorMessage, ErrorContent;