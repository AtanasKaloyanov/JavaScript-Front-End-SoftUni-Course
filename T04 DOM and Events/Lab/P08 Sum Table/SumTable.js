function sumTable() {
    let trElements = document.getElementsByTagName('tr')
    let sum = 0

    for (i = 1; i < trElements.length - 1; i++) {
       sum += Number(trElements[i].children[1].textContent)
    }

    trElements[trElements.length - 1].children[1].textContent = sum
}

/*

<body>
    <table>
        <tbody>
            <tr>
                <th>Product</th>
                <th>Cost</th>
            </tr>
            <tr>
                <td>Beer</td>
                <td>2.88</td>
            </tr>
            <tr>
                <td>Fries</td>
                <td>2.15</td>
            </tr>
            <tr>
                <td>Burger</td>
                <td>4.59</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td id="sum"></td>
            </tr>
        </tbody>
    </table>
    <button onclick="sumTable()">Sum</button>
    <script src="SumTable.js"></script>
</body>

*/