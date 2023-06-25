function cookingByNumbers(number, ...array) {
    array.forEach((currentElement) => {
        switch (currentElement) {
            case 'chop': {
                number /= 2;
                console.log(number);
            } break;

            case 'dice': {
                number = Math.sqrt(number);
                console.log(number);
            } break;

            case 'spice': {
                number += 1;
                console.log(number);
            } break;

            case 'bake': {
                number *= 3;
                console.log(number);
            } break;

            case 'fillet': {
                number *= 0.8;
                number = number.toFixed(1);
                console.log(number);
            } break;
        }
    })
}









