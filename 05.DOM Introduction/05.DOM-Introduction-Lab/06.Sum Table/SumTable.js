function sumTable() {
    let costs = Array.from(document.querySelectorAll('td:nth-child(even)'))
    let total = costs.reduce((acc, curr) => {
        return acc + Number(curr.textContent);
}, 0);
    document.getElementById('sum').textContent = total
    // console.log(total);
}