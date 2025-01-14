function loadRepos() {
	// 1. Getting the conatiner and removing their children:
	let conatainer = document.getElementById('repos');
	while (conatainer.firstChild) {
		conatainer.removeChild(conatainer.firstChild);
	}

	let form = document.getElementById('username');
	const username = form.value;
	const BASE_URL = `https://api.github.com/users/${username}/repos`;

	// 2. Then getting the repos via fetch API and adding every repo . The username 
    
	fetch(BASE_URL)
		.then( (repos) => repos.json())
		.then( (repos) => {
			for (let i = 0; i < repos.length; i++) {
				let currentRepo = repos[i];
				let newLi = document.createElement('li');
				let newA = document.createElement('a');
				let fullName = currentRepo.full_name;
				let htmlUrl = currentRepo.html_url;
				newA.href = htmlUrl;
				newA.textContent = fullName;
				newLi.append(newA);
				conatainer.append(newLi);
			}
		});

}

/*

<body>
	<label for="username">GitHub username:</label>
	<input type="text" id="username" value="k1r1L" />
	<button onclick="loadRepos()">Load Repos</button>
	<ul id="repos">
		<li>
			<a href="{repo.html_url}">
				{repo.full_name}
			</a>
		</li>
	</ul>
	<script src="./scripts/app.js"></script>
</body>

*/