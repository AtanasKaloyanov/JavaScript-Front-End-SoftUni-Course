function focused() {
    let inputs = document.getElementsByTagName('input')

    Array.from(inputs)
    .forEach( (currentInput) => {
        currentInput.addEventListener('focus', focus)
        currentInput.addEventListener('blur', blur)
    })

        function focus(e) {
            let input = e.currentTarget
            let div = input.parentElement
            div.className = 'focused'
        }

        function blur(e) {
            let input = e.currentTarget
            let div = input.parentElement
            div.className = ''
        }

}

/*

<body onload="focused()">
    <div>
        <div>
            <h1>Section 1</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 2</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 3</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 4</h1>
            <input type="text" />
        </div>
    </div>
    <script src="./app.js"></script>

    */






















 