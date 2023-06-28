function sortingNumbers(array) {
    array.sort((a, b) => {
        return a - b;
    })

    let output = [];

    while (array.length != 0) {
        let smallest = array[0];
        array.shift();

        let biggest = array[array.length - 1];
        array.pop();

        output.push(smallest);
        output.push(biggest);
    }

    return output;
}


