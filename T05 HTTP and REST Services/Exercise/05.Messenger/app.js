function attachEvents() {
    // 1. Post request:
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', postData);
    const DATA_URL = 'http://localhost:3030/jsonstore/messenger';

    function postData() {
        let array = document.getElementById('controls').children;
        let author = array[0].children[1].value;
        let content = array[1].children[1].value;

        let data = {};
        data['author'] = author;
        data['content'] = content;

        let JSONdata = JSON.stringify(data);

        fetch(DATA_URL, {
            method: 'POST',
            body: JSONdata
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    // 2. Get Request:
    let refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', getData);

    let textArea = document.getElementById('messages');
    textArea.disabled = false;

    function getData() {
        fetch(DATA_URL)
            .then((response) => response.json())
            .then(showData())
    }

    function showData() {
        return (data) => {
            let entries = Object.entries(data);
            for (let i = 0; i < entries.length; i++) {
                let currentEntry = entries[i];
                let currentValue = currentEntry[1];
                let author = currentValue.author;
                let content = currentValue.content;
                let currentRow = author + ': ' + content;

                if (i != entries.length - 1) {
                    currentRow += '\n';
                }

                textArea.value += currentRow;
            }

        };
    }
}

attachEvents();

/*

    <div id="main">
        <textarea id="messages" cols="80" rows="12" disabled="true"></textarea>
        <div id="controls">
            <div>
                <label for="author">Name: </label>
                <input name="author" type="text"><br>
            </div>
            <div>
                <label for="content">Message: </label>
                <input name="content" type="text">
            </div>
            <input id="submit" type="button" value="Send">
            <input id="refresh" type="button" value="Refresh">
        </div>
    </div>

*/