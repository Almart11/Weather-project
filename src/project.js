let time = document.querySelector("#date");
let currentTime = new Date();

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let currentDate = date.getDate();

  time.innerHTML = `${day}, ${month} ${currentDate}, ${hour}:${minutes} `;
}
formatDate(currentTime);

function showWeather(response) {
  let cityInput = document.querySelector("h1");
  cityInput.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = response.data.main.pressure;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

function searchCity(city) {
  let apiKey = "17cb293858a505cd5ee18684264f6ae9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  searchCity(cityInput.value);
}

let cityForm = document.querySelector("#searching");
cityForm.addEventListener("submit", showCity);

searchCity("Caracas");
