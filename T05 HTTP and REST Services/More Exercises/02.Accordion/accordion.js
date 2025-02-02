solution();

function solution() {
    // 1. Get the articles:
    let container = document.getElementById('main');
    const ARTICLES_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';

    fetch(ARTICLES_URL)
        .then((response) => response.json())
        .then((articlesObj) => {
            let articles = Object.entries(articlesObj);
            Array.from(articles)
                .forEach((article) => {
                    let currentArticle = article[1];
                    let title = currentArticle.title;
                    let id = currentArticle._id;
                    
                    let divCont;
                });
        });
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