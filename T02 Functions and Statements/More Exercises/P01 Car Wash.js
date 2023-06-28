function carWashing(array) {
    let result = 0;

    array.forEach((currentCommand) => {
        switch (currentCommand) {
            case 'soap': {
                result += 10
            } break;

            case 'water': {
                result = 1.2 * result
            } break;

            case 'vacuum cleaner': {
                result = 1.25 * result
            } break;

            case 'mud': {
                result = 0.9 * result
            } break;
        }
    })

    console.log(`The car is ${result.toFixed(2)}% clean.`)
}

