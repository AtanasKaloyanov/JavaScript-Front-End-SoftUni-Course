function findPalindromElement(givenArray) {
    givenArray.forEach( (currentNumber) => {
        let splitArray = currentNumber.toString().split('').map( (currentString) => {
            return Number.parseInt(currentString)
        });
        
        let flag = true;

        for (i = 0; i < splitArray.length; i++) {
            let firstNumber = splitArray[0];
            let lastNumber = splitArray[splitArray.length - 1];

            if (firstNumber != lastNumber) {
               flag = false;
               console.log(flag)
               return;  
            }  
            
            splitArray.shift();
            splitArray.pop();
        }

        console.log(flag);
    })
}

