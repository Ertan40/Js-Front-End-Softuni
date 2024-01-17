function solve() {
    const url = "http://localhost:3030/jsonstore/tasks/"
    const divList = document.getElementById("list")
    const location = document.getElementById("location")
    const temperature = document.getElementById("temperature")
    const date = document.getElementById("date")
    const loadBtn = document.getElementById("load-history")
    const editWeatherBtn = document.getElementById("edit-weather")
    const addBtn = document.getElementById("add-weather")
    
    // "location": "Sofia","temperature": "32","date": "2023-07-15","_id": "07f260f4"
    loadBtn.addEventListener("click", (e) => {
        e.preventDefault()
        getData()
    })
    addBtn.addEventListener("click", addWeather)
    function getData (){
        fetch(url).then((res) => res.json()).then((data) => {
            divList.innerHTML = ""
            for (const {location, temperature, date, _id} of Object.values(data)) {
                let newDiv = document.createElement("div")
                newDiv.id = _id
                newDiv.className = "container"
                newDiv.innerHTML = `
                <h2>${location}</h2>
                <h3>${date}</h3>
                <h3 id="celsius">${temperature}</h3>
                <div class="buttons-container">  
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
                </div>
                `
                divList.appendChild(newDiv)
                let changeBtn = newDiv.querySelector(".change-btn")
                let deleteBtn = newDiv.querySelector(".delete-btn")
                changeBtn.addEventListener("click", changeInfo)
                deleteBtn.addEventListener("click", deleteInfo)
            }
        }).catch(error => console.log(error))
    }
    function addWeather(e) {
        e.preventDefault()
        if (location.value && temperature.value && date.value) {
            const httpHeaders = {
                method: "post",
                body: JSON.stringify({"location": location.value, "temperature": temperature.value, "date": date.value})
            }
            fetch(url, httpHeaders).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
            location.value = ""
            temperature.value = ""
            date.value = ""
        }
    }
    function deleteInfo(e) {
        id = e.target.parentNode.parentNode.id
        console.log(e.target.parentNode.parentNode)
        fetch(url + id, {method: "delete"}).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
    }
    function changeInfo(e) {
        let currentWeather = e.currentTarget.parentNode.parentNode
        let weatherId = currentWeather.id
        location.value = currentWeather.querySelector("h2").textContent
        date.value = currentWeather.querySelector("h3:nth-child(2)").textContent
        temperature.value = currentWeather.querySelector("h3:nth-child(3)").textContent
        editWeatherBtn.disabled = false 
        addBtn.disabled = true
        // console.log(location.value);
        // console.log(date.value);
        // console.log(temperature.value);
        editWeatherBtn.addEventListener("click", (e) => {
           e.preventDefault()
           editData(currentWeather.id)
        })
    }
    function editData(id) {
        if (location.value && temperature.value && date.value){
             fetch(url + id, {
              method: "PATCH",
              body: JSON.stringify({
               "location": location.value,
               "temperature": temperature.value,
               "price": date.value
              }),
              headers: {
               "Content-type": "application/json; charset=UTF-8"
              }
             })
             .then(data => getData())
             .catch((error) => console.log(error))
            
             location.value = "";
             temperature.value = "";
             date.value = "";
             }
             editWeatherBtn.disabled = true;
             addBtn.disabled = false;
    }
}

solve()