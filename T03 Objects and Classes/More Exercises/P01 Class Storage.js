class Storage {
    capacity = 0
    storage = []

    product = {
        name: '',
        price: 0,
        quantity: 0
    }

    totalCost = 0

    constructor(capacity) {
        this.capacity = capacity
    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity

        let currentCost = product.price * product.quantity
        this.totalCost += currentCost
    }

    getProducts() {
        let text = ''
        let currentJSON = ''
        let currentProduct = {}

        for (let index = 0; index < this.storage.length; index++) {
            currentProduct = this.storage[index]

            if (index == this.storage.length - 1) {
                currentJSON = JSON.stringify(currentProduct)
            } else {
                currentJSON = JSON.stringify(currentProduct) + '\n'
            }

            text += currentJSON
        }

        return text
    }
}

//  conditions:

// the class storage has the following properties:
// 1. capacity (number)
// 2. storage (list of products (object)).
//  Every storage has a
//     2.1. name (string),
//     2.2. price (a number for a single product)
//     2.3 quantity (number)
// 3. totalCost (the sum of the cost of the products)

// the methods:
// addProducts(product) - return storage.push(product)
// getProducts() - return JSON.stringify(storage)

// Inputs:

// let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
// let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
// let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);

// let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
// let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);

