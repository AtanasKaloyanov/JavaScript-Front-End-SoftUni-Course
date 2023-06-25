function findingSubstring(word, text) {

    let wordToLowerCase = word.toLowerCase();
    text = text.toLowerCase();

    let array = text.split(' ');

    let output;
    if (array.includes(wordToLowerCase)) {
        output = word;
    } else {
        output = `${word} not found!`
    }

    console.log(output);
}

