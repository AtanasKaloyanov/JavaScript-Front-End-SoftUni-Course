function attachEvents() {
    // 1. Adding the post button a function and then implementing it:
    let postsButton = document.getElementById('btnLoadPosts');
    postsButton.addEventListener('click', loadPosts);
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';

    let select = document.getElementById('posts');
    let allPosts = null;

    // The function itself:
    function loadPosts() {
        fetch(POSTS_URL)
            .then((response) => response.json())
            .then((posts) => {
                allPosts = posts;
                showPosts(posts);
            });
    }

    // 2. Adding the viewButton a function:
    let viewButton = document.getElementById('btnViewPost');
    viewButton.addEventListener('click', viewPosts);
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    let postTitleC = document.getElementById('post-title');
    let postBodyC = document.getElementById('post-body');
    let commentsC = document.getElementById('post-comments');
    
    // The function itself:
    function viewPosts() {
        // 2.1. Removing of the old post information:
        postTitleC.textContent = '';
        postBodyC.textContent = '';
        commentsC.textContent = '';

        // 2.2. Getting the selected post:
        let optionsIndex = select.selectedIndex;
        let optionsSelected = select.options[optionsIndex];
        let searchedPostId = optionsSelected.value;
        let searchedPost = allPosts[searchedPostId];

        // 2.3. Getting the searched post information:
        let postBody = searchedPost.body;
        let postId = searchedPost.id;
        let postTitle = searchedPost.title;

        // 2.4. Showing the title and the body of the post:
        postTitleC.textContent = postTitle;
        postBodyC.textContent = postBody;

        // 2.5. Fetching and showing of the comments:
        fetch(COMMENTS_URL)
            .then((response) => response.json())
            .then(showComments(postId));
    }

    function showComments(postId) {
        return (comments) => {
            Object.entries(comments)
                .forEach(([id, comment]) => {
                    let currentPostId = comment.postId;
                    if (postId === currentPostId) {
                        let commentText = comment.text;
                        let li = document.createElement('li');
                        li.textContent = commentText;
                        commentsC.appendChild(li);
                    }

                });
        };
    }

    function showPosts(posts) {
        // Removing of the old options:  
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    
        Object.entries(posts)
            .forEach(([id, post]) => {
                let title = (post.title).toUpperCase();
                let option = document.createElement('option');
                option.value = id;
                option.textContent = title;
                select.appendChild(option);
            });
    };
}

attachEvents();


 /*
   Asynchronous Programming post:

-MSbzSdzWBvBHJN7gdRw
 
body:  "Nesciunt facere, omnis exercitationem neque quisquam optio quidem distinctio laboriosam libero consequuntur aperiam, id possimus accusamus ad eaque quis quas molestiae. Esse praesentium cumque quae nobis atque eligendi commodi nam dolores, aperiam vero quia quaerat, soluta, maiores molestiae voluptatum. Modi doloribus consequatur explicabo enim, voluptate nostrum amet expedita natus tempore exercitationem nesciunt quasi quidem eaque."
id:  "-MSbzSdzWBvBHJN7gdRw"
title:  "Asynchronous Programming"

    Asynchronous Programming comments:

    */

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