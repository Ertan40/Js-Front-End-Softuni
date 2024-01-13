window.addEventListener("load", solve);

function solve() {
    const name = document.getElementById("player")
    const score = document.getElementById("score")
    const round = document.getElementById("round")
    const addBtn = document.getElementById("add-btn")
    const sureList = document.getElementById("sure-list")
    const scoreBoardList = document.getElementById("scoreboard-list")
    const playersContainer = document.getElementById("players-container")
    const clearBtn = document.querySelector(".clear")
    let editBtn, okBtn
    addBtn.addEventListener("click", addInfo)
    clearBtn.addEventListener("click", clearInfo)
    gameInfo = {}
    function addInfo(e) {
      e.preventDefault()
      if(name.value && score.value && round.value) {
        gameInfo = {
          "name": name.value,
          "score": score.value,
          "round": round.value
        }
        let newLi = document.createElement("li")
        newLi.className = "dart-item"
        newLi.innerHTML = `
        <article>
          <p>${name.value}</p>
          <p>Score: ${score.value}</p>
          <p>Round: ${round.value}</p>
        </article>
        <button class="btn edit">edit</button>
        <button class="btn ok">ok</button>
        `
        sureList.appendChild(newLi)
        addBtn.disabled = true
        name.value = ""
        score.value = ""
        round.value = ""
        let editBtn = newLi.querySelector(".edit")
        let okBtn = newLi.querySelector(".ok")
        editBtn.addEventListener("click", editInfo)
        okBtn.addEventListener("click", confirmInfo)
      }
    }
    function editInfo() {
      name.value = gameInfo.name
      score.value = gameInfo.score
      round.value = gameInfo.round
      sureList.innerHTML = ""
      addBtn.disabled = false
    }
    function confirmInfo (e) {
        currentScore = e.target.parentNode
        currentScore.querySelector(".edit").remove()
        currentScore.querySelector(".ok").remove()
        scoreBoardList.appendChild(currentScore)
        addBtn.disabled = false

    }
    function clearInfo() {
        location.reload()
    }
  }


  