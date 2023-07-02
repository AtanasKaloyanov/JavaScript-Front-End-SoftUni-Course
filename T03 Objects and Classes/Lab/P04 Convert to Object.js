function converToObject(jsonText) {
    let person = JSON.parse(jsonText)

    for (let key in person) {
        console.log(key + ': ' + person[key])
    }
}

