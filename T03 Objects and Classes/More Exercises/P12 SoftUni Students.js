function softuniStudents(array) {
    let courses = []
    array.forEach( (currentElement) => {
        if (currentElement.includes(':')) {
            let array = currentElement.split(': ')
            let courseName = array[0]
            let courseCapacity = Number.parseInt(array[1])

            let currentCourse = courses.find( (currentCourse) => currentCourse.name == courseName)

            if (typeof currentCourse == 'undefined') {
                let course = {
                    name: courseName,
                    capacity: courseCapacity,
                    students: []
                }

                courses.push(course)
            } else {
                currentCourse.capacity += courseCapacity
            }

        } else {
            let innerArray = currentElement.split('] with email ')

            let innerLeftArray = innerArray[0].split('[')
            let username = innerLeftArray[0]
            let creditsCount = Number.parseInt(innerLeftArray[1])

            let innerRightArray = innerArray[1].split(' joins ')
            let email = innerRightArray[0]
            let courseName = innerRightArray[1]

            let currentCourse = courses.find((currentCourse) => currentCourse.name == courseName)

            if (typeof currentCourse != 'undefined' && currentCourse.capacity > 0) {
                currentCourse.students.push({username, email, creditsCount})
                currentCourse.capacity--
            }
            
        }
    })

    courses
        .sort( (first, second) => second.students.length - first.students.length)
        .forEach( (currentCourse) => {
            console.log(currentCourse.name + ': ' + currentCourse.capacity + ' places left')
            currentCourse.students
            .sort( (first, second) => second.creditsCount - first.creditsCount)
            .forEach( (currentStundent) => {
                console.log('--- ' + currentStundent.creditsCount + ': ' + currentStundent.username + ', ' + currentStundent.email)
            })
        })
}

// inputs:

// softuniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])

// softuniStudents( ['JavaBasics: 15',
// 'user1[26] with email user1@user.com joins JavaBasics',
// 'user2[36] with email user11@user.com joins JavaBasics',
// 'JavaBasics: 5',
// 'C#Advanced: 5',
// 'user1[26] with email user1@user.com joins C#Advanced',
// 'user2[36] with email user11@user.com joins C#Advanced',
// 'user3[6] with email user3@user.com joins C#Advanced',
// 'C#Advanced: 1',
// 'JSCore: 8',
// 'user23[62] with email user23@user.com joins JSCore']
// )

// Each course has name, capacity and [student1, student2...] that are in it
// Each student has username, email and credits

// the input is an array of strings:
// 1. {course name}: {capacity} - the course should be added with its capacity. If the course exists, the capacity sould be added to this existing course
// 2. {username}[credits count] with email {email} joins {course name} - if the course exists the course should be added

// course                              //student

// name                                //username
// capacity                            //email
// [student1, student2...]             //credits