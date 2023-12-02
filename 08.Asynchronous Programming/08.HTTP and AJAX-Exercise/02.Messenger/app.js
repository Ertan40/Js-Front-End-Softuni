function attachEvents() {
    
    const loadBtn = document.getElementById("btnLoadPosts")
    const viewBtn = document.getElementById("btnViewPost")
    const postsDropDown = document.getElementById("posts")
    const title = document.getElementById("post-title")
    const body = document.getElementById("post-body")
    const postComments = document.getElementById("post-comments")
    const urlPosts = "http://localhost:3030/jsonstore/blog/posts"
    const urlComments = "http://localhost:3030/jsonstore/blog/comments"

    loadBtn.addEventListener("click", loadPosts)
    viewBtn.addEventListener("click", loadComments)
    
    let posts = {}

    function loadPosts() {
        fetch(`${urlPosts}`)
        .then((response) => response.json())
        // .then((data) => createDropDown(data))
        .then((data) => {
            postsDropDown.innerHTML = ""
            // {body: 'Lorem ipsum', id: '-MSbypx-13fHPDyzNRtf', title: 'Unit Testing And Modules'} //values
            Object.values(data).forEach((post) => {
                postsDropDown.innerHTML += `<option value="${post.id}">${post.title}</option>`
                posts[post.id] = {title: post.title, body: post.body}
                // {title: 'Unit Testing And Modules', body: 'Lorem ipsum} // posts dict 
            });
        })
        .catch((error) => console.log(error))     
    }
    function loadComments() {
    fetch(`${urlComments}`)
    .then((response) => response.json())
    .then((data) => {
        const postId = postsDropDown.value
        const comments = Object.values(data).filter((comment) => comment.postId === postId)
        
        title.textContent = posts[postId].title
        body.textContent = posts[postId].body
        postComments.innerHTML = ""
        comments.forEach(comment => {
            postComments.innerHTML += `<li id=${comment.postId}>${comment.text}</li>`
        });
    })
    .catch ((error) => console.log(error))
    }
}

attachEvents();


