function solve(){
   const createBtn = document.querySelector(".create")
   const siteContent = document.querySelector(".site-content>main>section")
   const archiveSection = document.querySelector(".archive-section>ol")

   let titles = []

   createBtn.addEventListener("click", createArticle);

   function createArticle (event) {
      event.preventDefault()
      const creator = document.getElementById("creator")
      const title = document.getElementById("title")
      const category = document.getElementById("category")
      const content = document.getElementById("content")

      let articleEl = document.createElement("article")
      siteContent.appendChild(articleEl)

      let titleEl = document.createElement("h1")
      titleEl.textContent = title.value
      articleEl.appendChild(titleEl)

      let categoryEl = document.createElement("p")
      categoryEl.textContent = "Category: "
      let strongEl = document.createElement("strong")
      strongEl.textContent = category.value
      categoryEl.appendChild(strongEl)
      articleEl.appendChild(categoryEl)

      let creatorEl = document.createElement("p")
      creatorEl.textContent = "Creator: "
      let strongElCreator = document.createElement("strong")
      strongElCreator.textContent = creator.value
      creatorEl.appendChild(strongElCreator)
      articleEl.appendChild(creatorEl)

      let contentEl = document.createElement("p")
      contentEl.textContent = content.value // contentEl.innerHTML = content.value
      articleEl.appendChild(contentEl)

      let divEl = document.createElement("div")
      divEl.className = "buttons"
      articleEl.appendChild(divEl)

      let deleteBtn = document.createElement("button")
      deleteBtn.className = "btn delete"
      deleteBtn.textContent = "Delete"
      divEl.appendChild(deleteBtn)
      articleEl.appendChild(divEl)

      let archiveBtn = document.createElement("button")
      archiveBtn.className = "btn archive"
      archiveBtn.textContent = "Archive"
      divEl.appendChild(archiveBtn)
      articleEl.appendChild(divEl)
   
      archiveBtn.addEventListener("click", archiveArticle)
      deleteBtn.addEventListener("click", deleteArticle)

      creator.value = ""
      title.value = ""
      category.value = ""
      content.value = ""
   } 
   
   function deleteArticle (event) {
      let article = event.currentTarget.parentNode.parentNode
      article.remove()
   }

   function archiveArticle (event) {
      let currentArticle = event.currentTarget.parentNode.parentNode
      let currentTitle = currentArticle.querySelector("h1").textContent
      currentArticle.remove()

      titles.push(currentTitle)
      titles.sort((a, b) => a.localeCompare(b))

      archiveSection.innerHTML = ""

      titles.forEach(element => {
        let listEl = document.createElement("li")
        listEl.textContent = element
        archiveSection.appendChild(listEl)
      });
   }
}


