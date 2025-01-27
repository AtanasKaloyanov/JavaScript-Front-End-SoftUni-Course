function attachEvents() {
  let container = document.getElementsByTagName('tbody')[0];
  const LOAD_AND_POST_URL = 'http://localhost:3030/jsonstore/collections/students';

  // 1. Get:
  fetch(LOAD_AND_POST_URL)
    .then((response) => response.json())
    .then(showStudents());

  // 2. Post:
  let button = document.getElementById('submit');
  button.addEventListener('click', addStudent);
  function addStudent() {
    let inputs = document.getElementsByClassName('inputs')[0].children;

    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    let facultyNumber = inputs[2].value;
    let grade = inputs[3].value;

    let student = {
      firstName: firstName,
      lastName: lastName,
      facultyNumber: facultyNumber,
      grade: grade
    };

    let methodAndData = {
      method: 'POST',
      body: JSON.stringify(student)
    }

    fetch(LOAD_AND_POST_URL, methodAndData)
  }

  function showStudents() {
    return (students) => {
      let studentsE = Object.entries(students);
      Array.from(studentsE).forEach((entry) => {
        let student = entry[1];
        let firstName = student.firstName;
        let lastName = student.lastName;
        let facultyNumber = student.facultyNumber;
        let grade = student.grade;

        let row = document.createElement('tr');
        let firstNameColumn = document.createElement('td');
        let lastNameColumn = document.createElement('td');
        let facultyNumberColumn = document.createElement('td');
        let gradeColumn = document.createElement('td');

        firstNameColumn.textContent = firstName;
        lastNameColumn.textContent = lastName;
        facultyNumberColumn.textContent = facultyNumber;
        gradeColumn.textContent = grade;

        row.appendChild(firstNameColumn);
        row.appendChild(lastNameColumn);
        row.appendChild(facultyNumberColumn);
        row.appendChild(gradeColumn);
        container.appendChild(row);
      });
    };
  }
}

attachEvents();

/*

<body>
    <div class="container">
        <table id="results">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Faculty Number</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div class="container-form">
            <h3>FORM</h3>
            <div id="form">
                <div class="labels">
                    <label>First Name</label>
                    <label>Last Name</label>
                    <label>Faculty Number</label>
                    <label>Grade</label>
                </div>
                <div class="inputs">
                    <input type="text" name="firstName" placeholder="First Name...">
                    <input type="text" name="lastName" placeholder="Last Name...">
                    <input type="text" name="facultyNumber" placeholder="Faculty Number...">
                    <input type="text" name="grade"  placeholder="Grade...">
                </div>
                <p class="notification"></p>
                <button id="submit">Submit</button>
            </div>
        </div>
    </div>

    <script src="./app.js"></script>
</body>

*/