function  loadGames() {
    const URL = "http://localhost:3030/jsonstore/games/"
    const name = document.getElementById("g-name")
    const type = document.getElementById("type")
    const players = document.getElementById("players")
    const addBtn = document.getElementById("add-game")
    const editBtn = document.getElementById("edit-game")
    const loadBtn = document.getElementById("load-games")
    const divList = document.getElementById("games-list")
    let changeBtn, deleteBtn
    
    loadBtn.addEventListener("click", (e) => {
        e.preventDefault()
        getData()
    })
    addBtn.addEventListener("click", addGames)
    // function getData() {
    //     fetch(URL)
    //      .then((res) => res.json()) 
    //      .then((data) => {
    //         const games = Object.values(data)
    //         console.log(games)
    //      })
    //      .catch((error) => console.error("Error fetching data:", error));
    // } // postman: // {"name":"CATAN-Rise of Inkas","type":"Eurogame","players":"4","_id":"07f260f4-466c-4607-9a33-f7273b24f1b4"},
    function getData() {
        fetch(URL).then((res) => res.json()).then((data) => {
            divList.innerHTML = ""
            for (const {name, type, players, _id} of Object.values(data)) {
                let newDiv = document.createElement("div")
                newDiv.id = _id
                newDiv.className = "board-game"
                newDiv.innerHTML = `
                    <div class="content">
                       <p>${name}</p>
                       <p>${type}</p>
                       <p>${players}</p>
                    </div>
                    <div class="buttons-container">
                       <button class="change-btn">Change</button>
                       <button class="delete-btn">Delete</button>
                    </div>
                `
                divList.appendChild(newDiv)
                let changeBtn = document.querySelector(".change-btn")
                let deleteBtn = document.querySelector(".delete-btn")
                changeBtn.addEventListener("click", changeGame)
                deleteBtn.addEventListener("click", deleteGame)
                editBtn.disabled = true
            }
        }).catch((error) => console.log(error))
    }
    function addGames (e) {
        e.preventDefault ()
        if (name.value !== "" && type.value !== "" && players.value !== "") {
            const httpHeaders = {
                method: "POST",
                body: JSON.stringify({"name": name.value, "type": type.value, "players": players.value})
            }
            fetch(URL, httpHeaders).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
            name.value = ""
            type.value = ""
            players.value = ""
        }
    }
    function changeGame (e) {
        currentGame = e.currentTarget.parentNode.parentNode
        gameId = currentGame.id
        editBtn.disabled = false
        addBtn.disabled = true
        const content = currentGame.querySelector(".content")
        name.value = content.children[0].textContent
        type.value = content.children[1].textContent
        players.value = content.children[2].textContent
        editBtn.addEventListener("click", () => {
            editData(gameId)
        })
    }
    function editData (id) {
        if (name.value !== "" && type.value !== "" && players.value !== "") {
            // fetch(URL + id, {method: "PUT", body: JSON.stringify({"name": name.value, "type": type.value, "players": players.value}),
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8"
            //     }})
            fetch(URL + id, {method: "PUT", body: JSON.stringify({"name": name.value, "type": type.value, "players": players.value})})
            .then(data => getData()).catch((error) => console.log(error))
            name.value = ""
            type.value = ""
            players.value = ""
        }
        editBtn.disabled = false
        addBtn.disabled = true
    }
    function deleteGame (e) {
        id = e.target.parentNode.parentNode.id
        fetch(URL + id, {method: "DELETE"}).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
    }
}

loadGames ()