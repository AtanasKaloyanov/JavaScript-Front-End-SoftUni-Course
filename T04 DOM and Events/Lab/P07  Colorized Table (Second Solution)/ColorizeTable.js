function colorize() {
    let rows = document.querySelectorAll('tr:nth-child(even)')
     
    for (let currentRow of rows) {
        currentRow.style.backgroundColor = 'Teal'
    }
    
    }
        
/*
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Town</th>
        </tr>
        <tr>
            <td>Eve</td>
            <td>Sofia</td>
        </tr>
        <tr>
            <td>Nick</td>
            <td>Varna</td>
        </tr>
        <tr>
            <td>Didi</td>
            <td>Ruse</td>
        </tr>
        <tr>
            <td>Tedy</td>
            <td>Varna</td>
        </tr>
    </table>

    <button onclick="colorize()">Colorize</button>
    <script src="ColorizeTable.js"></script>
</body>
*/