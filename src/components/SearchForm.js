import { getWeatherByCityName } from '../utils/fetch';

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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherByCityName(input.value);
    form.reset();
  });

  document.querySelector('#content').appendChild(form);
};
