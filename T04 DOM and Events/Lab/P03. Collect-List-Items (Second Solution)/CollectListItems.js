function extractText() {
    let elements = document.querySelectorAll('ul li')
    let array = []

    for (let currentElement of elements) {
        array.push(currentElement.textContent)
    }

    document.getElementById('result').textContent = array.join('\n')
}

