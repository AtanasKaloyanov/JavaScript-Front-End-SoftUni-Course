function fruitCalculation(fruit, weight, price) {
     let weightInKg = weight / 1000
     let sum = (weightInKg * price) . toFixed(2);


      console.log(`I need $${sum} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

