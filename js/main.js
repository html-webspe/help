"use strict";document.addEventListener("DOMContentLoaded",function(){!function(){for(var e=document.querySelectorAll(".ibg"),i=0;i<e.length;i++)e[i].querySelector("img")&&null!=e[i].querySelector("img").getAttribute("src")&&(e[i].style.backgroundImage="url("+e[i].querySelector("img").getAttribute("src")+")")}();new Swiper(".slider-info",{slidesPerView:1,speed:400,slideClass:"slider-info__slide",wrapperClass:"slider-info__wrapper",pagination:{el:".slider-info__pagination",clickable:!0},navigation:{nextEl:".slider-info__button-next",prevEl:".slider-info__button-prev"},breakpoints:{580:{slidesPerView:2,spaceBetween:30},900:{slidesPerView:2,spaceBetween:62}}}),new Swiper(".slider-reviews",{slidesPerView:1,speed:400,slideClass:"slider-reviews__slide",wrapperClass:"slider-reviews__wrapper",navigation:{nextEl:".slider-reviews__button-next",prevEl:".slider-reviews__button-prev"},breakpoints:{580:{slidesPerView:2,spaceBetween:19},768:{slidesPerView:2,spaceBetween:19},900:{slidesPerView:3,spaceBetween:19}}})});