import './app.css';
import { getWeatherByCityName, getWeatherByCords } from './utils/fetch';

const successfulLookup = async (position) => {
  const { latitude, longitude } = position.coords;
  const { name, weather } = await getWeatherByCords(latitude, longitude);
  console.log('Accept', name, weather);
};

const unsuccessfulLookup = async () => {
  const { name, weather } = await getWeatherByCityName('Lagos');
  console.log('Accept', name, weather);
};

if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(successfulLookup, unsuccessfulLookup);
}