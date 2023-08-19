window.addEventListener("load", solve);

function solve() {
  let playerInput = document.getElementById('player')
  let scoreInput = document.getElementById('score')
  let roundInput = document.getElementById('round')

  let addButton = document.getElementById('add-btn')

  let container = document.getElementById('sure-list')

  addButton.addEventListener('click', add)

  let clearButton = document.getElementsByClassName('btn clear')[0]
  clearButton.addEventListener('click', clear)

  function clear() {
    location.reload()
  }

  function add(event) {

    event.preventDefault()

    if (playerInput.value == '' ||
      scoreInput.value == '' ||
      roundInput.value == '') {
      return
    }

    let li = document.createElement('li')
    li.className = 'dart-item'

    // 1
    let article = document.createElement('article')

    //1.1
    let p1 = document.createElement('p')
    p1.textContent = playerInput.value

    //1.2
    let p2 = document.createElement('p')
    p2.textContent = 'Score: ' + scoreInput.value

    // 1.3
    let p3 = document.createElement('p')
    p3.textContent = 'Round: ' + roundInput.value

    // 2
    let editButton = document.createElement('button')
    editButton.className = 'btn edit'
    editButton.textContent = 'edit'

    editButton.addEventListener('click', edit)

    // 3
    let okButton = document.createElement('button')
    okButton.className = 'btn ok'
    okButton.textContent = 'ok'

    okButton.addEventListener('click', ok)

    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)

    li.appendChild(article)
    li.appendChild(editButton)
    li.appendChild(okButton)

    container.appendChild(li)

    roundInput.value = ''
    scoreInput.value = ''
    playerInput.value = ''

    addButton.disabled = true

    function edit() {
      container.removeChild(li)
      addButton.disabled = false

      playerInput.value = p1.textContent
      scoreInput.value = p2.textContent.split(': ')[1]
      roundInput.value = p3.textContent.split(': ')[1]
    }

    function ok() {
      container.removeChild(li)

      li.removeChild(editButton)
      li.removeChild(okButton)

      addButton.disabled = false

      let newCont = document.getElementById('scoreboard-list')
      console.log(newCont)
      console.log(li)
      newCont.appendChild(li)
    }

  }

}
