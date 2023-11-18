function extractText() {
    const listItems = Array.from(document.querySelectorAll('li'))
    // console.log (listItems)
    let textResult = ''
    for (let item of listItems) {
        textResult += item.textContent + '\n';
    }
    // const text = listItems.map((item) => item.textContent).join('\n');
    document.querySelector('textarea').value = textResult
}

