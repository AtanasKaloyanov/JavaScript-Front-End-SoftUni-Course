console.log('First')

new Promise(function (resolve, reject) {
    reject('Third')
})
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error)
    })

    console.log('Second')

    // First
    // Second
    // Third