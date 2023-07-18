let promise = new Promise( (resolve, reject) => resolve('cat'))

promise
.then( (result) => `First ${result}`)
.then( (result) => `${result} and second cat`)
.then( (reslt) => `${reslt} and third cat`)
.then( (result) => console.log(result))

// First cat and second cat and third cat
  

