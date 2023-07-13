function extractText() {
    let elements = document.getElementById('items').children

    let array = Array.from(elements)
    let output = ''

    array.forEach((currentElement) => {
        if (currentElement == array[array.length - 1]) {
            output += currentElement.textContent
        } else {
            output += currentElement.textContent + '\n'
        }
    })

    document.getElementById('result').textContent = output
}

