function attachEvents() {

    const url = "http://localhost:3030/jsonstore/tasks/"
    const loadVacationsBtn = document.getElementById("load-vacations")
    const editVacationBtn = document.getElementById("edit-vacation")
    const addVacationBtn = document.getElementById("add-vacation")
    const divList = document.getElementById("list")
    const inputName = document.getElementById("name")
    const inputDays = document.getElementById("num-days")
    const inputDate = document.getElementById("from-date")
    let editId
    loadVacationsBtn.addEventListener("click", loadVacations)
    addVacationBtn.addEventListener("click", addVacations)
    editVacationBtn.addEventListener("click", editVacations)

    async function loadVacations () {
        try {
            const response = await fetch(`${url}`)
            const data = await response.json()
            divList.innerHTML = ""
            // console.log({response, data}) // {name: 'David Mule', days: '5', date: '2023-07-09', _id: '07f260f4}
            for (const {name, days, date, _id} of Object.values(data)) {
                let divItem = document.createElement("div")
                divItem.className = "container"
                divItem.innerHTML = `
                   <h2>${name}</h2>
                   <h3>${date}</h3>
                   <h3>${days}</h3>
                   <button class="change-btn">Change</button>
                   <button class="done-btn">Done</button> 
                `
                divItem.id = _id 
                divList.appendChild(divItem)
                divItem.querySelector(".change-btn").addEventListener("click", changeInfo)
                divItem.querySelector(".done-btn").addEventListener("click", deleteInfo)
                editVacationBtn.disabled = true
            }

        } catch (error) {console.log(error)}
    } 
    function addVacations () {
        const name = inputName.value
        const days = inputDays.value
        const date = inputDate.value
        const httpHeaders = {
            method: "post",
            body: JSON.stringify({name, days, date}),
        }
        fetch(url, httpHeaders).then((res) => res.json()).then(() => {
            loadVacations()
            inputName.value = ""
            inputDays.value = ""
            inputDate.value = ""
        })
        .catch((error) => {console.log(error)})
    }
    function changeInfo (e) {
        const divItem = e.target.parentElement
        editId = divItem.id // console.log(editId); //07f260f4-466c-4607-9a33-f7273b24f1b4
        divItem.remove()

        const name = divItem.querySelector("h2")
        const [date, days] = divItem.querySelectorAll("h3")

        inputName.value = name.textContent
        inputDays.value = days.textContent 
        inputDate.value = date.textContent
        editVacationBtn.disabled = false
        addVacationBtn.disabled = true 
    }
    
    async function deleteInfo (e) {
        editId = e.target.parentElement.id; // console.log(editId); //07f260f4-466c-4607-9a33-f7273b24f1b4
        try {
            await fetch(`${url}${editId}`, { method: 'delete' });
            loadVacations();
        } catch (error) {
            console.log(error);
        }
    }
    function editVacations () {
        
        const name = inputName.value
        const days = inputDays.value
        const date = inputDate.value
        const httpHeaders = {
            method: "put",
            body: JSON.stringify({name, days, date}),
        }
        fetch(`${url}${editId}`, httpHeaders).then((res) => res.json()).then(() => {
            loadVacations()
            editVacationBtn.disabled = true
            addVacationBtn.disabled = false
        })
        .catch((error) => {console.log(error)})
    }
}

attachEvents();

