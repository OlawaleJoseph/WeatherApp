export default () => {
  const formWrapper = document.createElement('div');
  formWrapper.innerHTML = `  <form class="searchForm">
  <input type="text" placeholder="City Name" class="citySearchInput">
  <button type="submit" class="searchBtn">Search</button>
  </form>`;
  document.querySelector('#content').appendChild(formWrapper);
  return formWrapper;
};
