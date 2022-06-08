const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const arad = document.querySelector(".dropdown-menu .arad");

const updateCurrentCity = (city) => {
  const currentCityElement = document.querySelector(".current-city");
  currentCityElement.innerHTML = city;
};

const updateWeather = (city) => {
  updateCurrentCity(city);
  diplayCurrentWeather(city);
  displayWeatherForecast(city);

  localStorage.setItem("city", city);
};

bucharest.addEventListener("click", () => {
  updateWeather("București");
});

timisoara.addEventListener("click", () => {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", () => {
  updateWeather("Oradea");
});

sibiu.addEventListener("click", () => {
  updateWeather("Sibiu");
});

arad.addEventListener("click", () => {
  updateWeather("Arad");
});
