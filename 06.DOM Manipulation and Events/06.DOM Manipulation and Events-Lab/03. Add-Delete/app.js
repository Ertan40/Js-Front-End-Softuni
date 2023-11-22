function addItem() {
    const input = document.getElementById("newItemText").value
    const mainUl = document.getElementById("items")

    if (input.length === 0) return;

    let newLi = document.createElement("li")
    newLi.textContent = input

    let remove = document.createElement("a")
    let textLink = document.createTextNode("[Delete]")

    remove.appendChild(textLink);
    remove.href = "#";
    remove.addEventListener('click', deleteItem);
    
    newLi.appendChild(remove);
    mainUl.appendChild(newLi);

    function deleteItem () {
        newLi.remove();
    }
}