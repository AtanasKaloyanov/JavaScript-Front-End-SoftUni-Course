window.addEventListener("load", solve);

function solve() {

    let firstInput = document.getElementById('task-title')
    let secondInput = document.getElementById('task-category')
    let textArea = document.getElementById('task-content')

    let button = document.getElementById('publish-btn')
    button.addEventListener('click', byClick)

    function byClick() {
        if (firstInput.value == '' ||
        secondInput.value == '' ||
        textArea.value == '') {
        return
    }

        let ul = document.getElementById('review-list')
        let li = document.createElement('li')
        li.className = 'rpost'

        // 1
        let article = document.createElement('article')

        // 1.1
        let h4 = document.createElement('h4')
        h4.textContent = firstInput.value

        // 1.2
        let p1 = document.createElement('p')
        let info1 = secondInput.value
        p1.textContent = 'Category: ' + info1


        // 1.3
        let p2 = document.createElement('p')
        let info2 = textArea.value
        p2.textContent = 'Content: ' + info2

        article.appendChild(h4)
        article.appendChild(p1)
        article.appendChild(p2)

        // 2 
        let buttoN = document.createElement('button')
        buttoN.className = 'action-btn edit'
        buttoN.textContent = 'Edit'

        // 3
        let buttoN2 = document.createElement('button')
        buttoN2.className = 'action-btn post'
        buttoN2.textContent = 'Post'

        li.appendChild(article)
        li.appendChild(buttoN)
        li.appendChild(buttoN2)

        ul.appendChild(li)

        firstInput.value = ''
        secondInput.value = ''
        textArea.value = ''

        buttoN.addEventListener('click', byClick2)
        function byClick2() {
            ul.removeChild(li)

            firstInput.value = h4.textContent
            secondInput.value = info1
            textArea.value = info2
        }

        buttoN2.addEventListener('click', byClick3)
        function byClick3() {
            ul.removeChild(li)
            li.removeChild(buttoN)
            li.removeChild(buttoN2)

            let secondUl = document.getElementById('published-list')
            secondUl.appendChild(li)
        }

    }
}


/* <body>
<div id="main-container">
  <div id="left-container">

    <div id="newPost" class="container">

      <form class="newPostContent">
        <h1>Add New Task</h1>
        <input type="text" placeholder="Enter title here" id="task-title" />

        <input type="text" placeholder="Enter category here" id="task-category" />

        <textarea placeholder="Add content..." id="task-content"></textarea>

        <button type="button" id="publish-btn">Publish</button>
      </form>
    </div>
  </div>

  <div id="middle-container">

    <div id="relatedPosts" class="container">

      <div class="bar title-bar">
        <h2>Task for review:</h2>
      </div>


      <ul id="review-list">

      </ul>

    </div>
    <div id="published-container">
      <div class="container">
        <div class="bar title-bar">
          <h2>Uploaded Task:</h2>
        </div>

        <ul id="published-list">

        </ul>
      </div>
    </div>
    <script src="./app.js"></script>
</body> */