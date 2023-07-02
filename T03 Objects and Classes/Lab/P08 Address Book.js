function addressBook(array) {
    let addressBook = {}

    for (let index in array) {
        let currentPair = array[index].split(':')

        let key = currentPair[0]
        let value = currentPair[1]

        addressBook[key] = value
    }

   let entries = Object.entries(addressBook)

    entries.sort( (a, b) => {
        let firstKey = a[0]
        let secondKey = b[0]

        if (firstKey > secondKey) {
            return 1
        } else if (firstKey < secondKey) {
            return -1
        } else {
            return 0
        }
    })

    for (let index in entries) {
        console.log(entries[index][0] + ' -> ' + entries[index][1])
    }
}

// addressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// )