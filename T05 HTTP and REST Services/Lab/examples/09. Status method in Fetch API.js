fetch('https://api.github.com/users/AtanasKaloyanov/repo')
    .then((response) => {
        if (response.status !== 200) {  // check if the status is 200
            console.log('Error!')
            return
        }

        response.json()
            .then((response) => {
                response.forEach((currentRepo) => console.log(currentRepo))
            })
    })

