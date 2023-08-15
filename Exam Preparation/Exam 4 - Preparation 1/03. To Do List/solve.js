// TODO
function attachEvents() {
  // Base url - променлива, съдържаща първия url от задачата
  let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

  // взимане на инпута, двата бутона и ul container-a
  let titleInput = document.getElementById('title')
  let loadBtn = document.getElementById('load-button')
  let addBtn = document.getElementById('add-button')

  addBtn.addEventListener('click', addTaskHandler)

  let todoListContainer = document.getElementById('todo-list')

  // load event и функция

  loadBtn.addEventListener('click', loadTaskHandler)
  function loadTaskHandler(event) {
    // това се прави, защото стойността на атрибута type на бутона е 
    // submit
    if (event) {
      event.preventDefault()
    }

    // това се преави с цел да се "прочиства" HTML-a при повторно натискане на бутона
    todoListContainer.innerHTML = ''

    // взимане на данните от URL-a
    fetch(BASE_URL)
      // превръщане на данните от url-a в json
      .then((data) => data.json())
      // взимане на стойностите на обектите като
      .then((taskRes) => {
        const tasks = Object.values(taskRes)

        // цикъл, при който се разделя всеки един елемент на id и name
        for (const { _id, name } of tasks) {

          // създаване на нужната HTML структура, използвайки данните от цикъла
          const li = document.createElement('li')
          // "закачане" на id цел бъдещо използване
          li.id = _id

          const span = document.createElement('span')
          span.textContent = name

          const removeBtn = document.createElement('button')
          removeBtn.textContent = 'Remove'
          removeBtn.addEventListener('click', removeTaskHandler)

          const editBtn = document.createElement('button')
          editBtn.textContent = 'Edit'
          // добавяне на event за edit заявката
          editBtn.addEventListener('click', loadEditFormHandler)

          li.appendChild(span)
          li.appendChild(removeBtn)
          li.appendChild(editBtn)

          todoListContainer.appendChild(li)
        }
      })
      .catch((error) => console.log(error))


  }

  // edit заявка

  function loadEditFormHandler(event) {
    // вземане на li елемента
    const liParent = event.currentTarget.parentNode
    // вземане на масив от всички деца на li елемента
    const [span, _removeBtn, editBtn] = Array.from(liParent.children)

    // създаване на нов input и добавянето му като първо дете на li елемента чрез пprepend 
    const editInput = document.createElement('input')
    editInput.value = span.textContent
    liParent.prepend(editInput)

    // създаване на нов submit buton и добавянето му накрая на li елемента
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    // добавяне на Patch заявка към submit бутона
    submitBtn.addEventListener('click', submitTaskHandler)

    liParent.appendChild(submitBtn)

    liParent.removeChild(span)
    liParent.removeChild(editBtn)

  }

  function submitTaskHandler(event) {
    //    взимане на id на li елемента и неговото id
    const li = event.currentTarget.parentNode
    const id = li.id
    // взимане на input-a
    const [input] = Array.from(li.children)

    // headers
    const httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({ name: input.value })
    }

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then(() => loadTaskHandler())
      .catch((err) => {
        console.error(err)
      })
  }

  // функция за add заявка
  function addTaskHandler(event) {
    event.preventDefault()

    const name = titleInput.value
    const httpHeader = {
      method: 'POST',
      body: JSON.stringify({ name })
    }

    fetch(BASE_URL, httpHeader)
      .then(() => {
        loadTaskHandler()
        titleInput.value = ''
      })
      .catch( (err) => {
        console.error(err)
      })
  }

  function removeTaskHandler(event) {
    const li = event.currentTarget.parentNode
    const id = li.id

    const httpHeaders = {
      method: 'DELETE'
    }

    fetch(`${BASE_URL}${id}`, httpHeaders)
    .then( () => loadTaskHandler())
    .catch( (err) => console.error(err))
  }
}

attachEvents();

/* <li>
  <span>Go Shopping</span>
  <button>Remove</button>
  <button>Edit</button>
</li> */

/* <body>
  <div id="root">
    <form method="POST">
      <h2>Add Item</h2>
      <input  type="text" name="title" id="title" placeholder="Title" />
      <button id="add-button" type="submit">Add</button>
      <button id="load-button" type="submit">Load All</button>
    </form>

    <ul id="todo-list">  
    </ul>

  </div>
  <script src="./solve.js"></script> 
</body> */
