const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45d3929524mshf489a998c58077ep1157a3jsn94991bfcec5e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}
const getWeather = (city)=>{
    document.getElementById('cityName').innerHTML= city

fetch(url+city , options)
.then(response => response.json())
.then((response)=>{
    console.log(response)
    document.getElementById('humidity2').innerHTML = response.humidity
    document.getElementById('humidity').innerHTML = response.humidity
    document.getElementById('cloud_pct').innerHTML = response.cloud_pct
    document.getElementById('feels_like').innerHTML = response.feels_like

    document.getElementById('temp2').innerHTML = response.temp
    document.getElementById('temp').innerHTML = response.temp
    document.getElementById('min_temp').innerHTML = response.min_temp
    document.getElementById('max_temp').innerHTML = response.max_temp


    document.getElementById('wind_Speed2').innerHTML = response.wind_speed          
    document.getElementById('wind_Speed').innerHTML = response.wind_speed          
    document.getElementById('sunrise').innerHTML = response.sunrise
    document.getElementById('sunset').innerHTML= response.sunset
})
.catch(err=>console.error(err))     
}

let submit = document.getElementById('submit')
submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Mumbai")






// "cloud_pct": 75,
//   "temp": 33,
//   "feels_like": 39,
//   "humidity": 58,
//   "min_temp": 33,
//   "max_temp": 33,
//   "wind_speed": 3.09,
//   "wind_degrees": 100,
//   "sunrise": 1687045990,
//   "sunset": 1687096268