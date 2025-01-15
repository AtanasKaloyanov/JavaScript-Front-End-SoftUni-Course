function loadCommits() {
    // 1. Getting the username and repository:
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let container = document.getElementById('commits');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const baseURL = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(baseURL)
        .then( (response) => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            return response.json();
        })
        .then( (data) => {
            for (let i = 0; i < data.length; i++) {
                let commit = data[i].commit;
                let li = document.createElement('li');
                li.textContent = `${commit.author.name}: ${commit.message}`;
                container.append(li);
            }
        })
        .catch( (error) => {
            let li = document.createElement('li');
            li.textContent = `Error: ${error.message} (Not Found)`;
            container.append(li);
        })

}

/*

<body>
    GitHub username:
    <input type="text" id="username" value="nakov" /> <br>
    Repo: <input type="text" id="repo" value="nakov.io.cin" />
    <button onclick="loadCommits()">Load Commits</button>
    <ul id="commits"></ul>
    <script src="./app.js"></script>
</body>

*/