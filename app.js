let temperature = document.getElementById("placetemp")
let weatherType = document.getElementById("weathertype")
let city = document.getElementById("display-city")
let weatherImg = document.getElementById("weather-img")
let weathercard = document.getElementById("weathercard")

let cityerror = document.getElementById("city-error")

function citysubmit(){
    let cityname = document.getElementById("mycity").value;

    if(cityname == ""){
        cityerror.style.display = "flex"
        weathercard.style.display = "none"
    }
    else{
        cityerror.style.display = "none"
    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0db7d1aff6d04792cb6247c98dff1607`
    city.innerHTML = cityname

    fetch(url).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        cityerror.style.display = "none"
        weathercard.style.display = "flex"
        temp = data.main.temp - 273.15

        temperature.innerHTML = temp.toFixed(2) + "°C"
        weatherType.innerHTML = data.weather[0].main
        // console.log(data.weather[0].main)
        if (data.weather[0].main == 'Clouds') {
            weatherImg.src = './icons/cloudy.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherImg.src = './icons/sun.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherImg.src = './icons/rain.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weatherImg.src = './icons/snowman.png';
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            weatherImg.src = './icons/thunder.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherImg.src = './icons/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherImg.src = './icons/mist.png';
        }
        else if (data.weather[0].main == 'Smoke') {
            weatherImg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Haze') {
            weatherImg.src = './icons/haze.png';
        }
        else if (data.weather[0].main == 'Dust') {
            weatherImg.src = './icons/dust.png';
        }
        else if (data.weather[0].main == 'Fog') {
            weatherImg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Sand') {
            weatherImg.src = './icons/sand.png';
        }
        else if (data.weather[0].main == 'Ash') {
            weatherImg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Squall') {
            weatherImg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Tornado') {
            weatherImg.src = './icons/hurricane.png';
        }
        else {
            weatherImg.src = './icons/sun.png';
        }
        })
    .catch((err)=>{
        console.log(err)
        cityerror.style.display = "flex"
    })
}
} 

