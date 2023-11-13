(self["webpackChunkstart"] = self["webpackChunkstart"] || []).push([["main"],{

/***/ "./node_modules/gulp-web-images-css/plugin.js":
/*!****************************************************!*\
  !*** ./node_modules/gulp-web-images-css/plugin.js ***!
  \****************************************************/
/***/ (() => {

const detect=function(A=[]){var t=[{type:"webp",url:"data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A"},{type:"avif",url:"data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAPFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEVAAEAAAAeAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAHBpcHJwAAAAUWlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAABBwYXNwAAAAAQAAAAEAAAAVYXYxQ4EgAAAKBzgABpAQ0AIAAAAQcGl4aQAAAAADCAgIAAAAF2lwbWEAAAAAAAAAAQABBAECg4QAAAAmbWRhdAoHOAAGkBDQAjITFkAAAEgAAAB5TNw9UxdXU6F6oA == "}].concat(A),e={},o=[],a=document.querySelector('html');return t.map(((A,t)=>{!function(A){let t=new Image;t.src=A.url,t.onerror=function(t){var s=new Set(a.getAttribute("class")?a.getAttribute("class").split(" "):[]);o.push(new Promise((function(t,o){e[A.type.toLowerCase()]=!1,t({[A.type.toLowerCase()]:!1})}))),s.add("no-"+A.type.toLowerCase()),a.setAttribute("class",[...s].join(" ")),console.log(A.type.toUpperCase()+" not supported in this browser",t)},t.onload=function(t){var s=new Set(a.getAttribute("class")?a.getAttribute("class").split(" "):[]);o.push(new Promise((function(t,o){e[A.type.toLowerCase()]=!0,t({[A.type.toLowerCase()]:!0})}))),s.add(A.type.toLowerCase()),a.setAttribute("class",[...s].join(" ")),console.log(A.type.toUpperCase()+" supported in this browser")}}(A)})),Promise.all(o).then((function(){return e}))};detect()


/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ "./src/scripts/modules/functions.js");
/* harmony import */ var _modules_sliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders.js */ "./src/scripts/modules/sliders.js");
/* harmony import */ var gulp_web_images_css_plugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gulp-web-images-css/plugin.js */ "./node_modules/gulp-web-images-css/plugin.js");



window.addEventListener('load', function () {
  document.addEventListener('click', function (event) {
    console.log(event.target);
    // раскомментировать если нужна проверка на поддержку  браузером формата webp
    // flsFunctions.testWebp()

    //##################################################################################
    // иконка и раскрытие/закрытие мобильного меню (бургер)
    /* использовать класс .burger-icon__button для кнопки и
      использовать класс */
    _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu(event);
    //##################################################################################

    //###############################################################################
    /* работа с табами */
    /* добавить data-tab */
    // flsFunctions.tabs()
    //###############################################################################

    /*
    * модальные окна. кнопкам давать класс "_open-modal-btn" 
    * так же через data-modal-id указать id модального окна которое нужно открыть 
    * <button class="_open-modal-btn" data-modal-id="modal-4" /> 
    * модальным окнам давать класс "modal" и указать id вида "modal-1", "modal-2" 
    * <div class="modal" id="modal-4"> 
    * возмножно открывать модальные окна из модальных окон
    */
    _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.modalWindows(event);
    // ...

    /* 
    * работа с "аккордеоном"
    * вторым параметром можно передать false если нужно
      чтобы одновременно было активно не более одного элемента
    * параметр true можно не передавать и опустить, по умолчанию
      будут показаны все активные элементы  
    *  _accordion - класс для блока-контейнера всех панелей аккордеона
    *  _accordion__item  - класс для элемента аккордеона
    *  _accordion__header - клаа для заголовка аккордеона
    *  _accordion__body  - кдасс для тела аккордеона который содержит скрытую информацию
    * пример:
    * <ul class="_accordion">
    *   <li class="_accordion__item">
    *     <div class="_accordion__header">ACCORDION HEADER</div>
    *     <div class="_accordion__body">ACCORDION BODY</div>
    *   </li>
    * </ul>
    */
    _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.accordion(event, false);
    // ...
  });

  console.log('loaded');

  /* Выполняются после загрцзки страницы */

  /* 
  (I) прячет Header при прокрутке вниз
  
  ?? нужно доработать для выбора направляния прокрутки для прятания Header
  */
  _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.hiddenHeader();
  //...

  /*
  (I) плавное появление блоков с классом .fade-in
  */

  // /////////////////////////////////////////////////////////////
  document.querySelectorAll('section').forEach(function (item, index) {
    if (index > 0) {
      index % 2 === 0 ? item.classList.add('fade-in', 'fade-in--odd') : item.classList.add('fade-in', 'fade-in--even');
    }
  });
  ///////////////////////////////////////////////////////////////
  _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.fadeIn();
  _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.scrollHandler();
});

/***/ }),

/***/ "./src/scripts/modules/functions.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/functions.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: () => (/* binding */ accordion),
/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu),
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   hiddenHeader: () => (/* binding */ hiddenHeader),
/* harmony export */   modalWindows: () => (/* binding */ modalWindows),
/* harmony export */   scrollHandler: () => (/* binding */ scrollHandler),
/* harmony export */   testWebp: () => (/* binding */ testWebp)
/* harmony export */ });
var _document;
use: "strict";

// ========Constantes================
var timeout = 0; //transition time in website
var overlay = document.querySelector('.modal-overlay');
// ===================================================

// ===========letiables============
var isLock = null;
var currentModal = null;
// =================================

// ============== Вспомогательные функции =============
function scrollLock() {
  document.body.style.paddingRight = "".concat(window.innerWidth - document.body.offsetWidth, "px");
  document.body.style.overflowY = "hidden";
  isLock = true;
}
function scrollUnlock() {
  document.body.style.paddingRight = "unset";
  document.body.style.overflowY = "auto";
  isLock = false;
}
// =======================================================

//========================= to Delete =====================
console.log('listen');
var desktopButton = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header__actions').firstElementChild;
window.addEventListener('resize', function () {
  window.matchMedia("min-width: 1023px").matches ? console.log('big screen') : console.log('small screen');
  ;
  // if (desktopButton) window.innerWidth < 967.98 ? desktopButton.textContent = 'Apply' : desktopButton.textContent = 'Apply for grant'
});
// if (desktopButton) window.innerWidth < 967.98 ? desktopButton.textContent = 'Apply' : desktopButton.textContent = 'Apply for grant'
//=========================================================

function modalWindows(event) {
  if (event.target.classList.contains('_open-modal-btn')) {
    var _document2;
    var currenttModalId = event.target.dataset.modalId;
    var modal = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector("#".concat(currenttModalId));
    if (modal) {
      event.preventDefault();
      showModal(modal);
      scrollLock();
    }
  }
  function showModal(modal) {
    closeModal();
    currentModal = modal;
    overlay.classList.add('modal-overlay--open');
    modal.classList.add('modal--show');
    window.addEventListener('click', closeModalHandler);
    window.addEventListener('keydown', escapeKeyHandler);
  }
  function closeModal() {
    if (currentModal) {
      overlay.classList.remove('modal-overlay--open');
      currentModal.classList.remove('modal--show');
      currentModal = null;
      scrollUnlock();
      window.removeEventListener('click', closeModalHandler);
      window.removeEventListener('keydown', escapeKeyHandler);
      // setTimeout(() => {
      // }, timeout);
    }
    ;
  }
  function closeModalHandler(event) {
    var isModalOverlay = Boolean(event.target.classList.contains('modal-overlay--open'));
    if (currentModal && (event.target.closest('.close-btn') || isModalOverlay)) closeModal();
  }
  function escapeKeyHandler(event) {
    if (currentModal && event.code === "Escape") {
      closeModal();
    }
  }
}
function burgerMenu(event) {
  if (event.target.closest('.burger-icon__button')) {
    var _document3, _document4;
    var mobileMenu = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('.menu');
    var burgerBtn = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector(".burger-icon__button");
    burgerBtn.classList.toggle('burger-icon__button--active');
    mobileMenu.classList.toggle('menu--mobile-view');
    isLock ? scrollUnlock() : scrollLock();
  }
}
var activeAccordionItem = null;
function accordion(event) {
  var alwaysOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var accordionHeader = event.target.closest('._accordion__header');
  var currentAccordionItem = event.target.closest('._accordion__item');
  if (!accordionHeader) {
    return;
  }
  var accordion = accordionHeader.closest('._accordion');
  var isActive = currentAccordionItem === activeAccordionItem;
  if (!alwaysOpen) {
    accordion.querySelectorAll('._accordion__item').forEach(function (item) {
      item.classList.remove('_accordion__item--show');
    });
    if (isActive) {
      activeAccordionItem = null;
      return;
    }
  }
  currentAccordionItem.classList.toggle('_accordion__item--show');
  activeAccordionItem = isActive && !alwaysOpen ? null : currentAccordionItem;
}
function testWebp() {
  var WebPTest = new Image();
  WebPTest.onload = WebPTest.onerror = function () {
    var className = WebPTest.height == 2 ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  };
  WebPTest.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
function hiddenHeader() {
  var prevScrollPos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      // document.querySelector(".header").style.top = "0";
      document.querySelector('.header').classList.remove('header--hidden');
    } else {
      // document.querySelector(".header").style.top = "-120px";
      document.querySelector('.header').classList.add('header--hidden');
    }
    prevScrollPos = currentScrollPos;
  };
}
function fadeIn() {
  // window.addEventListener("scroll", function () {
  var fadeIns = document.querySelectorAll(".fade-in");
  for (var i = 0; i < fadeIns.length; i++) {
    var position = fadeIns[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (position < windowHeight - 100 && position > -fadeIns[i].offsetHeight) {
      fadeIns[i].classList.add("active");
    } else {
      fadeIns[i].classList.remove("active");
    }
  }
  // });
}

function scrollHandler() {
  window.addEventListener("scroll", fadeIn);
}

/***/ }),

/***/ "./src/scripts/modules/sliders.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/sliders.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Выполняются после загрцзки страницы */

/*
* инициализация слайдеров Swiper,js
* пока не решил какой именно функционал я хочу прикрутить
* будет ли происходить инициализация с общими параметрами
* или же нужно бцдет под каждый слайдер создавать конфиг
*/
var projectsSliderConfig = {
  spaceBetween: 10,
  slidesPerView: "auto",
  breakpoints: {
    320: {
      spaceBetween: 24
    },
    600: {
      spaceBetween: 24
    },
    767: {
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.projects__slider-pagination.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.projects__slider-next.slider-next',
    prevEl: '.projects__slider-prev.slider-prev'
  }
};
var projectsSlider = new Swiper('.projects-slider', projectsSliderConfig);
projectsSlider.init();
// ...

//..
var bodyDiscoverSliderConfig = {
  spaceBetween: 16,
  slidesPerView: "auto",
  // centeredSlides: true,
  grabCursor: true
};
var bodyDiscoverSlider = new Swiper('.body-discover__slider', bodyDiscoverSliderConfig);
// ...

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);