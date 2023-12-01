function attachEvents() {

    const location = document.getElementById("location")
    const current = document.getElementById("current") 
    const upcoming = document.getElementById("upcoming") 
    const forecast = document.getElementById("forecast") 
    const submitBtn = document.getElementById("submit") 
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/"

    submitBtn.addEventListener("click", getWhetherData)

    let symbols = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
    }
    let degrees = "&#176"
    // { name: locationName, forecast: [{ low: temp, high: temp, condition: condition }, … ]}
    function displayTodayInfo(data) {
        current.innerHTML = `
        <div class="label">Current conditions</div>
        <div class="forecasts">
          <span class="condition symbol">${symbols[data.forecast.condition]}</span>
          <span class="condition">
            <span class="forecast-data">${data.name}</span>
            <span class="forecast-data">${data.forecast.low}${degrees}/${data.forecast.high}${degrees}</span> 
            <span class="forecast-data">${data.forecast.condition}</span>
          </span>
        </div>
        `
    }
    function displayUpcomingInfo (data) {
        upcoming.innerHTML = '<div class="label">Three-day forecast</div>'
        upcoming.innerHTML += `<div class="forecast-info"></div`
        const forecastInfo = document.querySelector('.forecast-info')
        data.forecast.forEach(day => {
            forecastInfo.innerHTML += `
                <span class="upcoming">
                    <span class="symbol">${symbols[day.condition]}</span>
                    <span class="forecast-data">${day.low}${degrees}/${day.high}${degrees}</span>
                    <span class="forecast-data">${day.condition}</span>
                </span>
            `
        });
    }
    async function getWhetherData () {
        
       try {
           let response = await fetch(`${BASE_URL}locations/`)
           let data = await response.json()
           // console.log({response, data}) // {response: Response, data: Array(3)}
           let currLocation = data.find(x => x.name.toLowerCase() === location.value.toLowerCase())
           if (currLocation === undefined) {
               forecastSection.innerHTML = "Error" // check forecastSection
            }
           let code = currLocation.code
           forecast.style.display = "block"

           let todayResponse = await fetch(`${BASE_URL}today/${code}`)
           let todayData = await todayResponse.json()
           displayTodayInfo(todayData)

           let upcomingResponse = await fetch(`${BASE_URL}upcoming/${code}`)
           let upcomingData = await upcomingResponse.json()
           displayUpcomingInfo (upcomingData)
   
       } catch {
           forecast.style.display = "block"
           forecast.innerHTML = "Error"
       }  
    }     
}

attachEvents();

