const apiKey = "f68d36605b82d5d313fb77da51d5e70c";

const getCurrentWeatherEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForecastEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};
