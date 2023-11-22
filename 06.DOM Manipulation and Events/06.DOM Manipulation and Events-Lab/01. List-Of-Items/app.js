function addItem() {
    
    let textItem = document.getElementById("newItemText").value
    let liItems = document.getElementById("items")
    let li = document.createElement('li')
    li.textContent = textItem

    liItems.appendChild(li)

    document.getElementById("newItemText").value = '';
    
}
