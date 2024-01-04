function solve() {
    const url = "http://localhost:3030/jsonstore/tasks/"
    const addBtn = document.getElementById("add-meal")
    const loadBtn = document.getElementById("load-meals")
    const editMealBtn = document.getElementById("edit-meal")
    const food = document.getElementById("food")
    const time = document.getElementById("time")
    const calories = document.getElementById("calories")
    const divList = document.getElementById("list")
    let changeBtn, deleteBtn
   
    loadBtn.addEventListener("click", (e) => {
        e.preventDefault()
        getData()
    })
    addBtn.addEventListener("click", addMeals)
     // "food":"Eggs","calories":"220","time":"08:30","_id":"07f260f4
    function getData() {
        fetch(url).then((res) => res.json()).then((data) => {
         divList.innerHTML = ""
         for (const {food, calories, time, _id} of Object.values(data)) {
             let newDiv = document.createElement("div")
             newDiv.id = _id
             newDiv.className = "meal"
             newDiv.innerHTML = `
              <h2>${food}</h2>
              <h3>${calories}</h3>
              <h3>${time}</h3>
              <div id="meal-buttons"> 
              <button class="change-meal">Change</button>
              <button class="delete-meal">Delete</button>
              </div>
              `
            divList.appendChild(newDiv)
            let changeBtn = newDiv.querySelector(".change-meal")
            let deleteBtn = newDiv.querySelector(".delete-meal")
            changeBtn.addEventListener("click", changeInfo)
            deleteBtn.addEventListener("click", deleteInfo)
            editMealBtn.disabled = true
             }
     }).catch(error => console.log(error))
    }
    function addMeals(e) {
        e.preventDefault()
        if (food.value && calories.value && time.value) {
           const httpHeaders = {
              method: "post",
              body: JSON.stringify({"food": food.value, "calories": calories.value, "time": time.value})
            }
            fetch(url, httpHeaders).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
            food.value = ""
            calories.value = ""
            time.value = ""
     }
        
         }
         
    function deleteInfo(e) {
        id = e.target.parentNode.parentNode.id
        console.log(e.target.parentNode.parentNode)
        fetch(url + id, {method: "delete"}).then((res) => res.json()).then(data => getData()).catch(error => console.log(error))
        }
    function changeInfo(e) {
        currentMeal = e.currentTarget.parentNode.parentNode 
        mealId = currentMeal.id
        editMealBtn.disabled = false 
        addBtn.disabled = true
        food.value = currentMeal.querySelector("h2").textContent
        calories.value = currentMeal.querySelector("h3:nth-child(2)").textContent
        time.value = currentMeal.querySelector("h3:nth-child(3)").textContent
        // console.log(food.value);
       // console.log(calories.value);
      // console.log(time.value);  
      editMealBtn.addEventListener("click", () => {
    //   e.preventDefault()
      editData(mealId)
 })
    }
    function editData(id) {
         if (food.value && calories.value && time.value){
            fetch(url + id, {
             method: "PUT",
             body: JSON.stringify({
              "food": food.value,
              "calories": calories.value,
              "time": time.value
              }),
             headers: {
             "Content-type": "application/json; charset=UTF-8"
             }
            })
            .then(data => getData())
            .catch((error) => console.log(error))
            food.value = "";
            calories.value = "";
            time.value = "";
            }
            editMealBtn.disabled = true;
            addBtn.disabled = false;
            }
   
}

solve()

