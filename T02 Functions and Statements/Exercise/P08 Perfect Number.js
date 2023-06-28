function findPerfectNumber(number) {
    let halfNumber = number / 2;

    let sum = 0;

    for (i = 1; i <= halfNumber; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    let output = '';

    if (sum == number) {
        output = 'We have a perfect number!'
    } else {
        output = `It's not so perfect.`
    }

    console.log(output)
}

