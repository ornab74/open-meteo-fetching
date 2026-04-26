async function requestWeatherTemp() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&past_days=0&forecast_days=7')
        .then(response => response.json()) // put data from open-meto into a javascript object for later
        .then(data => {
            console.log(data); // log the data into console
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<h2 style="color: black;">Berlin Germany- Temp: ${data.hourly.temperature_2m[0]} °C</h2>`; // inject open-meteo data into index.html div called result
        })
        .catch(error => console.error('Error', error)); 
}

async function requestWeatherHumidity() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relative_humidity_2m&past_days=0&forecast_days=7')
        .then(response => response.json()) // put data from open-meto into a javascript object for later
        .then(data => {
            console.log(data); // log the data into console
            const resultDiv = document.getElementById("result"); 
            resultDiv.innerHTML = `<h2 style="color: black;">Berlin Germany- Humidity: ${data.hourly.relative_humidity_2m[0]} %</h2>`; // inject open-meteo data into index.html div called result
        })
        .catch(error => console.error('Error', error)); 
}
