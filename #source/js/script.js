//====================  <!-- GoTO -->  ========================//
const links = document.querySelectorAll('.scroll-to');
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', (e) => {
      e.preventDefault();

      const blockId = e.target.getAttribute('href').substring(1);

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
//====================  <!-- GoTO -->  ========================//

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


/*        intlTelInput         */

const inputPhone = document.querySelector("#phone"),
   errorMsg = document.querySelector("#error-msg"),
   validMsg = document.querySelector("#valid-msg");

var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

const intl = window.intlTelInput(inputPhone, {
   initialCountry: 'ua',
   utilsScript: "js/utils.js"
});

const reset = function () {
   inputPhone.classList.remove("error");
   errorMsg.innerHTML = "";
   errorMsg.classList.add("hide");
   validMsg.classList.add("hide");
};

inputPhone.addEventListener('blur', function () {
   reset();
   if (inputPhone.value.trim()) {
      if (intl.isValidNumber()) {
         validMsg.classList.remove("hide");
      } else {
         inputPhone.classList.add("error");
         var errorCode = intl.getValidationError();
         errorMsg.innerHTML = errorMap[errorCode];
         errorMsg.classList.remove("hide");
      }
   }
});

inputPhone.addEventListener('change', reset);
inputPhone.addEventListener('keyup', reset);

/*        //intlTelInput         */
/*
const button = document.querySelector('#form-button'),
   input = document.querySelector('input'),
   result = document.querySelector('#input-error');



button.addEventListener('click', function () {

   if (input.value === "") {
      button.setAttribute('disabled', true);
      result.textContent = "Заповніть пусте поле";
   } else {
      result.textContent = "Все ок!";
      button.removeAttribute('disabled', false);
   }
}, false)


function checkParams() {
   var name = $('#name').val();
   var email = $('#email').val();
   var phone = $('#phone').val();

   if (name.length != 0 && email.length != 0 && phone.length != 0) {
      $('#submit').removeAttr('disabled');
   } else {
      $('#submit').attr('disabled', 'disabled');
   }
}

$('#personaldata').change(function () {
   $('#submit').prop("disabled", !this.checked);
}).change()*/


