// svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {
  // весь ваш код c jQuery
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
function ready(fn) {
  if (
    document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const searchButton = document.querySelector('.card-buttons__left');
  const extendButton = document.querySelector('.card-buttons__right');

  const info = document.querySelector('.info');
  const searchInput = document.querySelector('.search-input');

  const toggleExtention = () => {
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  };
  extendButton.addEventListener('click', toggleExtention);

  const toggleSearch = () => {
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block';
    } else {
      searchInput.style.display = 'none';
    }
  };
  searchButton.addEventListener('click', toggleSearch);
});
