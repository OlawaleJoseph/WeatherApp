import { getWeatherByCityName } from '../utils/fetch';
import renderWidget from '../utils/common';

export default () => {
  const form = document.createElement('form');
  form.classList.add('searchForm');
  const input = document.createElement('input');
  input.classList.add('citySearchInput');
  input.type = 'text';
  input.placeholder = 'City Name';
  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.innerText = 'Search';
  btn.classList.add('searchBtn');

  form.appendChild(input);
  form.appendChild(btn);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, weather, sys, main,
    } = await getWeatherByCityName(input.value);
    form.reset();
    renderWidget(name, weather, sys, main);
  });

  document.querySelector('#content').appendChild(form);
};
