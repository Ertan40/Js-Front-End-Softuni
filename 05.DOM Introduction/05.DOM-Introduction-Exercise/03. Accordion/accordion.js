function toggle() {

    let button = document.getElementsByClassName("button")[0];
    let displayText = document.getElementById("extra")
    // let displayText = document.getElementById("extra").style.display
    
    if (button.textContent === 'More') {
        displayText.style.display = "block"
        button.textContent = 'Less'
    } else {
        displayText.style.display = "none"
        button.textContent = 'More'
    }
}