fetch('https://api.github.com/users/AtanasKaloyanov/repos') // repos 
    .then((result) => result.json()) // parsing the JSON in JavaScript object
    .then((result) => {
        result.forEach((currentRepo) => {
            console.log(currentRepo) // printing every repo
        })
    })
    .catch((error) => console.log(error)) // catching an eventual error 


