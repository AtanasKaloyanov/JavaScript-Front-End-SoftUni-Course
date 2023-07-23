function solve() {
    // 1. Getting the button with id exercise and adding an event to it
    let divContainer = document.getElementById('exercise')
    let button = divContainer.children[2]
    button.addEventListener('click', onClick)

    // 2. function onClick description
    function onClick(e) {
        // 2.1 Getting the text from the field and parsing it to Object
        let generateTextArea = divContainer.children[1]
        let array = JSON.parse(generateTextArea.value)

        // 2.2 Adding the objects to the table. There is a different row for every different object and there is a different column for every different field (the fields are 5). Every column has a child too: the first column has a 'img', the other 4 columns - 'p'. The children's textContent's are the filed's values  
        array.forEach( (currentObject) => {
            let row = document.createElement('tr')

            for (i = 0; i < 4; i++) {
                let column = document.createElement('td')
                let entries = Object.entries(currentObject)

                if (i == 0) {
                    let imgElement = document.createElement('img')
                    imgElement.src = entries[0][1]
                    column.appendChild(imgElement)
                } else {
                    let p = document.createElement('p')
                    p.textContent = entries[i][1]
                    column.appendChild(p)
                }

                row.appendChild(column)
            }

            // 2.3 Adding the final column to every row  (column with child input)

            let lastColumn = document.createElement('td')
            let input = document.createElement('input')
            input.type = 'checkbox'

            lastColumn.appendChild(input)

            row.appendChild(lastColumn)

            let tBody = document.getElementsByTagName('tbody')[0]
            tBody.appendChild(row)
            generateTextArea.value = ''
        })

    }

    // 3. Getting the second button and adding an event to it
    let byeButton = document.getElementsByTagName('button')[1]
    byeButton.addEventListener('click', byeItem)

    // 4. second function's description: Getting the second textArea. Than creating 2 arrays: array of prices and array of names. Finally iterating the body rows. If the current row's column's input is checked, than adding the current name and the current price to the arrays
    function byeItem() {
        let outputField = document.getElementsByTagName('textarea')[1]

        let prices = []
        let names = []
        let decFactors = []

        let rows = document.querySelectorAll('tbody tr')

        Array.from(rows)
            .forEach( (currentRow) => {
                let currentInput = currentRow.children[4].children[0]
                if (currentInput.checked) {
                    let nameParagraph = currentRow.children[1].children[0]
                    names.push(nameParagraph.textContent)

                    let priceParagraph = currentRow.children[2].children[0]
                    let price = Number(priceParagraph.textContent)
                    prices.push(price)

                    let decFactorParagraph = currentRow.children[3].children[0]
                    let decFactor = Number(decFactorParagraph.textContent)
                    console.log(decFactor)
                    decFactors.push(decFactor)
                }
            })

        // 5. names, total price and average decoration factor printing
        let totalPrice = prices.reduce ( (a, b) => a + b)
        let avgDecFactor = (decFactors.reduce( (a, b) => a + b)) / decFactors.length

        outputField.value = 
        `Bought furniture: ${names.join(', ')}` 
        + '\n' + `Total price: ${totalPrice.toFixed(2)}`
        + '\n' + `Average decoration factor: ${avgDecFactor}`
    }
}

// input - an array of object in JSON. Every object has 1.image, 2.name, 3.price and 4.decoration factor

// The task is when the button with textContent 'Generate' is clicked the new row (tr tag) should be added to the table. This row should have 4 columns (td tag) with textContent - image, name, price, decoration factor 

/*

<body onload="solve()">
    <div id="container">
        <div id="exercise">
            <h1>Furniture List</h1>
            <textarea rows="5" cols="50"></textarea>
            <button>Generate</button>

            <div class="wrapper">
                <div class="card-wrapper">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Decoration factor</th>
                                        <th scope="col">Mark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
                                        </td>
                                        <td>
                                            <p>Office chair</p>
                                        </td>
                                        <td>
                                            <p>160</p>
                                        </td>
                                        <td>
                                            <p>0.5</p>
                                        </td>
                                        <td>
                                            <input type="checkbox" disabled />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <textarea rows="4" cols="50" disabled></textarea>
            <button>Buy</button>
        </div>
    </div>
    <script src="solution.js"></script>
</body>

*/