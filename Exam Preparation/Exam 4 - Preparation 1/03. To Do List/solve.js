// TODO
function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    let input = document.getElementById('title')
    let addButton = document.getElementById('add-button')
    addButton.addEventListener('click', add)

    let leadAllButton = document.getElementById('load-button')
    let ul = document.getElementById('todo-list')

    // load заявка
    leadAllButton.addEventListener('click', load)
    function load(event) {
        if (event) {
            event.preventDefault()
        }

        ul.innerHTML = ''

        fetch(BASE_URL)
            .then((result) => result.json())
            .then((result) => {

                let values = Object.values(result)

                for (let { name, _id } of values) {
                    let li = document.createElement('li')
                    li.id = _id

                    // 1
                    let span = document.createElement('span')
                    span.textContent = name

                    //2
                    let removeButton = document.createElement('button')
                    removeButton.textContent = 'Remove'
                    removeButton.addEventListener('click', remove)

                    //3
                    let editButton = document.createElement('button')
                    editButton.textContent = 'Edit'
                    editButton.addEventListener('click', edit)

                    li.appendChild(span)
                    li.appendChild(removeButton)
                    li.appendChild(editButton)

                    ul.appendChild(li)
                }
            })

    }

    // add заявка

    function add(event) {
        event.preventDefault()
        let name = input.value

        let headers = {
            method: 'POST',
            body: JSON.stringify({ name })
        }

        fetch(BASE_URL, headers)
            .then(() => {
                load()
                input.value = ''
            })
    }

    // remove заявка
    function remove(event) {
        let li = event.currentTarget.parentNode
        let id = li.id

        let headers = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, headers)
            .then(() => load())
    }

    // edit
    function edit(event) {
        event.preventDefault()
        let li = event.currentTarget.parentNode
        let [span, removeBtn, editBtn] = li.children
        
        let newInput = document.createElement('input')
        newInput.value = span.textContent

        let submitButton = document.createElement('button')
        submitButton.textContent = 'Submit'
        submitButton.addEventListener('click', edit2)

        li.removeChild(removeBtn)
        li.removeChild(span)

        li.prepend(newInput)
        li.appendChild(submitButton)
    }

    function edit2(event) {
        let li = event.currentTarget.parentNode
        let [input, removeBTN, submitBTN] = li.children
        
        let id = li.id
        let name = input.value

        let headers = {
            method: 'PATCH', 
            body: JSON.stringify({name})
        }

        fetch(`${BASE_URL}${id}`, headers)
        .then( () => load())
    }
}

attachEvents();

/* <li>
  <span>Go Shopping</span>
  <button>Remove</button>
  <button>Edit</button>
</li> */
