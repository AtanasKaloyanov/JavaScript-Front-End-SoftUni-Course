function solve() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    let nameInput = document.getElementById('name')
    let daysInput = document.getElementById('num-days')
    let dateInput = document.getElementById('from-date')

    let loadBtn = document.getElementById('load-vacations')
    loadBtn.addEventListener('click', load)

    let editButton = document.getElementById('edit-vacation')

    let addButton = document.getElementById('add-vacation')
    addButton.addEventListener('click', add)

    let container = document.getElementById('list')

    function load(event) {
        if (event) {
            event.preventDefault()
        }
        editButton.disabled = true

        container.innerHTML = ''

        fetch(BASE_URL)
            .then((result) => result.json())
            .then((result) => {

                let values = Object.values(result)

                for (let { name, days, date, _id } of values) {

                    let div = document.createElement('div')
                    div.className = 'container'
                    div.id = _id

                    // 1
                    let h2 = document.createElement('h2')
                    h2.textContent = name

                    // 2
                    let h3 = document.createElement('h3')
                    h3.textContent = date

                    // 3
                    let h32 = document.createElement('h3')
                    h32.textContent = days

                    // 4
                    let changeBtn = document.createElement('button')
                    changeBtn.textContent = 'Change'
                    changeBtn.className = 'change-btn'
                    changeBtn.addEventListener('click', edit)

                    // 5
                    let doneBtn = document.createElement('button')
                    doneBtn.textContent = 'Done'
                    doneBtn.className = 'done-btn'
                    doneBtn.addEventListener('click', remove)

                    div.appendChild(h2)
                    div.appendChild(h3)
                    div.appendChild(h32)
                    div.appendChild(changeBtn)
                    div.appendChild(doneBtn)

                    container.appendChild(div)
                }
            })

    }

    function add(event) {

        event.preventDefault()

        let name = nameInput.value
        let days = daysInput.value
        let date = dateInput.value

        let headers = {
            method: 'POST',
            body: JSON.stringify({ name, days, date })
        }

        fetch(BASE_URL, headers)
            .then(() => {
                dateInput.value = ''
                daysInput.value = ''
                nameInput.value = ''
                load()
            })
    }

    function remove(event) {
        let id = event.currentTarget.parentNode.id

        let headers = {
            method: 'DELETE',
        }

        fetch(`${BASE_URL}${id}`, headers)
            .then(() => load())
    }

    function edit(event) {
        editButton.disabled = false
        editButton.addEventListener('click', edit2)

        addButton.disabled = true

        let div = event.currentTarget.parentNode
        let [h2, h3, h32, changeBtn, doneBtn] = div.children

        nameInput.value = h2.textContent
        dateInput.value = h3.textContent
        daysInput.value = h32.textContent
        
        let id = div.id

        // container.removeChild(div)

        function edit2(event) {
            event.preventDefault()
            
            let name = nameInput.value
            let days = daysInput.value
            let date = dateInput.value

            let headers = {
                method: 'PUT',
                body: JSON.stringify({ name, days, date })

            }

            fetch(`${BASE_URL}${id}`, headers)
                .then(() => {
                    load()
                    nameInput.value = ''
                    dateInput.value = ''
                    daysInput.value = ''
                    editButton.disabled = true
                    addButton.disabled = false
                })
         }

    }
}

solve()



// "name": "David Mule",
//         "days": "5",
//         "date": "2023-07-09",
//         "_id": "07f260f4-466c-4607-9a33-f7273b24f1b4"