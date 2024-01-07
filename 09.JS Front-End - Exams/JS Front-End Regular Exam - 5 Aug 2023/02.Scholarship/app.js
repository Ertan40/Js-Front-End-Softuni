window.addEventListener("load", solve);

function solve() {
    const nextBtn = document.getElementById("next-btn")
    const previewList = document.getElementById("preview-list") // ul
    const canditatesList = document.getElementById("candidates-list") // ul
    const nameInput = document.getElementById("student")
    const universityInput = document.getElementById("university")
    const scoreInput = document.getElementById("score")

    nextBtn.addEventListener("click", getInfo)

    function getInfo () {

      const name = nameInput.value.trim()
      const university = universityInput.value.trim()
      const score = scoreInput.value.trim()
      if (name !== "" && university !== "" && score !== "") {
          let li = document.createElement("li")
          li.className = "application"
          li.innerHTML = `
              <article>
                <h4>${name}</h4>
                <p>University: ${university}</p>
                <p>Score: ${score}</p>
              </article>
              <button class="action-btn edit">edit</button>
              <button class="action-btn apply">apply</button>
           `
          previewList.appendChild(li)  
          nextBtn.disabled = true
          nameInput.value = "" 
          universityInput.value = "" 
          scoreInput.value = "" 

          li.querySelector(".edit").addEventListener("click", editInfo)
          li.querySelector(".apply").addEventListener("click", function () {
            applyInfo(name, university, score)
          })

      } 
    }
    function editInfo (e) {
      
      const li = e.target.parentElement;
      const article = li.querySelector('article');
      const name = article.querySelector("h4").textContent;
      let [university, score] = article.querySelectorAll("p");
      university = university.textContent.split("University: ")[1];
      score = score.textContent.split("Score: ")[1];
      // const university = article.querySelector("p:nth-child(2)").textContent.split("University: ")[1];
      // const score = article.querySelector("p:nth-child(3)").textContent.split("Score: ")[1];
      nameInput.value = name
      universityInput.value = university
      scoreInput.value = score
      nextBtn.disabled = false
      previewList.innerHTML = "" //li.remove()
    }
    function applyInfo (name, university, score) {
      
      previewList.innerHTML = ""
      let canditateLi = document.createElement("li")
      canditateLi.className = "application"
      canditateLi.innerHTML = `
          <article>
            <h4>${name}</h4>
            <p>University: ${university}</p>
            <p>Score: ${score}</p>
          </article>
      `
      canditatesList.appendChild(canditateLi)

      nextBtn.disabled = false
    }
  }


  




