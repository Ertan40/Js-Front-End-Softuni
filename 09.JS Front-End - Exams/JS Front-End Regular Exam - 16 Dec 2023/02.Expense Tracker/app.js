window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn")
    const expense = document.getElementById("expense")
    const amount = document.getElementById("amount")
    const date = document.getElementById("date")
    const previewLi = document.getElementById("preview-list")
    const expensesLi = document.getElementById("expenses-list")
    const deleteBtn = document.querySelector(".delete")
    let formElement = document.querySelector("form") ///
    let editBtn, okBtn
    addBtn.addEventListener("click", addInfo)
    deleteBtn.addEventListener("click", clearInfo)
    let food = {}
    function addInfo(e) {
        e.preventDefault()
        if (expense.value && amount.value && date.value) {
            food = {
                "expense": expense.value,
                "amount": amount.value,
                "date": date.value,
            }
            let newLi = document.createElement("li")
            newLi.className = "expense-item"
            newLi.innerHTML = `
            <article>
              <p>Type: ${expense.value}</p>
              <p>Amount: ${amount.value}$</p>
              <p>Date: ${date.value}</p>
            </article>
            <div class="buttons">
             <button class="btn edit">edit</button>
             <button class="btn ok">ok</button>
             </div> 
            `
            previewLi.appendChild(newLi)
            expense.value = ""
            amount.value = ""
            date.value = ""
            editBtn = newLi.querySelector(".edit")
            okBtn = newLi.querySelector(".ok")
            editBtn.addEventListener("click", editInfo)
            okBtn.addEventListener("click", confirmInfo)
            addBtn.disabled = true
        }
    }
    function editInfo() {
        expense.value = food.expense
        amount.value = food.amount
        date.value = food.date
        previewLi.innerHTML = ""
        addBtn.disabled = false
    }
    function confirmInfo(e) {
        // const currentFood = e.target.closest('.expense-item');
        const currentFood = e.target.parentNode.parentNode
        console.log(currentFood)
        currentFood.querySelector(".edit").remove()
        currentFood.querySelector(".ok").remove()
        expensesLi.appendChild(currentFood);
        previewLi.innerHTML = ""
        addBtn.disabled = false;
        formElement.reset() /// 
    }
    // function confirmInfo(e) {
    //     const currentFood = e.target.closest('.expense-item')
    //     let newLi = document.createElement("li")
    //     newLi.className = "expense-item"
    //     newLi.innerHTML = `
    //     <article>
    //         <p>Type: ${currentFood.querySelector("p:nth-child(1)").textContent.split(': ')[1]}</p>
    //         <p>Amount: ${currentFood.querySelector("p:nth-child(2)").textContent.split(': ')[1]}</p>
    //         <p>Date: ${currentFood.querySelector("p:nth-child(3)").textContent.split(': ')[1]}</p>
    //     </article>
    // `
    //     expensesLi.appendChild(newLi);
    //     currentFood.remove();
    //     previewLi.innerHTML = "";
    //     addBtn.disabled = false;
    //     formElement.reset();
    // }
    function clearInfo() {
        location.reload()
         }
}


