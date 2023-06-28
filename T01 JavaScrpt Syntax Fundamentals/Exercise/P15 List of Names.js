function listOfNames(array) {
    array.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1
        } else if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        } else {
            return 0
        }
    });

    for (i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`)
    }
}


