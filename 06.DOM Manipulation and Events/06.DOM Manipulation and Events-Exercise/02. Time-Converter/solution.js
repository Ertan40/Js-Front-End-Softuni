function attachEventsListeners() {
    const daysBtn = document.getElementById("daysBtn")
    const hoursBtn = document.getElementById("hoursBtn")
    const minutesBtn = document.getElementById("minutesBtn")
    const secondsBtn = document.getElementById("secondsBtn")

    daysBtn.addEventListener("click", convertDays);
    hoursBtn.addEventListener("click", convertHours);
    minutesBtn.addEventListener("click", convertMinutes);
    secondsBtn.addEventListener("click", convertSeconds);
    
    function convertDays() {
        const days = Number(document.getElementById("days").value)
        let hours = days * 24 
        document.getElementById("hours").value = hours
        document.getElementById("minutes").value = days * 24 * 60
        document.getElementById("seconds").value = days * 24 * 3600
    } 
    
    function convertHours() {
        const hours = Number(document.getElementById("hours").value)
        document.getElementById("days").value = hours / 24
        document.getElementById("minutes").value = hours * 60
        document.getElementById("seconds").value = hours * 60 * 60
    } 

    function convertMinutes() {
        const minutes = Number(document.getElementById("minutes").value)
        document.getElementById("days").value = minutes / 1440 
        document.getElementById("hours").value = minutes / 60
        document.getElementById("seconds").value = minutes * 60
    } 
    
    function convertSeconds() {
        const seconds = Number(document.getElementById("seconds").value)
        document.getElementById("days").value = seconds / (1440 * 60)
        document.getElementById("hours").value = seconds / 360
        document.getElementById("minutes").value = seconds / 60
    } 
}


