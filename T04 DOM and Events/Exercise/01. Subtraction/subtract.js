function subtract() {
    let firstNumber = document.getElementById('firstNumber')
    let secondNumber = document.getElementById('secondNumber')

    let result = document.getElementById('result')

    result.textContent = Number(firstNumber.value) - Number(secondNumber.value)
}

/*

<body>
    <div id="wrapper">
        <input type="text" id="firstNumber" value="13.33" disabled>
        <input type="text" id="secondNumber" value="22.18" disabled>

        <div id="result"></div>
    </div>
    <script src="subtract.js"></script>
    <script>
        window.onload = function() {
            subtract();
        }
    </script>
</body>

*/