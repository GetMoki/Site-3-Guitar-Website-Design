//Сценарій сайту
"use strict";

//визначити за допомогою якого пристрою відкрито сайт:
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  macOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

//визначення чи на macOs відкрито сайт
const isMacOs = () => navigator.platform.indexOf('Mac') > -1;

//Функція заміни посилання в кнопці
const changeLink =
  document.getElementById('mainButton').onclick = function () {
    if (isMobile.iOS() || isMacOs()) {
      document.getElementById('mainButton').href = "https://www.apple.com/ua/app-store/";
    } else {
      document.getElementById('mainButton').href = "https://play.google.com/";
    }
  };

//додаємо клас до тегу body відповідно до пристою на якому відкрито сайт
if (isMobile.any()) {
  document.body.classList.add('_touch');
  //Змінюємо посиланя на конопці відповідно до системи на якому відкрито сайт
  changeLink();
} else {
  document.body.classList.add('_pc');
}

// Плавна прокрутка при кліку на родзіл меню 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');//записуємо в масив лише ті селектори які мають атрибут data-goto

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Поява меню після настикання на меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Показати більше гітар, показати менше гітар
const viewAllBoard = document.querySelector('.store__body_board').querySelector('.chapter__more');
const viewAllBoardGitars = document.querySelector('.store__body_board').querySelectorAll('.content__row_hide');
if (viewAllBoard) {
  viewAllBoard.addEventListener("click", function (e) {
    viewAllBoard.classList.toggle('_less');
    if (viewAllBoard.classList.contains('_less')) {
      viewAllBoard.textContent = 'view less';
    } else {
      viewAllBoard.textContent = 'view all';
    }
    for (let i = 0; i < viewAllBoardGitars.length; i++) {
      viewAllBoardGitars[i].classList.toggle('_all');
    }
  });
}
const viewAllSelling = document.querySelector('.store__body_selling').querySelector('.chapter__more');
const viewAllSellingGitars = document.querySelector('.store__body_selling').querySelectorAll('.content__row_hide');
if (viewAllSelling) {
  viewAllSelling.addEventListener("click", function (e) {
    viewAllSelling.classList.toggle('_less');
    if (viewAllSelling.classList.contains('_less')) {
      viewAllSelling.textContent = 'view less';
    } else {
      viewAllSelling.textContent = 'view all';
    }
    for (let i = 0; i < viewAllSellingGitars.length; i++) {
      viewAllSellingGitars[i].classList.toggle('_all');
    }
  });
}


// Слайдер 
const checkSwiper = document.querySelector('.swiper');

if (checkSwiper) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
}