let promise = new Promise(function (resolve, reject) {
    let a = Math.random()

    if (a > 0.5) {
        resolve(a)
    } else {
        reject('Smaller than 0.5')
    }
})

promise
    .then( (result) => console.log(result)) // If the result is bigger than 0.5
    .catch( (result) => console.log(result)) // If the result is smaller then
    .finally( () => console.log('Completed')) // In both cases

