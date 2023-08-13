window.addEventListener("load", solve);

function solve() {
  let firstInput = document.getElementById('student')
  let secondInput = document.getElementById('university')
  let thirdInput = document.getElementById('score')

  // firstButton

  let button = document.getElementById('next-btn')
  button.addEventListener('click', byClick)

  function byClick() {
    if (
      firstInput.value == "" ||
      secondInput.value == "" ||
      thirdInput.value == ""
    ) {
      return;
    }

    let ul = document.getElementById('preview-list')

    let li = document.createElement('li')
    li.className = 'application'

    // 1
    let article = document.createElement('article')

    //1.1
    let h4 = document.createElement('h4')
    h4.textContent = firstInput.value
    firstInput.value = ''

    //1.2
    let p = document.createElement('p')
    let secondInputValue = secondInput.value
    p.textContent = 'University: ' + secondInputValue
    secondInput.value = ''

    //1.3
    let p2 = document.createElement('p')
    let thirdInputInputValue = thirdInput.value
    p2.textContent = 'Score: ' + thirdInputInputValue
    thirdInput.value = ''

    article.appendChild(h4)
    article.appendChild(p)
    article.appendChild(p2)

    //2
    let buttoN = document.createElement('button')
    buttoN.className = 'action-btn edit'
    buttoN.textContent = 'edit'

    //3
    let buttoN2 = document.createElement('button')
    buttoN2.className = 'action-btn apply'
    buttoN2.textContent = 'apply'

    li.appendChild(article)
    li.appendChild(buttoN)
    li.appendChild(buttoN2)

    ul.appendChild(li)

    // button.removeEventListener('click', byClick)
    button.disabled = true


// edit button click
    buttoN.addEventListener('click', byClick2)
    function byClick2() {
    
      firstInput.value = h4.textContent
      secondInput.value = secondInputValue
      thirdInput.value = thirdInputInputValue

      ul.removeChild(li)

      button.disabled = false
    }

    // apply button click

    buttoN2.addEventListener('click', byClick3)
    function byClick3() {
        ul.removeChild(li)

        let secondUl = document.getElementById('candidates-list')

        li.removeChild(buttoN)
        li.removeChild(buttoN2)
        secondUl.appendChild(li)
       
        button.disabled = false
    }

  }

}

/* <body>
    <main id="main">
      <div id="left-container">

        <div id="newApply" class="container">

          <form class="applyContent">
            <h1>Apply For Scholarship</h1>
           
            <input type="text" placeholder="Student Name" id="student" />
 
            <input type="text" placeholder="University" id="university" />

            <input type="number" placeholder="Score" id="score">

            <button type="button" id="next-btn">Next</button>
          </form>
        </div>
      </div>

      <div id="right-container">

        <div class="container">

          <div class="bar title-bar">
            <h2><span>&#9884;</span>Preview:</h2>
            <ul id="preview-list"></ul>
          </div>

        </div>
        
        <div id="candidates-container">
          <div class="container">
            <div class="bar title-bar board">
              <h2><span>&#9884;</span>Scholarship Candidates:</h2>
              <ul id="candidates-list"></ul>
            </div>

            
          </div>
        </main>
        <script src="./app.js"></script>
  </body> */
