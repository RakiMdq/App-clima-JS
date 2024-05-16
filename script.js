const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = '028639ca1503f01bff71c9eadd85e410'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city)
    } else {
        alert('Ingrese una ciudad válida')
    }

})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divReponseData = document.getElementById('responseData')
    divReponseData.innerHTML = ''

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const temInfo = document.createElement('p')
    temInfo.textContent = `La temperatura es de ${Math.floor(temp - diffKelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción meteorológica es ${description}`

    divReponseData.appendChild(cityInfo)
    divReponseData.appendChild(temInfo)
    divReponseData.appendChild(humidityInfo)
    divReponseData.appendChild(icoInfo)
    divReponseData.appendChild(descriptionInfo)

}