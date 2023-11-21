function generateReport() {
    const titles = document.querySelectorAll('thead tr th');
    const content = document.querySelectorAll('tbody tr');
    const outputTextarea = document.getElementById('output')

    let colsToGenerate = [];
    let colsNames = []

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].children[0].checked) {
            colsNames.push(titles[i].textContent.trim());
            colsToGenerate.push(i)
        }
    }
    let output = [];

    for (let i = 0; i < content.length; i++) {
        let report = {}
        for (let j = 0; j < colsToGenerate.length; j++) {
            report[colsNames[j].toLowerCase()] = content[i].children[colsToGenerate[j]].innerHTML;
        }
        output.push(report)
    }
    outputTextarea.innerHTML = JSON.stringify(output)
}

