function sumDigits(number) {

    // 1 Converting the given number into a string, that the string into a char array. 

    let stringArray = number.toString().split('');
    
    // 2. Converting the char array into a number array
    let numberArray = stringArray.map( (cureentElement) => {
        return Number.parseInt(cureentElement)
    });

    // 3. Finding the sum of the elements of the number array
    
    let sum = numberArray.reduce((a, b) => {
        return a + b;
    })
  
    console.log(sum)
}

