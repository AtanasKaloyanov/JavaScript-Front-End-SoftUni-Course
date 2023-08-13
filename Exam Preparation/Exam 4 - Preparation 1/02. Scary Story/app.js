window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name')
  let lastName = document.getElementById('last-name')
  let age = document.getElementById('age')
  let storyTitle = document.getElementById('story-title')
  let genre = document.getElementById('genre')
  let story = document.getElementById('story')


  let button = document.getElementById('form-btn')
  button.addEventListener('click', byClick)

  function byClick() {
    if (firstName.value == '' ||
      lastName.value == '' ||
      age.value == '' ||
      storyTitle.value == '' ||
      story.value == '') {
      return
    }

    let ul = document.getElementById('preview-list')
    let li = document.createElement('li')
    li.className = 'story-info'

    // 1
    let article = document.createElement('article')

    //1.1
    let h4 = document.createElement('h4')
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value
    h4.textContent = 'Name: ' + firstNameValue + ' ' + lastNameValue

    //1.2
    let p1 = document.createElement('p')
    let ageValue = age.value
    p1.textContent = 'Age: ' + ageValue

    //1.3
    let p2 = document.createElement('p')
    let storyTitleValue = storyTitle.value
    p2.textContent = 'Title: ' + storyTitleValue

    //1.4
    let p3 = document.createElement('p')
    let genreValue = genre.value
    p3.textContent = 'Genre: ' + genreValue

    //1.5
    let p4 = document.createElement('p')
    p4.textContent = story.value

    article.appendChild(h4)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)
    article.appendChild(p4)

    // 2
    let button2 = document.createElement('button')
    button2.className = 'save-btn'
    button2.textContent = 'Save Story'

    // 3
    let button3 = document.createElement('button')
    button3.className = 'edit-btn'
    button3.textContent = 'Edit Story'

    // 4
    let button4 = document.createElement('button')
    button4.className = 'delete-btn'
    button4.textContent = 'Delete Story'

    li.appendChild(article)
    li.appendChild(button2)
    li.appendChild(button3)
    li.appendChild(button4)

    ul.appendChild(li)

    firstName.value = ''
    lastName.value = ''
    age.value = ''
    storyTitle.value = ''
    story.value = ''

    button.disabled = true

    // edit button
    button3.addEventListener('click', byClick2)
    function byClick2() {
      ul.removeChild(li)

      firstName.value = firstNameValue
      lastName.value = lastNameValue
      age.value = ageValue
      storyTitle.value = storyTitleValue
      story.value = p4.textContent

      button.disabled = false
      // button2.disabled = true
      // button3.disabled = true
      // button4.disabled = true


    }

    // save button
    button2.addEventListener('click', byClick3)
    function byClick3() {
      let main = document.getElementById('main')

      let firstDiv = document.getElementsByClassName('form-wrapper')[0]
      let secondDiv = document.getElementById('side-wrapper')

      main.removeChild(firstDiv)
      main.removeChild(secondDiv)

      let h1 = document.createElement('h1')
      h1.textContent = 'Your scary story is saved!'

      main.appendChild(h1)
    }

    // delete button 
    button4.addEventListener('click', byClick4)

    function byClick4() {
      ul.removeChild(li)
      button.disabled = false
    }
  }

}

/* <body class="body">
  <div id="main">
    <div class="form-wrapper">
      <h1>
        Write your scary story
        <span>Fill the author information, genre and the story text!</span>
      </h1>
      <form>
        <div class="section"><span>&#9753;</span>Author Information</div>
        <div class="inner-wrap">
          <label>First Name: <input type="text" id="first-name" name="field1" /></label>
          <label>Last Name: <input type="text" id="last-name" name="field2" /></label>
          <label>Age: <input type="number" id="age" name="field3" /></label>
          </label>
          <label>Story Title:
            <input type="text" id="story-title" name="field5" />
          </label>
          <label>Genre:
            <select name="field4" id="genre">
              <option value="Disturbing">Disturbing</option>
              <option value="Psychological">Psychological</option>
              <option value="Killer">Killer</option>
              <option value="Monsters">Monsters</option>
              <option value="Paranormal">Paranormal</option>
            </select>
        </div>

        <div class="section"><span>&#9753;</span>Story</div>
        <div class="inner-wrap">
          <label for="story">Your Story:</label>
          <textarea id="story" name="story" rows="6" cols="50"></textarea>
        </div>
        <div class="button-section">
          <input type="button" id="form-btn" value="Publish" />
        </div>
      </form>
    </div>
    <div id="side-wrapper">
      <ul id="preview-list">
        <h3>Preview</h3>
      </ul>
    </div>
  </div>
  <script src="app.js"></script>
</body> */