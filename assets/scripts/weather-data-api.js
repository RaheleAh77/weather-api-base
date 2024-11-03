const cityInput = document.querySelector("#weather-container__input");
const cityTitle = document.querySelector(".city-country");
const dateTxt = document.querySelector(".date");
const weatherTemp = document.querySelector(".weather-temperature");
const weatherDesc = document.querySelector(".weather-description");
const minMaxTemp = document.querySelector(".min-max");

cityInput.addEventListener("keyup" , e => {
    const cityInputValue = cityInput.value.toUpperCase().trim();
    if(e.key === "Enter"){
        if (cityInputValue) {
             fetchData(cityInputValue); 
             cityInput.value = "";
        }else{
            alert("This city is unavailable");
        }
    }
});

function fetchData(value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5621d29e37613af65decb122a253218f`)
    .then(res => res.json())
    .then(data => {
        cityTitle.innerHTML = `${data.name}, ${data.sys.country}`;
        dateTxt.innerHTML = showDate();
        weatherTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;
        weatherDesc.innerHTML = `${data.weather[0].main}`;
        minMaxTemp.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;
    });
}

function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}