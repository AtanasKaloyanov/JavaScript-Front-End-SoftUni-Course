function attachEvents() {
    let button = document.getElementById('btnLoadPosts');
    button.addEventListener('click', loadPosts);
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    let select = document.getElementById('posts');
    let postsS = null;

    function loadPosts() {
        fetch(POSTS_URL)
            .then((response) => response.json())
            .then( (posts) => { 
                postsS = posts;
                showPosts(posts);       
            });    
    }

    
    function showPosts(posts) {
            Object.entries(posts)
                .forEach(([key, value]) => {
                    let title = value.title;
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = title.toUpperCase();
                    select.appendChild(option);
                });
        };

        
    }

attachEvents();


/*

<body>
    <h1>All Posts</h1>
    <button id="btnLoadPosts">Load Posts</button>
    <select id="posts"></select>
    <button id="btnViewPost">View</button>
    <h1 id="post-title">Post Details</h1>
    <p id="post-body"></p>
    <h2>Comments</h2>
    <ul id="post-comments"></ul>
    <script src="app.js"></script>
</body>

*/