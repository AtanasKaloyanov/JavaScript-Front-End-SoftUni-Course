function companyList(array) {
   
    for (let index in array) {
        let currentName = array[index]
        let currentNumber = currentName.length

        let employee = {}
        employee['name'] = currentName
        employee['number'] = currentNumber

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`)
    }
}

// companyList([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]    
//     )