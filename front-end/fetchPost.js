function checkForArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    if (articleId) {
        getArticle(articleId);
    } else {
        showMissingArticleMsg("An article can't be retrieved without an ID.");
    }
}

function getArticle(id) {
    const article_url = `http://localhost:1337/api/blog-posts/${id}?populate=BlogImage`

    fetch(article_url).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("article-title").innerHTML = data.data.attributes.Title;
        document.getElementById("publish-date").innerHTML = data.data.attributes.publishedAt;
        document.getElementById("article-img").src = `http://localhost:1337${data.data.attributes.BlogImage.data.attributes.formats.medium.url}`
        document.getElementById("description").innerHTML = data.data.attributes.Description;
    })
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    })
}

checkForArticle();