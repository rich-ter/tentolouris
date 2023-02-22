
function fetchData(){

    const PROJECT_ID = "lmk4epg5";
    const DATASET = "production";
    const CDN_URL = 'https://cdn.sanity.io/images/lmk4epg5/production/'

    let QUERY = encodeURIComponent('*[_type == "post"]{_id,title,publishedAt,mainImage}');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    function fixImageUrl(imageUrl){
        removingThePrefix = imageUrl.replace('image-', '')
        removingTheSuffix = removingThePrefix.replace('-jpg', '.jpg')
        return removingTheSuffix
    }

    fetch(URL)
        .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.result)
        const html = data.result.map (blog=> {
            console.log(`the url of the ${blog.title} is: ${CDN_URL}${fixImageUrl(blog.mainImage.asset._ref)}`)
                return `
                    <div class="card blog-post w-dyn-item">
              <a href=${`./detail_post.html?id=${blog._id}`} class="blog-post-wrapper w-inline-block"><img src=${`${CDN_URL}${fixImageUrl(blog.mainImage.asset._ref)}`} alt="" class="blog-post-image">

                <div class="card-content" >
                  <div class="blog-post-date">${blog.publishedAt}</div>
                  <h3 class="blog-post-title">${blog.title}</h3>
                  <p id="api-date">Api excerpt</p>
                  <div class="blog-post-link-wrapper">
                    <div class="blog-post-link">διαβαστε περισσοτερα</div><img src="images/large-arrow-icon.svg" data-w-id="d4b60062-1bf3-e6ec-d67e-d5782210c8b7" alt="" class="arrow-large">
                  </div>
                </div>
              </a>
            </div>
                `;
            })
            .join("")
        document.querySelector('#api-render').innerHTML = ("afterbegin", html);
    })
};

    
fetchData();