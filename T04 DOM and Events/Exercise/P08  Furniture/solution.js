function solve() {
  // 1. Getting the button with textConten Generaye and adding and event to it
  let divContainer = document.getElementById('exercise')
  let button = divContainer.children[2]
  button.addEventListener('click', onClick)

  // 2. function onClick description
  function onClick(e) {
    let generateTextArea = divContainer.children[1]
    let array = JSON.parse(generateTextArea.value)

    array.forEach((currentObject) => {
      let row = document.createElement('tr')

      for (i = 0; i < 4; i++) {
        let column = document.createElement('td')
        let entries = Object.entries(currentObject)

        if (i == 0) {
          let imgElement = document.createElement('img')
          imgElement.src = entries[0][1]
          column.appendChild(imgElement)
        }  else {
          let p = document.createElement('p')
          p.textContent = entries[i][1]
          column.appendChild(p)
        }

        row.appendChild(column)
      }

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