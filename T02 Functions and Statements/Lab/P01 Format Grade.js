function evaluation(grade) {
    let output = '';

    if (grade < 3.00) {
        output = 'Fail';
    } else if
        (grade < 3.50) {
        output = 'Poor'
    } else if
        (grade < 4.50) {
        output = 'Good'
    } else if
        (grade < 5.50) {
        output = 'Very good'
    } else {
        output = 'Excellent'
    }

    if (output == 'Fail') {
        console.log(`${output} (${grade})`)
    } else {
        console.log(`${output} (${grade.toFixed(2)})`)
    }
}
 

