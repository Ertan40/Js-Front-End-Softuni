window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn")
    const checkLi = document.getElementById("check-list")
    const contactLi = document.getElementById("contact-list")
    const nameInput = document.getElementById("name")
    const phoneNumberInput = document.getElementById("phone")
    const categoryInput = document.getElementById("category")

    addBtn.addEventListener("click", getInfo) 

    function getInfo() {
      const name = nameInput.value.trim()
      const phoneNumber = phoneNumberInput.value.trim()
      const category = categoryInput.value.trim()
      if (name !== "" && phoneNumber !== "" && category !== "") {
        let li = document.createElement("li")
        li.className = "contacts-li"
        li.innerHTML = `
             <article>
                <p>name:${name}</p>
                <p>phone:${phoneNumber}</p>
                <p>category:${category}</p>
             </article>
             <div class="buttons">
                <button class="edit-btn"></button>
                <button class="save-btn"></button>
             </div>
        ` 
        checkLi.appendChild(li)
        nameInput.value = ""
        phoneNumberInput.value = ""
        categoryInput.value = ""

        li.querySelector(".edit-btn").addEventListener("click", editInfo)
        li.querySelector(".save-btn").addEventListener("click", function() {
          saveInfo(name, phoneNumber, category)
        })
      }
    }

    function editInfo (e) {
      const li = e.target.parentElement.parentElement
      const article = li.querySelector("article")
      let [name, phoneNumber, category] = article.querySelectorAll("p")

      nameInput.value = name.textContent.split("name:")[1]
      phoneNumberInput.value = phoneNumber.textContent.split("phone:")[1]
      categoryInput.value = category.textContent.split("category:")[1]
      li.remove() //checkLi.innerHTML = "" for enable addtBtn.disabled = false
    }

    function saveInfo (name, phoneNumber, category) {
      checkLi.innerHTML = ""
      let li = document.createElement("li")
      li.id = "contact-list"  // li.id = `contact-${Date.now()}`; Assign a unique id based on timestamp
      li.innerHTML = `
          <article>
            <p>name:${name}</p>
            <p>phone:${phoneNumber}</p>
            <p>category:${category}</p>
          </article>
          <button class="del-btn"></button>
      ` 
      contactLi.appendChild(li)
      li.querySelector(".del-btn").addEventListener("click", deleteInfo)

      function deleteInfo () {
        li.remove()
      }
    }
  }
  