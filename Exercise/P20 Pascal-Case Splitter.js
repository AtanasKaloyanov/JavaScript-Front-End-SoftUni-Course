function pascalCaseSplitter(input) {

    let array = input.split('');

    for (i = 1; i < array.length; i++) {
        let currentElement = array[i];

        if (currentElement.charCodeAt() >= 65 && currentElement.charCodeAt() <= 90) {
            array.splice(i, 0, ' ');
            i++;
        }
    }

    let allCharsInString = '';

    for (i = 0; i < array.length; i++) {
        allCharsInString += array[i];
    }

    let finalArray = allCharsInString.split(' ');
    console.log(finalArray.join(", "));
}

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
