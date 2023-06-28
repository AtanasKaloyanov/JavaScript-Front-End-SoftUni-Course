function roadRadar(speed, area) {
    let speedLimit;
    switch (area) {
        case 'motorway': {
            speedLimit = 130;
        } break

        case 'interstate': {
            speedLimit = 90;
        } break

        case 'city': {
            speedLimit = 50;
        } break

        case 'residential': {
            speedLimit = 20;
        } break
    }

    let output;
    if (speed <= speedLimit) {
        output = `Driving ${speed} km/h in a ${speedLimit} zone`
    } else {
        let difference = speed - speedLimit;
        let status;

        if (difference <= 20) {
            status = 'speeding'
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        output = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    console.log(output);
}

// area     ->   speed limit

// motorway -> 130 km/h
// interstate -> 90 km/h
// city        -> 50km/h
// residential -> 20 km/h

// 1. within the limits ->

// If speed <= speed limit
// -> `Driving {speed} km/h in a {speed limit} zone`

// 2. over the limit ->
// difference = speed - speed limit

// difference <= 20 km -> speeding
// difference <= 40 km -> excessive speeding
// difference anything else -> reckless driving

// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`

