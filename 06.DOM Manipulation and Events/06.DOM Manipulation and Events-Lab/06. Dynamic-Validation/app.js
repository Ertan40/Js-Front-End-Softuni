function validate() {
    const input = document.getElementById("email");
    let regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/g;
    // let regexp = /[a-zA-Z]{1,}@[a-zA-Z]{1,}.[a-zA-Z]{1,}/g
    
    input.addEventListener('change', () => {
        let text = input.value;

        if (!regexp.test(text)) {
            input.classList.add("error")
        } else {
            input.classList.remove("error")
        }
    })
}
   