function focused() {
    let inputs = document.querySelectorAll("input")

    console.log(inputs);
    
    for (let input of inputs) {
        input.addEventListener("focus", (event) => {
            event.target.parentElement.className = "focused";   // className is a string
            // event.target.parentElement.classList.add("focused");
        })
        input.addEventListener("blur", (event) => {
            event.target.parentElement.classList.remove("focused");
            // event.target.parentElement.className = "";
        })
    }
}
