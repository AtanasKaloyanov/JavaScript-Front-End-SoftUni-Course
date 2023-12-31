function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let rows = document.getElementsByTagName('tr')

        Array.from(rows)
            .forEach((currentRow) => {
                currentRow.className = ''
            })

        let input = document.getElementById('searchField')
        let inputValue = input.value

        let columns = document.getElementsByTagName('td')
        Array.from(columns)
            .forEach((currentColumn) => {
                if (currentColumn.textContent.includes(inputValue)) {
                    currentColumn.parentElement.className = 'select'
                }
            })

        input.value = ''
    }
}

// The input is the value of the value of the input tag

/*

<head>
    <link rel="stylesheet" href="template.css">
    <title>TABLE - SEARCH ENGINE</title>
    <script src="./solution.js"></script>
</head>

<body>
    <table class="container">
        <thead>
            <tr>
                <th>Student name</th>
                <th>Student email</th>
                <th>Student course</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">
                    <input type="text" id="searchField" />
                    <button type="button" id="searchBtn">Search</button>
                </td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>John Dan</td>
                <td>john@john-dan.com</td>
                <td>JS-CORE</td>
            </tr>
            <tr>
                <td>Max Peterson</td>
                <td>max@softuni.bg</td>
                <td>JS-WEB</td>
            </tr>
            <tr>
                <td>Philip Anderson</td>
                <td>philip@softuni.bg</td>
                <td>FRONT-END</td>
            </tr>
            <tr>
                <td>Sam Lima</td>
                <td>sam@gmail.com</td>
                <td>TECH-JS</td>
            </tr>
            <tr>
                <td>Eva Longoria</td>
                <td>eva@gmail.com</td>
                <td>All possible courses</td>
            </tr>
        </tbody>
    </table>
    <div id="result"></div>

    <script>
        solve();
    </script>
</body>

*/