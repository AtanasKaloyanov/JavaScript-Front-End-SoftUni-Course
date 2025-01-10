function solve() {
    let rows = document.getElementsByTagName('tbody')[0].children;
    let r1 = rows[0].children;
    let r1c1 = r1[0].children[0];
    let r1c2 = r1[1].children[0];
    let r1c3 = r1[2].children[0];

    let r2 = rows[1].children;
    let r2c1 = r2[0].children[0];
    let r2c2 = r2[1].children[0];
    let r2c3 = r2[2].children[0];

    let r3 = rows[2].children;
    let r3c1 = r3[0].children[0];
    let r3c2 = r3[1].children[0];
    let r3c3 = r3[2].children[0];


    let quickCheckButton = document.querySelector(".buttons input[type='submit']");
    let outputElement = document.getElementById('check');
    let table = document.getElementsByTagName('table')[0];

    quickCheckButton.addEventListener('click', quickCheck);
    function quickCheck() {
        let r1c1V = r1c1.value;
        let r1c2V = r1c2.value;
        let r1c3V = r1c3.value;
        let r2c1V = r2c1.value;
        let r2c2V = r2c2.value;
        let r2c3V = r2c3.value;
        let r3c1V = r3c1.value;
        let r3c2V = r3c2.value;
        let r3c3V = r3c3.value;

        if (r1c1V == '' || r1c2V == '' || r1c3V == '' || r2c1V == '' || r2c2V == '' || r2c3V == '' || r3c1V == '' || r3c2V == '' || r3c3V == '') {
            outputElement.textContent = 'Keep trying ...';
            return;
        }

        let row1Sum = Number(r1c1V) + Number(r1c2V) + Number(r1c3V);
        let row2Sum = Number(r2c1V) + Number(r2c2V) + Number(r2c3V);
        let row3Sum = Number(r3c1V) + Number(r3c2V) + Number(r3c3V);
        let column1Sum = Number(r1c1V) + Number(r2c1V) + Number(r3c1V);
        let column2Sum = Number(r1c2V) + Number(r2c2V) + Number(r3c2V);
        let column3Sum = Number(r1c3V) + Number(r2c3V) + Number(r3c3V);

        let sums = [row1Sum, row2Sum, row3Sum, column1Sum, column2Sum, column3Sum];
        let flag = false;
        for (let i = 0; i < sums.length - 1; i++) {
            let currentCompareSum = sums[i];
            for (let j = i + 1; j < sums.length; j++) {
                let currentSum = sums[j];
                if (currentCompareSum != currentSum) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                break;
            }
        }

        if (flag) {
            table.style = 'border: 2px solid red';
            outputElement.textContent = 'Keep trying ...';
        } else {
            table.style = 'border: 2px solid green';
            outputElement.textContent = 'Success!'
        }

    }

    let clearButton = document.querySelector(".buttons input[type='reset']");
    clearButton.addEventListener('click', clear);
    function clear() {
        r1c1.value = '';
        r1c2.value = '';
        r1c3.value = '';
        r2c1.value = '';
        r2c2.value = '';
        r2c3.value = '';
        r3c1.value = '';
        r3c2.value = '';
        r3c3.value = '';
        outputElement.textContent = '';
    }
}

/*

<body>
    <main>
        <header>
            <h1>Sudomu</h1>
            <select id="size">
                <option value="3">3x3</option>
                <option value="9">9x9</option>
            </select>
        </header>

        <form id="solutionCheck">

            <table>
                <tbody>
                    <tr>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                    </tr>
                    <tr>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                    </tr>
                    <tr>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                        <td><input step="1" min="1" max="3" type="number" required></td>
                    </tr>
                </tbody>
            </table>

            <div class="buttons">
                <input type="submit" value="Quick Check">
                <input type="reset" value="Clear">
            </div>
        </form>
        <p id="check"></p>
    </main>
</body>

*/