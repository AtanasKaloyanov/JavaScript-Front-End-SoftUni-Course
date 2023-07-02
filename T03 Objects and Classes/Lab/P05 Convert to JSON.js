function convertToJSON(name, lastName, hairColor) {

    let person = { name, lastName, hairColor }
    let text = JSON.stringify(person)

    return text
}

