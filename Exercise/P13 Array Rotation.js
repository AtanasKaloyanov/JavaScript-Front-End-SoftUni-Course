function arrayRotation(array, number) {
    for (i = 1; i <= number; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(' '));
}





