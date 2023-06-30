function dnaPrinting(number) {
  let pattern = 'ATCGTTAGGG'

  let row = '******'
  let firstLetter = ''
  let secondLetter = ''
  let toTheEdges = false

  for (i = 1; i <= number; i++) {
    if (i % 5 == 1) {
      firstLetter = pattern.charAt(0)
      secondLetter = pattern.charAt(1)

      if (i == 1) {
        row = '**AT**'
        toTheEdges = true
      } else {
        row = rowCreating(row, firstLetter, secondLetter, toTheEdges)[0]
        toTheEdges = rowCreating(row, firstLetter, secondLetter, toTheEdges)[1]
      }
    } else if (i % 5 == 2) {
      firstLetter = pattern.charAt(2)
      secondLetter = pattern.charAt(3)

      row = rowCreating(row, firstLetter, secondLetter, toTheEdges)[0]
      toTheEdges = rowCreating(row, firstLetter, secondLetter, toTheEdges)[1]
    } else if (i % 5 == 3) {
      firstLetter = pattern.charAt(4)
      secondLetter = pattern.charAt(5)

     row = rowCreating(row, firstLetter, secondLetter, toTheEdges)[0]
     toTheEdges = rowCreating(row, firstLetter, secondLetter, toTheEdges)[1]
    } else if (i % 5 == 4) {
      firstLetter = pattern.charAt(6)
      secondLetter = pattern.charAt(7)

     row = rowCreating(row, firstLetter, secondLetter, toTheEdges)[0]
     toTheEdges = rowCreating(row, firstLetter, secondLetter, toTheEdges)[1]

    } else if (i % 5 == 0) {
      firstLetter = pattern.charAt(8)
      secondLetter = pattern.charAt(9)

      row = rowCreating(row, firstLetter, secondLetter, toTheEdges)[0]
      toTheEdges = rowCreating(row, firstLetter, secondLetter, toTheEdges)[1]
    }

    console.log(row)
  }

  function rowCreating(row, firstLetter, secondLetter, toTheEdges) {
    let rowFirstChar = row.charAt(0)
    let rowSecondChar = row.charAt(1)
    let rowThirdChar = row.charAt(2)
    let rowFourthChar = row.charAt(3)
    let rowFifthChar = row.charAt(4)
    let rowSixthChar = row.charAt(5)
    
    if (rowFirstChar != '*' && rowSixthChar != '-' ) {
      row = '*' + row.slice(1)
      row = row.slice(0, 5) + '*'
      row = row.slice(0, 1) + firstLetter + row.slice(2)
      row = row.slice(0, 4) + secondLetter + row.slice(5)
      toTheEdges = false
    } else if (rowThirdChar != '*' && rowFourthChar != '-') {
      row = row.slice(0, 2) + '-' + row.slice(3)
      row = row.slice(0, 3) + '-' + row.slice(4)
      row = row.slice(0, 1) + firstLetter + row.slice(2)
      row = row.slice(0, 4) + secondLetter + row.slice(5)
      toTheEdges = true
    } else if (rowSecondChar != '*' && rowFifthChar != '-') {
  
      if (toTheEdges) {
        row = row.slice(0, 1) + '-' + row.slice(2)
        row = row.slice(0, 4) + '-' + row.slice(5)
        row = firstLetter + row.slice(1)
        row = row.slice(0, 5) + secondLetter
        
      } else {
        row = row.slice(0, 1) + '*' + row.slice(2)
        row = row.slice(0, 4) + '*' + row.slice(5)
        row = row.slice(0, 2) + firstLetter + row.slice(3)
        row = row.slice(0, 3) + secondLetter + row.slice(4)
       
      }
    }
  
    return [row, toTheEdges]
  }
}

// AT   -> 1   6    11   16
// CG   -> 2   7    12   17
// TT   -> 3   8    13   18
// AG   -> 4   9    14   19
// GG   -> 5   10   15   20



