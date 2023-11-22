function deleteByEmail() {
    let result = document.getElementById("result")
    let input = document.getElementsByTagName("input")[0].value
    let searchedMail = Array.from(document.querySelectorAll("tr td:nth-child(even)"))

    let isFound = false
    for (let searched of searchedMail) {
        if (searched.textContent === input) {
            let row = searched.parentNode;
            row.parentNode.removeChild(row);
            // result.textContent = "Deleted."
            // return 
            isFound = true
        } 
    }
    if (isFound) {
        result.textContent = "Deleted."
    }
    result.textContent = "Not found."
    document.getElementsByTagName("input")[0].value = ""
}