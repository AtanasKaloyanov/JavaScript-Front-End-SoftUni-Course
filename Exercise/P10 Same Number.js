function sameNumber(number) {
    let stringArray = number.toString().split('');

    let numberArray = stringArray.map((currentElement) => {
        return Number.parseInt(currentElement);
    })

    let flag = true;
    let firstElement = numberArray[0];
    let sum = 0;

    numberArray.forEach((currentElement) => {
        if (currentElement != firstElement) {
            flag = false;
        }

        sum += currentElement
    })

    console.log(flag);
    console.log(sum);
}

