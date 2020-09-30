export default () => {
  const toggleContainer = document.createElement('div');
  toggleContainer.classList.toggle('toggle-container');
  const toggler = document.createElement('div');
  toggler.classList.add('toggler');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'toggle';
  checkBox.classList.add('hide', 'toggle');
  const celcius = document.createElement('span');
  celcius.innerHTML = '&deg; C';
  const farenheit = document.createElement('span');
  farenheit.innerHTML = '&deg; F';
  const checkBoxLabel = document.createElement('label');
  checkBoxLabel.setAttribute('for', 'toggle');
  checkBoxLabel.classList.add('toggleBtn');
  checkBoxLabel.addEventListener('click', () => {
    document.querySelector('#celciusTemp').classList.toggle('hide');
    document.querySelector('#farenheitTemp').classList.toggle('hide');
  });

  toggler.appendChild(checkBox);
  toggler.appendChild(checkBoxLabel);

  toggleContainer.appendChild(celcius);
  toggleContainer.appendChild(toggler);
  toggleContainer.appendChild(farenheit);

  return toggleContainer;
};
