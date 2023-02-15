
function fetchData(){

    const localhost = 'http://localhost:1337'
    const api_url = 'http://localhost:1337/api/blog-posts?populate=BlogImage'

    fetch(api_url)
        .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        data.data.map(blog => {
            console.log(blog)
            // console.log(blog.BlogImage.data.attributes)
            // console.log(blog.BlogImage.data.attributes)

        })

         
        const html = data.data
            .map (blog=> {
                return `
                    <div class="card blog-post w-dyn-item">
              <a href=${`./detail_post.html?id=${blog.id}`} class="blog-post-wrapper w-inline-block"><img src=${ localhost + blog.attributes.BlogImage.data.attributes.formats.medium.url} alt="" class="blog-post-image">
                <div class="card-content" >
                  <div class="blog-post-date">${blog.attributes.Date}</div>
                  <h3 class="blog-post-title">${blog.attributes.Title}</h3>
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
        
        window.addEventListener()

        
        //   

        
        // document.querySelector('#api-date').innerHTML = data.data[0].attributes.Date
        // document.querySelector('#api-title').innerHTML = data.data[0].attributes.Title

        
    })
};

fetchData();