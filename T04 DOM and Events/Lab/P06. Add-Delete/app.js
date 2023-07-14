function addItem() {
    let inputValue = document.getElementById('newItemText').value
    let newElement = document.createElement('li')
    newElement.textContent = inputValue

    let deleteElement = document.createElement('a')
    deleteElement.textContent = '[Delete]'
    deleteElement.setAttribute('href', '#')
    deleteElement.addEventListener('click', clickOnDelete)

    function clickOnDelete(e) {
        let a = e.currentTarget
        let li = a.parentElement
        let ul = li.parentElement
        ul.removeChild(li)
    }

    newElement.appendChild(deleteElement)

    document.getElementById('items').appendChild(newElement)
}

/*

<body>
    <h1>List of Items</h1>
    <main>
        <ul id="items"></ul>
        <input type="text" id="newItemText" />
        <input type="button" value="Add" onclick="addItem()">
    </main>
    <script src="./app.js"></script>
</body>

*/