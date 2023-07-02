class Student {

  constructor(firstName, lastName, grade) {
    this.name = firstName = firstName
    this.lastName = lastName
    this.grade = grade
  }

  study() {
    console.log('JavaScript time')
  }
}

let student = new Student('Atanas', 'Kaloyanov', 6.00)
console.log(student.name) // Atanas
console.log(student.lastName) // Kaloyanov
console.log(student.grade) // 6.00

student.study() // JavaScript time
