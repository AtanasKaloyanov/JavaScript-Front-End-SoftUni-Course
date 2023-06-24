function sameNumber(number) {
    let stringArray = number.toString().split('');

    let numberArray = stringArray.map((currentElement) => {
        return Number.parseInt(currentElement);
    })

    let flag = true;
    let firstElement = numberArray[0];

    numberArray.forEach( (currentElement) => {
          if (currentElement != firstElement) {
            flag = false;
            return
          }
    })

    let sum = numberArray.reduce( (a, b) => {
        return a + b;
    })

console.log(flag);
console.log(sum);
}

