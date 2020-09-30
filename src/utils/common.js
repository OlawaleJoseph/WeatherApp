import { getIconUrl } from './fetch';
import WeatherWidget from '../components/widget';

const setBackGroundImage = (weatherId) => {
  const firstDigit = weatherId.toString()[0];
  const content = document.querySelector('#content');
  switch (firstDigit) {
    case '2':
      content.style.backgroundImage = "url('./assets/images/stormy.jpg')";
      break;
    case '3':
    case '5':
      content.style.backgroundImage = "url('./assets/images/rainy.jpg')";
      break;
    case '6':
      content.style.backgroundImage = "url('./assets/images/snow.jpg')";
      break;
    case '7':
      content.style.backgroundImage = "url('./assets/images/atmosphere.jpg')";
      break;
    case '8':
      content.style.backgroundImage = "url('./assets/images/cloudy.jpg')";
      break;
    default:
      content.style.backgroundImage = "url('./assets/images/clear_sky.jpg')";
      break;
  }

  if (weatherId === 800) {
    content.style.backgroundImage = "url('./assets/images/clear_sky.jpg')";
  }
};

export default async (name, weather, sys, main) => {
  const { icon } = weather[0];
  const iconUrl = await getIconUrl(icon);
  const { country } = sys;
  const { temp } = main;
  const { description } = weather[0];
  WeatherWidget(name, country, temp, description, iconUrl);
  const { id } = weather[0];
  setBackGroundImage(id);
};