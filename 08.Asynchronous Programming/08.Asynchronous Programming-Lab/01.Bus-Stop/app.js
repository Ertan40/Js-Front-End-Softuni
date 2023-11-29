function getInfo() {
    const stopId = document.getElementById("stopId").value
    const stopName = document.getElementById("stopName")
    const busesList = document.getElementById("buses")

    busesList.innerHTML = ""
    stopName.textContent = ""
    
    fetch (`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then((response) => response.json())
        // .then(console.log) // {buses: {…}, name: 'Orlov Most sq.'}
        .then((response) => {
            stopName.textContent = response.name

            Object.entries(response.buses).map(([busNumber, time]) => {
                const item = document.createElement("li")
                item.textContent = `Bus ${busNumber} arrives in ${time} minutes`
                busesList.appendChild(item)
            })
            // Object.entries(response.buses).forEach(([busNumber, time]) => {
            //     busesList.innerHTML += `<li>Bus ${busNumber} arrives in ${time} minutes</li>`
            // })
        })
        .catch(() => {
            stopName.textContent = "Error"
        })
}