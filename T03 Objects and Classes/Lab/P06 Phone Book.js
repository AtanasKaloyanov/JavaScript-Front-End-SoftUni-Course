function phoneBook(array) {
    let phoneBook = {}

    for (let index in array) {

        let currentElement = array[index]
        let pair = currentElement.split(' ')

        let key = pair[0]
        let value = pair[1]
 
        phoneBook[key] = value
    }
    
    for (let key in phoneBook) {
        console.log(key + ' -> ' + phoneBook[key])
    }
}

// phoneBook(['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344']
// )