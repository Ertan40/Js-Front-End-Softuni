function solve() {

    const selectMenu = document.getElementById("selectMenuTo")
    const input = document.querySelector("#input")
    const convertButton = document.querySelector("button")
    const result = document.getElementById("result")

    let convert = {
        'binary': (x) => Number(x).toString(2),
        'hexadecimal': (x) => Number(x).toString(16).toUpperCase()
    }

    for (const key in convert) {
        const optionEl = document.createElement('option');
        optionEl.value = key;
        optionEl.textContent = key;
        selectMenu.appendChild(optionEl);
    }
    function convertTo() {
        let numberToConvert = input.value
        result.value = convert[selectMenu.value](numberToConvert)
    }
    convertButton.addEventListener('click', convertTo)
}
