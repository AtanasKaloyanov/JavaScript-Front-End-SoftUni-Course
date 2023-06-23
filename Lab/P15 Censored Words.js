function replacingWithStars(text, repeatedWord) {
    let newWord = '';

    for (i = 0; i < repeatedWord.length; i++) {
        newWord += '*'
    }

    while (text.includes(repeatedWord)) {
        text = text.replace(repeatedWord, newWord);
    }

    console.log(text);
}



