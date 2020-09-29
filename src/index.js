import './app.css';
import { getWeatherByCityName, getWeatherByCords } from './utils/fetch';

const successfulLookup = position => {
  const { latitude, longitude } = position.coords;
  const { name, weather } = getWeatherByCords(latitude, longitude);
  console.log(name, weather);
};

if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(successfulLookup, () => getWeatherByCityName('Lagos'));
} else {
  
}