import './app.css';
import { getWeatherByCityName, getWeatherByCords } from './utils/fetch';
import renderForm from './components/SearchForm';
import renderWeather from './utils/common';

const successfulLookup = async (position) => {
  const { latitude, longitude } = position.coords;
  const {
    name, weather, sys, main,
  } = await getWeatherByCords(latitude, longitude);
  await renderWeather(name, weather, sys, main);
};

const unsuccessfulLookup = async () => {
  const {
    name, weather, sys, main,
  } = await getWeatherByCityName('Lagos');
  await renderWeather(name, weather, sys, main);
};

if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(successfulLookup, unsuccessfulLookup);
}

window.addEventListener('load', () => {
  renderForm();
});