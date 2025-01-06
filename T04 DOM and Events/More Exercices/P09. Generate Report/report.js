function generateReport() {
    // 1. Getting an array of th elements: 
    let ths = document.querySelector('thead tr').children;
    // 2. Iterating over every th element and checking if its child input element is checked. If it is checked, then adding the corresponded index to an array:
    let indeces = [];

    for (let i = 0; i < ths.length; i++) {
        let th = ths[i];
        let input = th.children[0];

        if (input.checked) {
            indeces.push(i);
        }
    }

    if (indeces.length == 0) {
        return;
    }

    // 3. Getting the tr elements to the table:
    let trs = document.querySelector('tbody').children;
    let people = [];

    Array.from(trs).forEach( (tr) => {
        let person = {};
        let tds = tr.children;
        
        indeces.forEach( (index) => {
            let fieldName = ths[index].children[0].name;
            let td = tds[index];
            let fieldContent = td.textContent;
            person[fieldName] = fieldContent;
        })
        
        people.push(person);
    })

     // 4. Adding the array as JSON object to the output element:
     let textArea = document.getElementById('output');
     textArea.value = JSON.stringify(people, null, 2);
}

/*
<body>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Employee <input type="checkbox" name="employee"></th>
                    <th>Department <input type="checkbox" name="deparment"></th>
                    <th>Status <input type="checkbox" name="status"></th>
                    <th>Date Hired <input type="checkbox" name="dateHired"></th>
                    <th>Benefits <input type="checkbox" name="benefits"></th>
                    <th>Compensation <input type="checkbox" name="salary"></th>
                    <th>Rating <input type="checkbox" name="rating"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Poole, Tracy</td>
                    <td>Facilities/Engineering</td>
                    ...
                </tr>
                <tr>
                    <td>Ramos, Jan</td>
                    <td>Human Resources</td>
                    ...
                </tr>
               
            </tbody>
        </table>
        <div>
            <button onclick="generateReport()">Generate Report</button>
        </div>
        <div>
            <textarea id="output"></textarea>
        </div>
    </main>
    <script src="report.js"></script>
</body>
*/