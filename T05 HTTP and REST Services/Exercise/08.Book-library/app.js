function attachEvents() {
    // 0. Declaring GET and POST url:
    const BOOKS_URL = 'http://localhost:3030/jsonstore/collections/books';

    // 1. Post request:
    let form = document.getElementById('form');
    let formElements = form.children;
    let submitButton = formElements[5];

    submitButton.addEventListener('click', addBook);
    function addBook() {
        let title = formElements[2];
        let author = formElements[4];

        let data = {
            author: author.value,
            title: title.value
        }

        let methodAndData = {
            method: 'POST',
            body: JSON.stringify(data)
        }

        fetch(BOOKS_URL, methodAndData);
        title.value = '';
        author.value = '';
    }

    // 2. Get request:
    let tbody = document.getElementsByTagName('tbody')[0];
    // let initialRows = tbody.children;
    // Array.from(initialRows)
    //     .forEach((row) => {
    //         let buttons = row.children[2].children;
    //         let editButton = buttons[0];
    //         let delButton = buttons[1];
    //         editButton.addEventListener('click', editBook)
    //         delButton.addEventListener('click', delBook);
    //     })

    let loadButton = document.getElementById('loadBooks');
    loadButton.addEventListener('click', loadBooks);

    function loadBooks() {
        // 2.1. Deleting the old elements:
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        // 2.2. Fetching the book and showing them
        fetch(BOOKS_URL)
            .then((response) => response.json())
            .then(showBooks());

        function showBooks() {
            return (books) => {
                let collection = Object.entries(books);
                console.log(collection);
                collection.forEach((book) => {
                    let currentId = book[0];
                    let currentBook = book[1];
                    let currentTitle = currentBook.title;
                    let currentAuthor = currentBook.author;

                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let editButton = document.createElement('button');
                    let deleteButton = document.createElement('button');

                    td1.textContent = currentTitle;
                    td2.textContent = currentAuthor;
                    editButton.textContent = 'Edit';
                    editButton.addEventListener('click', editBook);
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', delBook);
                    td3.appendChild(editButton);
                    td3.appendChild(deleteButton);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.id = currentId;
                    tbody.appendChild(tr);
                });
                console.log(books);
            };
            
        }

    }

      // 3. Delete request:
      function delBook(event) {
        let delButton = event.currentTarget;
        let tr = delButton.parentElement.parentElement;
        console.log(tr);
        let id = tr.id;
        const DELETE_BOOK_URL = `${BOOKS_URL}/${id}`;

        fetch(DELETE_BOOK_URL, { method: 'DELETE' });
        tbody.removeChild(tr);
    }

    // 4. Update request: 
    function editBook(event) {
        let editBitton = event.currentTarget;
        let tr = editBitton.parentElement.parentElement;

        let id = tr.id;
        const EDIT_BOOK_URL = `${BOOKS_URL}/${id}`;

        let title = formElements[2];
        let author = formElements[4];

        let data = {
            author: author.value,
            title: title.value
        }

        let methodAndData = {
            method: 'PUT',
            body: JSON.stringify(data)
        }

        fetch(EDIT_BOOK_URL, methodAndData);

        let td1 = tr.children[0];
        let td2 = tr.children[1];
        td1.textContent = title.value;
        td2.textContent = author.value;
        title.value = '';
        author.value = '';
    }
}

attachEvents();

/*

<body>
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Book 1</td>
                <td>Author 1</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>Book 2</td>
                <td>Author 2</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>

    <div id="form">
        <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button>Submit</button>
    </div>
    <script src="./app.js"></script>
</body>

*/