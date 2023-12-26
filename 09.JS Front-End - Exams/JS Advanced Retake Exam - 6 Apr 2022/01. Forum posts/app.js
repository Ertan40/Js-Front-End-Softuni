window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("publish-btn")
  const clearBtn = document.getElementById("clear-btn")
  const title = document.getElementById("post-title")
  const category = document.getElementById("post-category")
  const content = document.getElementById("post-content")
  const reviewLi = document.getElementById("review-list")
  const publishLi = document.getElementById("published-list")
  let information = {}

  publishBtn.addEventListener("click", publishInfo)
  clearBtn.addEventListener("click", clearInfo)

  function publishInfo(e) {
    e.preventDefault()
    if (title.value && category.value && content.value) {
      
      information = {
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
      <button class="action-btn approve">Approve</button>
      <button class="action-btn edit">Edit</button>
      `
      reviewLi.appendChild(newLi)
      let editBtn = newLi.querySelector(".edit")
      let approveBtn = newLi.querySelector(".approve")
      editBtn.addEventListener("click", editInfo)
      approveBtn.addEventListener("click", approveInfo)
      title.value = ""
      category.value = ""
      content.value = ""
    }
  }
  function editInfo () {
    title.value = information.title
    category.value = information.category
    content.value = information.content
    reviewLi.innerHTML = ""
  }
  function approveInfo (e) {
    reviewLi.innerHTML = ""
    currentInfo = e.target.parentNode
    console.log(currentInfo)
    currentInfo.querySelector(".approve").remove()
    currentInfo.querySelector(".edit").remove()
    publishLi.appendChild(currentInfo)
  }
  function clearInfo () {
    publishLi.innerHTML = ""
  }
}




