async function requestWeatherTemp() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&past_days=0&forecast_days=7')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
}

async function requestWeatherHumidity() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relative_humidity_2m&past_days=0&forecast_days=7')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
}
