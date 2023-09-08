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
}

function showCity(event) {
  event.preventDefault();
  let apiKey = "17cb293858a505cd5ee18684264f6ae9";
  let units = "metric";
  let cityInput = document.querySelector("#city");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let cityForm = document.querySelector("#searching");
cityForm.addEventListener("submit", showCity);
