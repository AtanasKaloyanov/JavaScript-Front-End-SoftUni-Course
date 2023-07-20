function addItem() {

    // Step 1 - getting the values of the both inputs (the text that is written in the inputs)

    let firstInputValue = document.getElementById('newItemText').value
    let secondInputValue = document.getElementById('newItemValue').value

    // Step 2 - 2.1 Creating 2 options, adding the textContents of the inputs to the options and appending the options to the select 

    const option = document.createElement('option')
    
    option.textContent = firstInputValue
    option.value = secondInputValue
 
    const select = document.getElementById('menu')
    select.appendChild(option)

    // Step 3 - clearing the input fields
    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''

}

// elements with id newItemText and id newItemValue 

/*

<head>
    <meta charset="UTF-8">
    <title>Fill Dropdown</title>
    <script src="dropdown.js"></script>
    <link rel="stylesheet" href="filldropdown.css">
</head>

<body>
    <h1>Dropdown Menu</h1>
    <article>
        <div>
            <select id="menu"></select>
        </div>
        <label for="newItemText"> Text:</label>
        <input type="text" id="newItemText" />

        <label for="newItemValue"> Value: </label>
        <input type="text" id="newItemValue" />

        <input type="button" value="Add" onclick="addItem()">
    </article>
</body>

*/