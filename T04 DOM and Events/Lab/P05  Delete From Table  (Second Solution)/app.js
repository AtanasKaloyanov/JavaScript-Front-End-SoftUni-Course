function deleteByEmail() {
    let inputElementValue = document.querySelector('label input').value

    let tbody = document.querySelector('tbody')
    let flag = false

   Array.from(tbody.children)
        .forEach( (tr) => {
            let currentEmail = tr.children[1].textContent

            if (currentEmail == inputElementValue) {
               tbody.removeChild(tr)
               flag = true
            }
        })

     if (flag) {
        document.getElementById('result').textContent = 'Deleted'
     } else {
        document.getElementById('result').textContent = 'Not found.'
     }
}

// the input is an email
// if the email is found the ->
// 1.the row from the table which matches should be deleted
// 2. the div content with id result should be 'Deleted'

// Otherwise -> the div countent with id result should be 'Not found'

/*
<body>
    <table border="1" id="customers">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Eve</td>
                <td>eve@gmail.com</td>
            </tr>
            <tr>
                <td>Nick</td>
                <td>nick@yahooo.com</td>
            </tr>
            <tr>
                <td>Didi</td>
                <td>didi@didi.net</td>
            </tr>
            <tr>
                <td>Tedy</td>
                <td>tedy@tedy.com</td>
            </tr>
        </tbody>
    </table>
    <label>
        Email: <input type="text" name="email" />
        <button onclick="deleteByEmail()">Delete</button>
    </label>
    <div id="result"></div>
    <script src="./app.js"></script>
</body>
*/