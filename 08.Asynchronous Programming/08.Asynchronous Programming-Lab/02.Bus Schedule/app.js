function solve() {
    const departBtn = document.getElementById("depart")
    const arriveBtn = document.getElementById("arrive")
    const infoBox = document.querySelector("#info .info")
    let nextStop = 'depot'
    let stopName = ''
    function depart() {
        fetch ("http://localhost:3030/jsonstore/bus/schedule/depot")
            .then((response) => response.json())
            // .then(console.log) //{name: 'Depot', next: '0361'}
            .then((data) => {
                stopName = data.name
                nextStop = data.next
                // console.log(nextStop); //0361
                departBtn.disabled = true
                arriveBtn.disabled = false
                infoBox.textContent = `Next stop ${data.name}`
            })
            .catch(()=> {
                departBtn.disabled = true
                arriveBtn.disabled = true
                info.innerHTML = 'Error'
            })
    }
    async function arrive() {
        departBtn.disabled = false
        arriveBtn.disabled = true
        infoBox.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();





