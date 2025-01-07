function solve() {
    // 1. Getting the select element, then creating 2 options, creating 2 textNodes, adding the textNodes to the options and finally the options to the conatainer:
    let optionsContainer = document.getElementById('selectMenuTo');
    let optionBinary = document.createElement('option');
    let optionHexadecimal = document.createElement('option');
    let binaryText = document.createTextNode('Binary');
    let hexadecimalText = document.createTextNode('Hexadecimal');
    optionBinary.appendChild(binaryText);
    optionHexadecimal.appendChild(hexadecimalText);
    optionBinary.value = 'binary';
    optionHexadecimal.value = 'hexadecimal';
    optionsContainer.appendChild(optionBinary);
    optionsContainer.appendChild(optionHexadecimal);

    // 2. Getting the button and adding a function to it:
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', convert);

    // 3. The function itself:
    function convert() {
        // 3.1. Getting the added number and the number system
        let decimalNumber = Number(document.getElementById('input').value);
        let optionsIndex = optionsContainer.selectedIndex;
        let optionsSelected = optionsContainer.options[optionsIndex];
        let system = optionsSelected.value;
        // 3.2. Converting the number:
        let convertedNumber;
        if (system == 'binary') {
            convertedNumber = decimalNumber.toString(2);
        } else if (system == 'hexadecimal') {
            convertedNumber = decimalNumber.toString(16).toUpperCase();
        }
        // 3.3. Getting the output and adding to it the converted number:
        let input = document.getElementById('result');
        input.value = convertedNumber;
    }

}

/*

<body>
    <div id="container">
        <label for="input">Number</label>
        <input type="number" id="input" /><br>
        <label for="selectMenuFrom">From</label>
        <select id="selectMenuFrom">
            <option selected value="decimal">Decimal</option>
        </select>
        <label for="selectMenuTo">To</label>
        <select id="selectMenuTo">
            <option selected value=""></option>
        </select>
        <button>Convert it</button>

    </div>
    <footer>
        <label for="result">Result</label>
        <input type="text" name="output" id="result" disabled readonly />
    </footer>
    <script>
        solve();
    </script>
</body>

*/