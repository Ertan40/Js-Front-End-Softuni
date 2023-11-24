function lockedProfile() {
    const showMoreBtns = Array.from(document.querySelectorAll("button"))

    for (const button of showMoreBtns) {
        button.addEventListener("click", toggleInfo)
    }
    function toggleInfo (e) {
        let button = e.target
        let hiddenInfo = button.parentElement.children[9]
        let lockedInput = button.parentNode.children[4]
        // console.log(lockedInput.value); // unlock

        if (button.textContent === "Show more" && lockedInput.checked === true) {
            hiddenInfo.style.display = "inline"
            button.textContent = "Hide it"
        } else if (button.textContent === "Hide it" && lockedInput.checked === true) {
            hiddenInfo.style.display = ""
            button.textContent = "Show more"
        }
    }
}
