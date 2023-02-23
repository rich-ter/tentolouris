
function checkForArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    if (articleId) {
        getArticle(articleId);
    } else {
        showMissingArticleMsg("An article can't be retrieved without an ID.");
    }
}

// a function to return the description as a json string
function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

function fixImageUrl(imageUrl){
    removingThePrefix = imageUrl.replace('image-', '')
    removingTheSuffix = removingThePrefix.replace('-jpg', '.jpg')
    return removingTheSuffix
}

function returnShortDate(date){
    return date.slice(0,10)
}

function getArticle(id) {
    const PROJECT_ID = "lmk4epg5";
    const DATASET = "production";
    const CDN_URL = 'https://cdn.sanity.io/images/lmk4epg5/production/'

    let QUERY = encodeURIComponent(`*[_id == "${id}"]{title,mainImage,body, publishedAt,'category_title': categories->title }`);

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;


    fetch(URL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.result)
        document.getElementById("article-category").innerHTML = data.result[0].category_title;
        document.getElementById("article-title").innerHTML = data.result[0].title;
        document.getElementById("publish-date").innerHTML = returnShortDate(data.result[0].publishedAt);
        document.getElementById("article-img").src = `${CDN_URL}${fixImageUrl(data.result[0].mainImage.asset._ref)}`
        document.getElementById("description").innerHTML = toPlainText(data.result[0].body);
    })
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    })
}

checkForArticle();