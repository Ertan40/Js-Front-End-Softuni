window.addEventListener('load', solve);

function solve() {
    const type = document.getElementById("type-product")
    const description = document.getElementById("description") 
    const name = document.getElementById("client-name") 
    const phone = document.getElementById("client-phone") 
    const receivedOrders = document.getElementById("received-orders") 
    const completedOrders = document.getElementById("completed-orders") 
    const clearBtn = document.querySelector(".clear-btn")
    const submitBtn = document.querySelector('button[type="submit"]')
    let startBtn, finishBtn

    submitBtn.addEventListener("click", submitOrders)
    clearBtn.addEventListener("click", clearOrders)
    
    function submitOrders (e) {
        e.preventDefault()
        if (phone.value && description.value && phone.value) {
            
            let newDiv = document.createElement("div")
            newDiv.className = "container"
            newDiv.innerHTML = `
            <h2>Product type for repair: ${type.value}</h2>
            <h3>Client information: ${name.value}, ${phone.value}</h3>
            <h4>Description of the problem: ${description.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>
            `
            startBtn = newDiv.querySelector(".start-btn")
            finishBtn = newDiv.querySelector(".finish-btn")
            startBtn.addEventListener("click", startOrder)
            finishBtn.addEventListener("click", finishOrder)
            receivedOrders.appendChild(newDiv)
            type.value = ""
            name.value = ""
            phone.value = ""
            description.value = ""
            finishBtn.disabled = true
        }
    }
    function startOrder () {
        startBtn.disabled = true
        finishBtn.disabled = false
    }
    function finishOrder (e) {
        currentCustomer = e.target.parentNode
        console.log(currentCustomer)
        completedOrders.appendChild(currentCustomer)
        currentCustomer.querySelector(".start-btn").remove()
        currentCustomer.querySelector(".finish-btn").remove()
        
    }
    function clearOrders () {
        const containers = Array.from(completedOrders.querySelectorAll(".container"));
        if (containers) {
            containers.forEach(container => container.remove());
        }  
    }
}


