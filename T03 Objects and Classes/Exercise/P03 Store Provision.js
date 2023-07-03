function storePrinter(availiableProducts, deliveryProducts) {
    let store = {}

    for (i = 0; i < availiableProducts.length - 1; i++) {
        let key = ''
        let value = 0

        if (i % 2 == 0) {
            key = availiableProducts[i]
            value = Number.parseInt(availiableProducts[i + 1])
            store[key] = value
        }

    }

    for (i = 0; i < deliveryProducts.length - 1; i++) {

        if (i % 2 == 0) {
            let key = deliveryProducts[i]
            let value = Number.parseInt(deliveryProducts[i + 1])

            if (Object.keys(store).includes(key)) {
                store[key] += value
            } else {
                store[key] = value
            }

        }
    }

    for (let key in store) {
        console.log(key + ' -> ' + store[key])
    }
}

// storePrinter([
//     'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//     [
//     'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//     ]  
// )