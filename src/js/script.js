// svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  // весь ваш код c jQuery

  // SLIDER

  $('.promo').slick({
    dots: false,
    infinite: true,
    swipe: true,
    autoplay: false,
    speed: 500,
    arrows: true,
    adaptiveHeight: true
  });

  // BURGER

  // $('.mobile-nav').click(function(){
  //   $('.menu__category').fadeToggle();
  // });








})

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

  // Классы
  const classWrap = `books__container`;
  const classList = `books-item__list`;
  const classItem = `books-item`;
  const classPhoto = `books-item__photo`;
  const classTitle = `books-item__title`;
  const classPrice = `books-item__price`;
  const classDescr = `books-item__description`;

  const classWrapPagination = `pagination__container`;
  const classListPagination = `pagination__list`;
  const classItemPagination = `pagination__item`;
  const classLinkPagination = `pagination__link`;

  // количество книг на разрешении свыше 768
  const countTablet = 8;
  // количество книг на мобилке до 768
  const countMobile = 3;

  const books = {
    count: 256,
    items: [
      {
        title: 'Правила мозга',
        price: 700
      },
      {
        title: 'Всегда вовремя',
        price: 920
      },
      {
        title: 'Супермен по привычке',
        price: 590
      },
      {
        title: 'Работа как внутренняя игра',
        price: 700
      },
      {
        title: 'Дзен-камера',
        price: 840
      },
      {
        title: 'Быть интровертом',
        price: 680
      }
    ]
  };

  // Добавление элемента на страницу
  function addToPage(element, targetClass) {
    const wrap = document.querySelector(targetClass);
    wrap.appendChild(element);
  }

  // Удаление элемента из  DOM
  function removeFromPage(targetClass) {
    const element = document.querySelector(`.${targetClass}`);
    const parent = element.parentElement;
    parent.removeChild(element);
  }

  // Создание элемента с классом
  function createElement(tag, classElement) {
    const element = document.createElement(tag);
    element.classList.add(classElement);
    return element;
  }

  // Добавляем элементы книг в общую обертку
  function addItems(data) {
    const booksListNode = createElement('div', classList);
    const items = data.items;

    for (let i = 0; i < items.length; i++) {
      const booksItemNode = createElement('div', classItem);
      booksItemNode.innerHTML = `
        <a href="#" class="books-item__link">
          <img class="${classPhoto}" src="img/${items[i].uri}.png" alt="${items[i].name}">
          <h3 class="${classTitle}">${items[i].name}</h3>
          <p class="${classDescr}">${items[i].desc}</p>
          <span class="${classPrice}">${items[i].price} &#8381;</span>
        </a>`;

      booksListNode.appendChild(booksItemNode);
    }

    return booksListNode;
  }

  function addItemsPagination(count) {
    const paginationListNode = createElement('ul', classListPagination);
    for (let i = 0; i < count; i++) {
      const paginationItemNode = createElement('li', classItemPagination);
      paginationItemNode.innerHTML = `<a href="#" class="${classLinkPagination}">${i+1}</a>`;
      paginationListNode.appendChild(paginationItemNode);
    }
    return paginationListNode;
  }

  // Удаление старого контента и добавление нового
  function toggleContent(button) {
    const btn = document.querySelector(button);

    if(!btn) {
      return;
    }

    btn.addEventListener('click', function(){
      removeFromPage(classList);
      addToPage(addItems(), '.books__container');
    });
  }

  toggleContent('.j-view-books');

  function calculatePageNumber(data) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      return Math.ceil(data.count / countTablet);
    } else {
      return Math.ceil(data.count / countMobile);
    }
  }

  function getItemsPerPage() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      return countTablet;
    } else {
      return countMobile;
    }
  }

  function generateListener() {
    const paginationItems = document.querySelectorAll(`.${classItemPagination}`);
    paginationItems.forEach(function(elem,index){
      elem.addEventListener('click', function(){
        getServerData(index+1);
      });
    });
  }

  function getServerData(page, type = '') {
    const perPage = getItemsPerPage();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.do-epixx.ru/htmlpro/bookstore/books/get/${page}/${perPage}/${type}`);

    xhr.send();

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const countPage = calculatePageNumber(data);
        const paginationNode = addItemsPagination(countPage);

        removeFromPage(classListPagination);
        addToPage(paginationNode,`.${classWrapPagination}`);

        const booksNode = addItems(data);
        removeFromPage(classList);
        addToPage(booksNode,`.${classWrap}`);

        generateListener();
      } else if (xhr.readyState !== 4) {
        console.log(`жду полной загрузки: ${xhr.readyState}`);
      }
    };
  }

  generateListener();
















  // addToPage(addItems(), '.books__content');

});
