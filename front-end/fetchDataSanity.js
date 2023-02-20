
function fetchData(){

    const PROJECT_ID = "lmk4epg5";
    const DATASET = "production";
    
    let QUERY = encodeURIComponent('*[_type == "post"]{title,body,mainImage}');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
        .then(response => {
        return response.json();
    })
    .then(data => {
        const html = data.result.map (blog=> {
                return `
                    <div class="card blog-post w-dyn-item">
                <div class="card-content" >
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