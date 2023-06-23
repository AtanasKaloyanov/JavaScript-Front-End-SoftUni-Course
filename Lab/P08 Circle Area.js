function circleAreaCalculation(input) {
    let message;
    if (typeof input == 'number') {
         message = (Math.PI * input ** 2).toFixed(2)
    } else {
        message = `We can not calculate the circle area, because we receive a ${typeof input}.`;
    }

    console.log(message);
}

