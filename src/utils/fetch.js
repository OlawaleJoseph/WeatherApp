export const getWeatherByCords = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9c560aafa1296b8c6d8ea89e37551594`;
  try {
    const res = await fetch(url);
    const response = await res.json();
    const { name, weather } = response;
    return { name, weather };
  } catch (error) {
    return error;
  }
};

export const getWeatherByCityName = async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9c560aafa1296b8c6d8ea89e37551594`;

  try {
    const res = await fetch(url);
    const response = await res.json();
    const { name, weather } = response;
    return { name, weather };
  } catch (error) {
    return error;
  }
};