function solve(array) {
    let food = array[0].split('!')

    for (i = 1; i < array.length; i++) {
        let currentInfo = array[i].split(' ')

        if (currentInfo.includes('Urgent')) {
            let item = currentInfo[1]

            if (!food.includes(item)) {
                food.unshift(item)
            }
        } else if (currentInfo.includes('Unnecessary')) {
            let item = currentInfo[1]

            if (food.includes(item)) {
                let itemIndex = food.indexOf(item)
                food.splice(itemIndex, 1)
            }
        } else if (currentInfo.includes('Correct')) {
            let oldItem = currentInfo[1]
            let newItem = currentInfo[2]
            
            if (food.includes(oldItem)) {
                let oldItemIndex = food.indexOf(oldItem)
                food.splice(oldItemIndex, 1, newItem)
            }
        } else if (currentInfo.includes('Rearrange')) {
              let item = currentInfo[1]

              if (food.includes(item)) {
                 let itemIndex = food.indexOf(item)
                 food.splice(itemIndex, 1)
                 food.push(item)
              }
        }
    }

    console.log(food.join(', '))
}

// solve(
//     (["Tomatoes!Potatoes!Bread",
//         "Unnecessary Milk",
//         "Urgent Tomatoes",
//         "Go Shopping!"])
// )

solve(
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"])
)

// (Milk Pepper Salt Water Banana

// "Urgent Salt",                
// "Unnecessary Grapes",
// "Correct Pepper Onion",
// "Rearrange Grapes",
// "Correct Tomatoes Potatoes"

