const celciusTofarenheit = (deg) => ((deg * (9 / 5)) + 32).toFixed(1);

export default (userLocation, country, deg, description, iconUrl) => {
  let widget = document.querySelector('.widget');
  const celsiusDeg = (deg - 273.15).toFixed(1);

  if (!widget) {
    widget = document.createElement('div');
    widget.classList.add('widget');
  } else {
    widget.innerHTML = '';
  }

  const location = document.createElement('h2');
  location.innerText = `${userLocation}, ${country}`;
  location.classList.add('location');
  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp');
  const icon = document.createElement('img');
  icon.src = iconUrl;
  icon.classList.add('icon');
  const temprature = document.createElement('h1');
  temprature.innerHTML = `${celsiusDeg}&deg; C | ${celciusTofarenheit(celsiusDeg)}&deg; F`;
  tempContainer.appendChild(icon);
  tempContainer.appendChild(temprature);
  const weatherDescription = document.createElement('h4');
  weatherDescription.innerText = description;
  weatherDescription.classList.add('description');

  widget.appendChild(location);
  widget.appendChild(tempContainer);
  widget.appendChild(weatherDescription);

  document.querySelector('#content').appendChild(widget);
};