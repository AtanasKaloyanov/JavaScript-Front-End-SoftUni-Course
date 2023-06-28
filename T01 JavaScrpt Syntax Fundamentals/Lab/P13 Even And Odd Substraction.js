function subtraction(array) {
    let oddSum = 0;
    let evenSum = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }

    }

    console.log(evenSum - oddSum);
}

