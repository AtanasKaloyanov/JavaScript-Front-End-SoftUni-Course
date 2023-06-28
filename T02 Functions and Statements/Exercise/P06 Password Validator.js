function passwordValidator(input) {
    let flag = true;

    if (input.length < 6 || input.length > 10) {
        console.log('Password must be between 6 and 10 characters')
        flag = false;
    }

    let regex = /^[A-Za-z0-9]*$/;

    if (!input.match(regex)) {
        console.log('Password must consist only of letters and digits')
        flag = false;
    }

    let array = input.split('')
    let digitRegex = /[0-9]/

    let counter = 0;
    array.forEach( (element) => {
        if (element.match(digitRegex)) {
            counter++;
        }
    })

    if (counter < 2) {
        console.log('Password must have at least 2 digits')
        flag = false;
    }

    if (flag == true) {
        console.log('Password is valid')
    }
}






