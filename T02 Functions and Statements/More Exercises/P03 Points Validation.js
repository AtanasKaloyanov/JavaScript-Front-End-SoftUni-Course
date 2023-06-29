function pointsValidation(array) {
    let x1 = array[0]
    let y1 = array[1]
    let x2 = array[2]
    let y2 = array[3]
    
   let firstPointToOriginDistance = Math.sqrt(((x1 - 0) ** 2) + ((y1 - 0) ** 2))

   let secondPointToOriginDistance = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2))

   let pointsDistance =  Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))

   function isValid(number) {
    if (Number.isInteger(number)) {
        return 'valid';
    } 

        return'invalid'; 
   }

   console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(firstPointToOriginDistance)}`)

   console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(secondPointToOriginDistance)}`)

   console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(pointsDistance)}`)
}

 // distance between 2 points = square root ((square of (x1 - x2)  + square of (y1 - y2)))

   // if the distance is an integer number the distance is valid. Otherwise it is not
   //                          x1  x2         y1  y2
   //                         (0 - 3) ** 2 + (4 - 0) ** 2 = 25
   //                          square of 25 = 5

//                   4
//                   3
//                   2
//                   1
    //   -4 -3 -2 -1 0 1 2 3 4 
//                  -1
//                  -2
//                  -3
//                  -4