function solve() {

    // "location": "Sofia",
    //     "temperature": "32",
    //     "date": "2023-07-15",
    //     "_id": "07f260f4-466c-4607-9a33-f7273b24f1b4"

    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    let locationInput = document.getElementById('location')
    let temperatureInput = document.getElementById('temperature')
    let dateInput = document.getElementById('date')

    let addButton = document.getElementById('add-weather')
    addButton.addEventListener('click', add)

    let editButton = document.getElementById('edit-weather')


    let loadButton = document.getElementById('load-history')
    loadButton.addEventListener('click', load)

    let container = document.getElementById('list')


    function load(event) {

        if (event) {
            event.preventDefault()
        }

        container.innerHTML = ''

        fetch(BASE_URL)
            .then((result) => result.json())
            .then((result) => {
                let values = Object.values(result)

                for (let { location, temperature, date, _id } of values) {

                    let newElement = document.createElement('div')
                    newElement.className = 'container'
                    newElement.id = _id

                    // 1
                    let h2 = document.createElement('h2')
                    h2.textContent = location

                    // 2
                    let h3 = document.createElement('h3')
                    h3.textContent = date

                    // 3
                    let h32 = document.createElement('h3')
                    h32.id = 'celsius'
                    h32.textContent = temperature

                    // 4
                    let btnContainer = document.createElement('div')
                    btnContainer.className = 'buttons-container'

                    // 4.1
                    let changeBTN = document.createElement('button')
                    changeBTN.className = 'change-btn'
                    changeBTN.textContent = 'Change'
                    changeBTN.addEventListener('click', edit)
                    console.log(changeBTN)

                    // 4.2
                    let deleteBTN = document.createElement('button')
                    deleteBTN.className = 'delete-btn'
                    deleteBTN.textContent = 'Delete'
                    deleteBTN.addEventListener('click', deletE)

                    newElement.appendChild(h2)
                    newElement.appendChild(h3)
                    newElement.appendChild(h32)

                    btnContainer.appendChild(changeBTN)
                    btnContainer.appendChild(deleteBTN)
                    newElement.appendChild(btnContainer)

                    container.appendChild(newElement)

                    editButton.disabled = true

                }
            })


    }

    function add(event) {
        event.preventDefault()

        let location = locationInput.value
        let temperature = temperatureInput.value
        let date = dateInput.value

        let headers = {
            method: 'POST',
            body: JSON.stringify({ location, temperature, date })
        }

        fetch(BASE_URL, headers)
            .then(() => {
                load()
                locationInput.value = ''
                temperatureInput.value = ''
                dateInput.value = ''
            })
    }

    function deletE(event) {
        event.preventDefault()

        let current = event.currentTarget
        let parent = current.parentNode
        let parent2 = parent.parentNode
        let id = parent2.id

        let headers = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, headers)
            .then(() => load())
    }

    function edit(event) {
        event.preventDefault()

        let element = event.currentTarget.parentNode.parentNode
        console.log(element)


        console.log(element.children)
        let [h2, h3, h32, btnContainer] = element.children
        console.log(h2)
        console.log(h3)
        console.log(h32)


        locationInput.value = h2.textContent
        temperatureInput.value = h32.textContent
        dateInput.value = h3.textContent

        editButton.disabled = false
        addButton.disabled = true

        container.removeChild(element)

        let editButton2 = document.getElementById('edit-weather')
        editButton2.addEventListener('click', edit2)


        function edit2(event) {

            let location = locationInput.value
            let temperature = temperatureInput.value
            let date = dateInput.value


            let id = element.id

            let headers = {
                method: 'PUT',
                body: JSON.stringify({ location, temperature, date })
            }

            fetch(`${BASE_URL}${id}`, headers)
                .then(() => {
                    load
                    locationInput.value = ''
                    temperatureInput.value = ''
                    dateInput.value = ''
                })
        }
    }



}

solve()