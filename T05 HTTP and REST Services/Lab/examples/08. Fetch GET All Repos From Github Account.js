fetch('https://api.github.com/users/AtanasKaloyanov/repos')
 .then( (result) => result.json())
 .then( (result) => {
    result.forEach( (currentRepo) => {
        console.log(currentRepo)
    })
 })
 .catch( (error) => console.log(error))


