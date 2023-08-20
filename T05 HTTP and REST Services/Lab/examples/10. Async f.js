function second() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve('Bye'), 2000
        })
    })
}

async function asyncFunc() {

    console.log('Hello')

    let aw = await second()

    console.log(aw)

   
}

asyncFunc()