const getWeatherIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const windToKmPerHour = (meterPerSeconds) => {
  return Math.round((meterPerSeconds * 3600) / 1000);
};
