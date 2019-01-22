// svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {
  // весь ваш код c jQuery
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  let isExtended = false;
  let isSearching = false;
  const searchButton = document.querySelector('.card-buttons__left');
  const extendButton = document.querySelector('.card-buttons__right');
  const logo = document.querySelector('.logo');
  const info = document.querySelector('.info');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  const renderLogo = (option, width, height) => {
    logo.innerHTML = `
      <svg width="${width}" height="${height}">
        <use xlink:href="img/sprite-svg.svg#logo-${option}"></use>
      </svg>
    `;
  };

  const renderButton = (option, width, height) => {
    extendButton.innerHTML = `
      <svg width="${width}" height="${height}">
        <use xlink:href="img/sprite-svg.svg#${option}"></use>
      </svg>
    `;
  };

  const extendCard = () => {
    isExtended = true;
    info.style.display = 'block';
    renderButton('arrow-up', 11, 7);
  };

  const collapseCard = () => {
    isExtended = false;
    info.style.display = 'none';
    renderButton('arrow-down', 12, 8);
  };

  const extendButtonToggler = () => {
    if (!isExtended && !isSearching) {
      extendCard();
    } else if (isExtended && !isSearching) {
      collapseCard();
    } else {
      closeSearch();
    }
  };

  extendButton.addEventListener('click', extendButtonToggler);

  const openSearch = () => {
    isSearching = true;
    renderLogo('searching', 13, 17);
    renderButton('close', 20, 20);
    searchInput.style.display = 'block';
    if (isExtended) {
      info.style.display = 'none';
    }
  };

  const closeSearch = () => {
    isSearching = false;
    collapseCard();
    searchInput.style.display = 'none';
    searchResults.style.display = 'none';
    searchInput.value = null;
    renderLogo('collapsed', 80, 28);
  };

  const searchToggler = () => {
    if (!isSearching) {
      openSearch();
    } else {
      closeSearch();
    }
  };

  searchButton.addEventListener('click', searchToggler);

  const resultsRenderer = evt => {
    if (evt.target.value.length > 2) {
      searchResults.style.display = 'block';
    } else {
      searchResults.style.display = 'none';
    }
  };

  searchInput.addEventListener('input', resultsRenderer);
});
