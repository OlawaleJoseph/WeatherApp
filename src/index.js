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

const content = document.querySelector('#content');

const chooseBgImage = (num) => {
  switch (num) {
    case 1:
      content.style.backgroundImage = "url('https://images.unsplash.com/photo-1599765061695-d79c66ce2241?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format)";
      break;
    case 2:
      content.style.backgroundImage = "url('https://images.unsplash.com/photo-1600544124510-d61fd1b3cd2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop)";
      break;
    case 3:
      content.style.backgroundImage = "url('https://images.unsplash.com/photo-1601204671622-ad4537d34bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop')";
      break;
    default:
      break;
  }
};

window.addEventListener('load', () => {
  chooseBgImage(3);
  renderForm();
});