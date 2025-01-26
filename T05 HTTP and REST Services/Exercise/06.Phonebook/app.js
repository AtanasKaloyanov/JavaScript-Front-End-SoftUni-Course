function attachEvents() {
    let loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', loadPhones);
    const LOAD_AND_POST_NUMBERS = 'http://localhost:3030/jsonstore/phonebook';

    let phonesContainer = document.getElementById('phonebook');
    
    function loadPhones() {
         
    }

    const DELETE_NUMBERS = `http://localhost:3030/jsonstore/phonebook/${key}`;
    
}

attachEvents();

/*

<body>

    <h1>Phonebook</h1>
    <ul id="phonebook"></ul>
    <button id="btnLoad">Load</button>

    <h2>Create Contact</h2>
    Person: <input type="text" id="person" />
    <br>
    Phone: <input type="text" id="phone" />
    <br>
    <button id="btnCreate">Create</button>
    <script src="app.js"></script>

</body>

*/