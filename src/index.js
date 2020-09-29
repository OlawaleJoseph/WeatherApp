import './app.css';
import { getWeatherByCityName, getWeatherByCords, getIconUrl } from './utils/fetch';
import Form from './components/Searchfrom';

const successfulLookup = async (position) => {
  const { latitude, longitude } = position.coords;
  const { name, weather } = await getWeatherByCords(latitude, longitude);
  await getIconUrl(weather[0].icon);
  console.log('Accept', name, weather);
};

const unsuccessfulLookup = async () => {
  const { name, weather } = await getWeatherByCityName('Lagos');
  await getIconUrl(weather[0].icon);
  console.log('Reject', name, weather);
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

Form();


chooseBgImage(3);