console.log('First')

new Promise(function(resolve, reject) {
    resolve('Third')
})
.then(function(result) {
    console.log(result)
})

console.log('Second')