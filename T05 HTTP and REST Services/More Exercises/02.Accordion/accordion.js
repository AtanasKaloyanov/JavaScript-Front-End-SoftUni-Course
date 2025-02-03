solution();

function solution() {
    // 1. Get the articles:
    let container = document.getElementById('main');
    const ARTICLES_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const ARTICLE_DETAILS_URL = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    fetch(ARTICLES_URL)
        .then((response) => response.json())
        .then((articlesObj) => {
            let articles = Object.entries(articlesObj);
            Array.from(articles)
                .forEach(getInitInfo());
        });

    function getInitInfo() {
        return (article) => {
            // 2. Getting the values of the articles' fields:
            let currentArticle = article[1];
            let title = currentArticle.title;
            let id = currentArticle._id;
            // 3. Creating a container:
            let divCont = document.createElement('div');
            divCont.className = 'accordion';
            let divHead = document.createElement('div');
            divHead.className = 'head';
            // 4. Creating a span and a button:
            let span = document.createElement('span');
            span.textContent = title;
            let button = document.createElement('button');
            button.className = 'button';
            button.textContent = 'MORE';
            button.id = id;
            // 5. Getting the additional info via fetch: 

            fetchMoreInfo(id)
                .then( (divExtra) => {
                    divCont.appendChild(divExtra);
                    button.addEventListener('click', (event) => showMoreInfo(event, divExtra));
                });

            // 5. Appending the elements to the container: 
            divHead.appendChild(span);
            divHead.appendChild(button);
            divCont.appendChild(divHead);
            container.appendChild(divCont);
        }
    }

    async function fetchMoreInfo(id) {
        let divExtra = document.createElement('div');
        let response = await fetch(`${ARTICLE_DETAILS_URL}${id}`);
        let article = await response.json();

        let content = article.content;
        divExtra.className = 'extra';
        let p = document.createElement('p');
        p.textContent = content;
        divExtra.appendChild(p);
        return divExtra;
    }

    function showMoreInfo(event) {
        let button = event.currentTarget;
        let divCont = button.parentElement.parentElement;
        let divAddInfo = divCont.children[1];
        console.log(divAddInfo.display);
        divAddInfo.style.display = 'block';

        button.textContent = 'LESS';

        button.removeEventListener('click', showMoreInfo);
        button.addEventListener('click', removeAddInfo);
    }

    function removeAddInfo(event) {
        let button = event.currentTarget;
        let divCont = button.parentElement.parentElement;
        let divAddInfo = divCont.children[1];
        divAddInfo.style.display = 'none';

        button.textContent = 'MORE';

        button.removeEventListener('click', removeAddInfo);
        button.addEventListener('click', showMoreInfo);
    }
}

/*

<body>
    <section id="main">
        <!-- <div class="accordion">
            <div class="head">
                <span>Scalable Vector Graphics</span>
                <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
            </div>
            <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>
        </div> -->
    </section>
    <script src="accordion.js"></script>
</body>

*/