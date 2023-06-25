function revealWords(firstInput, secondInput) {
    let firstArray = firstInput.split(', ');
    let secondArray = secondInput.split(' ');

    for (i = 0; i < firstArray.length; i++) {
        let currentElementFirstArr = firstArray[i];
        for (j = 0; j < secondArray.length; j++) {
            let currentElementSecondArr = secondArray[j];

            if (currentElementSecondArr.includes('*') && (currentElementFirstArr.length == currentElementSecondArr.length)) {
                secondArray.splice(j, 1, currentElementFirstArr);
            }
        }
    }

    return secondArray.join(' ');
}



