function attachEvents() {
    let postsButton = document.getElementById('btnLoadPosts');
    postsButton.addEventListener('click', loadPosts);
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';

    let select = document.getElementById('posts');
   
    let postS = null;
    function loadPosts() {
        fetch(POSTS_URL)
            .then((response) => response.json())
            .then((posts) => {
                showPosts(posts);
                postS = posts;
            });
    }

    let viewButton = document.getElementById('btnViewPost');
    viewButton.addEventListener('click', viewPosts);
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    function viewPosts() {
        console.log(postS);
        fetch(COMMENTS_URL)
            .then((response) => response.json())
            .then((comments) =>
                Object.entries(comments)
                    .forEach( ([key, value]) => {
                        console.log(key);
                        console.log(value);
                        let id = value.id;
                        let postId = value.postId;
                        let text = value.text;
                        
                        /*
-MSbzSdzWBvBHJN7gdRw
 
body:  "Nesciunt facere, omnis exercitationem neque quisquam optio quidem distinctio laboriosam libero consequuntur aperiam, id possimus accusamus ad eaque quis quas molestiae. Esse praesentium cumque quae nobis atque eligendi commodi nam dolores, aperiam vero quia quaerat, soluta, maiores molestiae voluptatum. Modi doloribus consequatur explicabo enim, voluptate nostrum amet expedita natus tempore exercitationem nesciunt quasi quidem eaque."
id:  "-MSbzSdzWBvBHJN7gdRw"
title:  "Asynchronous Programming"

                        */
                    }));
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
    <postsButton id="btnLoadPosts">Load Posts</postsButton>
    <select id="posts"></select>
    <postsButton id="btnViewPost">View</postsButton>
    <h1 id="post-title">Post Details</h1>
    <p id="post-body"></p>
    <h2>Comments</h2>
    <ul id="post-comments"></ul>
    <script src="app.js"></script>
</body>

*/