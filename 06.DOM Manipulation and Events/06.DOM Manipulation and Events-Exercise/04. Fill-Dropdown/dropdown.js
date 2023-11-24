function addItem() {
    const newItemText = document.getElementById("newItemText");
    const newItemValue = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");
    
    if (newItemText.value !== "" && newItemValue.value !== "") {
        let option = document.createElement("option");
        option.value = newItemValue.value;
        option.textContent = newItemText.value;
        menu.appendChild(option)

        newItemText.value = "";
        newItemValue.value = "";
    }
}
