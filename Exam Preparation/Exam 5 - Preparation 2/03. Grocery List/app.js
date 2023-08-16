function solve() {


    //    <!-- <tr>
    //                         <td class="name">Milk</td>
    //                         <td class="count-product">4</td>
    //                         <td class="product-price">2</td>
    //                         <td class="btn">
    {/* <button class="update">Update</button> 
<button class="delete">Delete</button></td> */}
    //                     </tr> -->

    let BASE_URL = 'http://localhost:3030/jsonstore/grocery/'

    let productInput = document.getElementById('product')
    let countInput = document.getElementById('count')
    let priceInput = document.getElementById('price')

    let addButton = document.getElementById('add-product')
    addButton.addEventListener('click', add)

    let updateButton = document.getElementById('update-product')
    let loadButton = document.getElementById('load-product')

    let tbody = document.getElementById('tbody')

    loadButton.addEventListener('click', load)
    function load(event) {

        if (event) {
            event.preventDefault()
        }

        tbody.innerHTML = ''

        fetch(BASE_URL)
            .then((result) => result.json())
            .then((result) => {
                let values = Object.values(result)

                for (let { product, count, price, _id } of values) {

                    let tr = document.createElement('tr')
                    tr.id = _id

                    let td1 = document.createElement('td')
                    td1.className = 'name'
                    td1.textContent = product

                    let td2 = document.createElement('td')
                    td2.className = 'count-product'
                    td2.textContent = count

                    let td3 = document.createElement('td')
                    td3.className = 'product-price'
                    td3.textContent = price

                    let td4 = document.createElement('td')
                    td4.className = 'btn'

                    let updateButton = document.createElement('button')
                    updateButton.className = 'update'
                    updateButton.textContent = 'Update'
                    updateButton.addEventListener('click', update)

                    let deleteButton = document.createElement('button')
                    deleteButton.className = 'delete'
                    deleteButton.textContent = 'Delete'
                    deleteButton.addEventListener('click', remove)

                    td4.appendChild(updateButton)
                    td4.appendChild(deleteButton)

                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    tr.appendChild(td4)

                    tbody.appendChild(tr)
                }
            })
            
    }

    function add(event) {
        event.preventDefault()

        let product = productInput.value
        let count = countInput.value
        let price = priceInput.value

        let headers = {
            method: 'POST',
            body: JSON.stringify({ product, count, price })
        }

        fetch(BASE_URL, headers)

            .then(() => {
                productInput.value = ''
                countInput.value = ''
                priceInput.value = ''
                load()
            })
    }

    function remove(event) {
        let tr = event.currentTarget.parentNode.parentNode
        let id = tr.id

    
        let headers = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, headers)
        .then( () => load())

    }

    function update(event) {
      updateButton.disabled = false
      updateButton.addEventListener('click', update2)
      addButton.disabled = true
      
      let tr = event.currentTarget.parentNode.parentNode
      let id = tr.id

      let [td1, td2, td3] = tr.children
      console.log(td1)
      console.log(td2)
      console.log(td3)
      productInput.value = td1.textContent
      countInput.value = td2.textContent
      priceInput.value = td3.textContent

      function update2(event) {
        event.preventDefault()

        let product = productInput.value
        let count = countInput.value
        let price = priceInput.value

        let headers = {
            method: 'PATCH',
            body: JSON.stringify({product, count, price})
        }
        
           fetch(`${BASE_URL}${id}`, headers)
           .then( () => {
            productInput.value = ''
            countInput.value = ''
            priceInput.value = ''
            updateButton.disabled = true
            addButton.disabled = false
            load()
        })
       }

    }

}

solve()

// "1840a313-225c-416a-817a-9954d4609f7c": {
//     "product": "Milk",
//     "count": "2",
//     "price": "3",
//     "_id": "1840a313-225c-416a-817a-9954d4609f7c"
// }