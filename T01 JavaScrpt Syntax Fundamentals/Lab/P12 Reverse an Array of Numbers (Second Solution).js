function reverse(number, array) {
    let newArray = [];

    for (i = 0; i < number; i++) {
        newArray.push(array[i])
    }
    
    let output = '';
    for (i = newArray.length - 1; i >= 0; i--) {
        output += newArray[i] + ' ';
    }

    console.log(output);
}



