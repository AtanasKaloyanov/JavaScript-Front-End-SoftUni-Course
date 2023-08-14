window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre')
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')

    let button = document.getElementById('add-btn')
    button.type = 'button'
    button.addEventListener('click', byClick)


    function byClick() {

        if (genre.value == '' ||
            name.value == '' ||
            author.value == '' ||
            date.value == '') {
            return
        }

        let container = document.getElementsByClassName
            ('all-hits-container')[0]

        // new container
        let newContainer = document.createElement('div')
        newContainer.className = 'hits-info'

        // 0
        let img = document.createElement('img')
        img.src = "./static/img/img.png"

        // 1
        let h2 = document.createElement('h2')
        let genreValue = genre.value
        h2.textContent = 'Genre: ' + genreValue

        // 2
        let h22 = document.createElement('h2')
        let nameValue = name.value
        h22.textContent = 'Name: ' + nameValue

        // 3
        let h23 = document.createElement('h2')
        let authorValue = author.value
        h23.textContent = 'Author: ' + authorValue

        // 4
        let h3 = document.createElement('h3')
        let dateValue = date.value
        h3.textContent = 'Date: ' + dateValue

        // 5 save button
        let saveButton = document.createElement('button')
        saveButton.className = 'save-btn'
        saveButton.textContent = 'Save song'

        // 6 like button
        let likeButton = document.createElement('button')
        likeButton.className = 'like-btn'
        likeButton.textContent = 'Like song'

        // 7 delete button
        let deleteButton = document.createElement('button')
        deleteButton.className = 'delete-btn'
        deleteButton.textContent = 'Delete'

        newContainer.appendChild(img)
        newContainer.appendChild(h2)
        newContainer.appendChild(h22)
        newContainer.appendChild(h23)
        newContainer.appendChild(h3)
        newContainer.appendChild(saveButton)
        newContainer.appendChild(likeButton)
        newContainer.appendChild(deleteButton)

        container.appendChild(newContainer)

        genre.value = ''
        name.value = ''
        author.value = ''
        date.value = ''

        // like button

        likeButton.addEventListener('click', byClick2)
        function byClick2() {
            let element = document.getElementsByClassName('likes')[0].children[0]
            let array = element.textContent.split(': ')
            element.textContent = array[0] + ": " + (Number.parseInt(array[1]) + 1)
            likeButton.disabled = true
        }

        // save button
        saveButton.addEventListener('click', byClick3)
        function byClick3() {
            newContainer.removeChild(likeButton)
            newContainer.removeChild(saveButton)
            let hitsContainer = document.getElementsByClassName('saved-container')[0]
            hitsContainer.appendChild(newContainer)


        // delete button
            deleteButton.addEventListener('click', byClick4)
            function byClick4() {
                hitsContainer.removeChild(newContainer)
            }
        }


    }
}


/* <section id="welcome" class="background-image">
<div class="home-container">
    <div class="info">
        <h1>Music for everyone.</h1>
    </div>
</div>
</section>

<div id="wrapper">

<section id="append-song">
    <div class="first-container">
        <img src="./static/img/hero-bg.png.png" alt="image">

        <div class="container-text">
            <h2>Add song.</h2>
            <p>Join the world of music, add the latest hits.</p>

            <form action="">
                <label for="genre">Genre:</label>
                <input type="text" id="genre" name="genre" placeholder="Pop">

                <label for="name">Name of the song:</label>
                <input type="text" id="name" name="name" placeholder="Pon de Replay">

                <label for="author">Author of the song:</label>
                <input type="text" id="author" name="author" placeholder="Rihanna">

                <label for="date">Date of creation:</label>
                <input type="text" id="date" name="date" placeholder="26.11.2009">

                <button id="add-btn" type="submit">Add</button>
            </form>
            <span>No spams included</span>

        </div>
    </div>
</section>

<section id="all-hits">
    <div class="all-hits-container">
        <h1>Collection of songs</h1>

    </div>
</section>

<section id="saved-hits">
    <div class="saved-container">
        <h1>Saved songs</h1>

    </div>
</section>

<section id="total-likes">
    <div class="likes">
        <p>Total Likes: 0</p>
        <img src="./static/img/like-btn.jpg" alt="image-like">
    </div>
</section>

</div>

<footer>@JS Advanced Exam - Music Site </footer>
<script src="app.js"></script>
</body> */