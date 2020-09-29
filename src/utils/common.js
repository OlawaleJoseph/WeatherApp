import { getIconUrl } from './fetch';
import WeatherWidget from '../components/widget';

export default async (name, weather, sys, main) => {
  const iconUrl = await getIconUrl(weather[0].icon);
  WeatherWidget(name, sys.country, main.temp, weather[0].description, iconUrl);
};