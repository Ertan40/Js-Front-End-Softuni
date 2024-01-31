window.addEventListener("load", solve);

function solve() {

    const reviewList = document.getElementById("review-list")
    const publishedList = document.getElementById("published-list")
    const newPost = document.getElementById("newPost")
    const title = document.getElementById("task-title")
    const category = document.getElementById("task-category")
    const content = document.getElementById("task-content")
    const publishBtn = document.getElementById("publish-btn")
    
    publishBtn.addEventListener("click", publishTask);
    let editBtn, postBtn
    let tasks = {}
    function publishTask (e) {
        e.preventDefault()
        // reviewList.innerHTML = ""
        if (title.value && category.value && content.value) {
            tasks = {
                "title": title.value,
                "category": category.value,
                "content": content.value,
            }

            let newLi = document.createElement("li")
            newLi.className = "rpost"
            newLi.innerHTML = `
            <article>
              <h4>${title.value}</h4>
              <p>Category: ${category.value}</p>
              <p>Content: ${content.value}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn post">Post</button>
            `
            reviewList.appendChild(newLi)
            title.value = ""
            category.value = ""
            content.value = ""
            editBtn = newLi.querySelector(".edit")
            postBtn = newLi.querySelector(".post")
            editBtn.addEventListener("click", editTask)
            postBtn.addEventListener("click", postTask)

        }
    }
    function editTask () {
        title.value = tasks.title
        category.value = tasks.category
        content.value = tasks.content
        reviewList.innerHTML = "" 
    }
    function postTask (e) {
        reviewList.innerHTML = ""
        currentTask = e.target.parentNode
        currentTask.querySelector(".edit").remove()
        currentTask.querySelector(".post").remove()
        publishedList.appendChild(currentTask)
    }
}

