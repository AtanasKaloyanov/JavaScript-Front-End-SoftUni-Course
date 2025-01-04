function search() {
    // 1. Getting the input text and the towns elements:
    let input = document.getElementById('searchText');
    let towns = document.getElementById('towns').children;

    // 2. Getting the matches' number and adding the required style: 
    let counter = 0;
    for (let i = 0; i < towns.length; i++) {
        let town = towns[i];

        if (town.textContent.includes(input.value)) {
            towns[i].style="text-decoration: underline; font-weight: bold;"
            counter++;
        }
    }

    // 3. Adding the matches number and clearing the text from the input:
    let result = document.getElementById('result');
    result.textContent = `${counter} matches found`;

    input.value = '';
}

/*

<body>
    <article>
        <ul id="towns">
            <li>Sofia</li>
            <li>Pleven</li>
            <li>Varna</li>
            <li>Plovdiv</li>
            <li>Dolna Bania</li>
            <li>Gorna Bania</li>
        </ul>
        <input type="text" id="searchText" />
        <button onclick="search()">Search</button>
        <div id="result"></div>
    </article>
</body>

*/