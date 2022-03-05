//==================== <!-- ImageBg --> ========================//
function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();
//====================  <!-- ImageBg -->  ========================//

const infoSwiper = new Swiper('.slider-info', {
   slidesPerView: 1,
   speed: 400,
   slideClass: 'slider-info__slide',
   wrapperClass: 'slider-info__wrapper',
   pagination: {
      el: '.slider-info__pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.slider-info__button-next',
      prevEl: '.slider-info__button-prev',
   },
   breakpoints: {
      580: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      900: {
         slidesPerView: 2,
         spaceBetween: 62
      }
   }
});


const reviewsSwiper = new Swiper('.slider-reviews', {
   slidesPerView: 1,
   speed: 400,
   slideClass: 'slider-reviews__slide',
   wrapperClass: 'slider-reviews__wrapper',
   navigation: {
      nextEl: '.slider-reviews__button-next',
      prevEl: '.slider-reviews__button-prev',
   },
   breakpoints: {
      580: {
         slidesPerView: 2,
         spaceBetween: 19,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 19,
      },
      900: {
         slidesPerView: 3,
         spaceBetween: 19,
      }
   }
});