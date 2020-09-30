export const getWeatherByCords = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9c560aafa1296b8c6d8ea89e37551594`;
  try {
    const res = await fetch(url, {
      mode: 'cors',
    });
    const response = await res.json();
    const {
      name, weather, sys, main,
    } = response;
    return {
      name, weather, sys, main,
    };
  } catch (error) {
    return error;
  }
};

export const getWeatherByCityName = async (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9c560aafa1296b8c6d8ea89e37551594`;
  try {
    const res = await fetch(url);
    const response = await res.json();
    const {
      name, weather, sys, main,
    } = response;
    return {
      name, weather, sys, main,
    };
  } catch (error) {
    return error;
  }
};

export const getIconUrl = async (iconCode) => {
  try {
    const { url } = await fetch(`http://openweathermap.org/img/w/${iconCode}.png`);
    return url;
  } catch (error) {
    return error;
  }
};