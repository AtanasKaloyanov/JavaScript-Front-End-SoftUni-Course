function deleteByEmail() {
    let inputValue = document.querySelector('label input').value

    let emails = document.querySelectorAll('tbody tr td:last-child')

    let array = Array.from(emails)

    let searched = array.find( (currentNode) => {
        return currentNode.textContent == inputValue
    })

    if (typeof searched == 'undefined') {
        document.getElementById('result').textContent = 'Not found.'
    } else {
        let parent = document.getElementsByTagName('tbody')[0]
        let children = parent.children
        
        for (let currentChild of children) {
           let grandChildren = currentChild.children

            for (let currentGrandChild of grandChildren) {
                if (currentGrandChild.textContent == inputValue) {
                   parent.removeChild(currentChild)

                }
            }

           
        }

        document.getElementById('result').textContent = 'deleted'
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