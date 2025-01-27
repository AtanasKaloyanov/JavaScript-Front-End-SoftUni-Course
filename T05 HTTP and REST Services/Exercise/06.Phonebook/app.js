function attachEvents() {
    // 1. Get request:
    let loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', loadPhones);
    const LOAD_AND_POST_NUMBERS = 'http://localhost:3030/jsonstore/phonebook';

    let phonesUl = document.getElementById('phonebook');

    function loadPhones() {
        while (phonesUl.firstChild) {
            phonesUl.removeChild(phonesUl.firstChild);
        }

        fetch(LOAD_AND_POST_NUMBERS)
            .then((response) => response.json())
            .then(showNumbers())
    }

    // 2. Post request:
    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', addNumber);

    function addNumber() {
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');
        let personText = person.value;
        let phoneText = phone.value;

        let data = {
            person: personText,
            phone: phoneText
        };

        let methodAndBody = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch(LOAD_AND_POST_NUMBERS, methodAndBody);
        person.value = '';
        phone.value = '';
    }

    function showNumbers() {
        return (data) => {
            let entries = Object.entries(data);
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                let currentPhone = entry[1];
                let id = currentPhone._id;
                let person = currentPhone.person;
                let phone = currentPhone.phone;
                let li = document.createElement('li');
                li.id = id;
                let textContent = `${person}: ${phone}`;
                li.textContent = textContent;
                let button = document.createElement('button');
                button.textContent = 'Delete';
                button.addEventListener('click', del);
                li.appendChild(button);
                phonesUl.appendChild(li);
            }

            console.log(data);
        };

        // 3. Delete
        function del(event) {
            let button = event.currentTarget;
            let li = button.parentElement;
            phonesUl.removeChild(li);
            let key = li.id;
            const DELETE_NUMBERS = `http://localhost:3030/jsonstore/phonebook/${key}`;

            fetch(DELETE_NUMBERS, {method: 'DELETE'});
        }
    }
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