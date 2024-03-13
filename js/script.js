'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const multiLanguageDropdown = () => {
    const dropdowns = document.querySelectorAll('.language-select');

    dropdowns.forEach(el => {
      el.addEventListener('click', () => {
        const dropdownBtn = el.querySelector('.language-select__button');
        const dropdownListWrapper = el.querySelector(
          '.language-select__list-wrapper'
        );
        dropdownBtn.classList.toggle('active');
        dropdownListWrapper.classList.toggle('active');
      });
    });
  };

  /* Burger menu */
  function burgerMenu() {
    const burger = document.querySelector('.menu__burger');
    const menuList = document.querySelector('.menu__list-wrapper');

    //const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('.menu__list-link');

    function hideBurgerMenu() {
      menuList.classList.remove('active');

      burger.classList.remove('open');
      //overlay.classList.remove('overlay--show');
    }

    burger.addEventListener('click', () => {
      if (!menuList.classList.contains('active')) {
        menuList.classList.add('active');

        burger.classList.add('open');

        //overlay.classList.add('overlay--show');
      } else {
        hideBurgerMenu();
      }
    });
    // Cкрываем мобильное меню по нажатию на ссылку в меню
    menuLinks.forEach(link => {
      link.addEventListener('click', hideBurgerMenu);
    });

    //Брейкпойнт, на котором появляется бургер-меню
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menuList.classList.remove('active');

        burger.classList.remove('open');
      }
    });

    //overlay.addEventListener('click', hideBurgerMenu);
  }

  burgerMenu();
  multiLanguageDropdown();
});
