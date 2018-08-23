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

  $('.mobile-nav').click(function(){
    $('.menu__category').fadeToggle();
  });








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
  const contentClass = 'books__content';
  const listClass = 'books__list';
  const itemClass = 'books__item';
  const titleClass = 'books__title';
  const priceClass = 'books__price';

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




});
