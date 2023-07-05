function register(array) {
    let schoolRegister = {}

    array.forEach( (student) => {
        let array = student.split(', ')
        let nameInnerArray = array[0].split(': ')
        let gradeInnerArray = array[1].split(': ')
        let scoreInnerArray = array[2].split(': ')

        let name = nameInnerArray[1]
        let grade = Number.parseInt(gradeInnerArray[1])
        let score = Number.parseFloat(scoreInnerArray[1])

        if (score >= 3.00) {
            grade += 1
         
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = { 
                    students: [name],
                    scores: [score] 
                } 
            } else {
                schoolRegister[grade].students.push(name)
                schoolRegister[grade].scores.push(score)
            } 
        }           
        })
        
for (let grade in schoolRegister) {
     console.log(`${grade} Grade`)

     let value = schoolRegister[grade]
     console.log(`List of students: ${value.students.join(', ')}`)

     console.log(`Average annual score from last year: ${avg(value.scores)}`)

     console.log('')
}

function avg(array) {
    let sum = 0

    array.forEach( (currentNumber) => {
        sum += currentNumber
    })

    let avgFixedTo2 = (sum / array.length).toFixed(2)
    return avgFixedTo2
}
}
//    key            value
//   grade            {students: [name1, name2...]
//                     scores:   [score1, score2]    
//                                                 }            
                                                          
// Inputs:

// register([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]
//     )

// register([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
//     ]
//     )

// key           value  
 //grade   { 
 //            List of students: [name1, name2, name3]
//        Average annual score from last year: [score1, score2, score3]     }            


// the task is an arrangement of  students by grade before the start of the new school year
// the input is an array of all students from the last year
//  if a student has a lower grade than 3, he doen't go into the next class
// the output is the whole class printed on the console sorted by in ascending order by grade

// Student name: Mark, Grade: 8, Graduated with an average score: 4.75