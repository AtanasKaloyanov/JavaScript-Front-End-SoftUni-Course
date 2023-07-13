function addItem() {
    let newElement = document.createElement('li')
    let thirdInputValue = document.getElementById('newItemText').value

    newElement.textContent = thirdInputValue
    document.getElementById('items').appendChild(newElement)

    document.getElementById('newItemText').value = ''
}



/*
 <main>
    <ul id="items">
        <li>First</li>
        <li>Second</li>
    </ul>
    <input type="text" id="newItemText" />
    <input type="button" value="Add" onclick="addItem()">
</main> 
*/ 