const Base_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_key = "3419c0a501b75d89e9f327b6112e2fd9";

let box = document.querySelector(".box");
let serachBar = document.querySelector("#searching");
let temp = document.querySelector("#temperature");
let city = document.querySelector(".city-name");
let humidity = document.querySelector(".humid");
let wind = document.querySelector(".wind");
let img = document.querySelector(".sun img");



changeInfo = async () => {
    let info = serachBar.value;
    let url = `${Base_URL}${info}&appid=${API_key}&units=metric`;
    let ud = await fetch(url);
    let data = await ud.json();
    console.log(data);
    let t = Math.round(data.main.temp);
    temp.innerText = `${t} °C` ;
    city.innerText = info;
    let h = data.main.humidity;
    humidity.innerText = `${h}%`;
    let w = Math.round(data.wind.speed);
    wind.innerText = `${w} Km/hr`;

    if(data.weather[0].main == "Clear") {
        newsrc = "images/clear.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Clouds") {
        newsrc = "images/clouds.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Drizzle") {
        newsrc = "images/drizzle.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Humidity") {
        newsrc = "images/humidity.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Mist") {
        newsrc = "images/mist.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Rain") {
        newsrc = "images/rain.png";
        img.src = newsrc;
    } else if(data.weather[0].main == "Snow") {
        newsrc = "images/snow.png";
        img.src = newsrc;
    }
}

box.addEventListener("click", () => {
    changeInfo();
});

serachBar.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        changeInfo();
    }
})

window.addEventListener("load", () => {
    changeInfo();
})