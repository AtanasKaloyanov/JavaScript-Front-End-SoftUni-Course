const promise1 = Promise.resolve('firstCat')
const promise2 = new Promise( (resolve, reject) => {
    resolve('secondCat')
})
const promise3 = 'thirdCat'

Promise.all([promise1, promise2, promise3])
    .then( (values) => values
        .forEach( (currentValue) => {
            console.log(currentValue)
        })
    )

    // firstCat
    // secondCat
    // thirdCat