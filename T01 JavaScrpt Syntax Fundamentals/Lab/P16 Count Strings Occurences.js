function occurencesCounter(text, word) {
    let counter = 0;

    let array = text.split(' ');
    
    for (i = 0; i < array.length; i++) {
        let currenElement = array[i];
        
        if (currenElement == word) {
            counter++;
        }
    }

    console.log(counter);
}

