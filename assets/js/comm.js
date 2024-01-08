var swiper = new Swiper(".swiper-bnr", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
});

var swiper = new Swiper(".swiper-history", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  mousewheel: true,
});

var swiper = new Swiper(".swiper-prod", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: true },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-vdo", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: -50,
    },
  },
});

$(document).ready(function () {
  const $gotosnsWrap = $(".ft-gotosns-wrap");
  $gotosnsWrap.click(function () {
    $(this).toggleClass("active");
  });

  const $gotositeWrap = $(".ft-gotosite-wrap");
  $gotositeWrap.click(function () {
    $(this).toggleClass("active");
  });

  const $gotosnsSpan = $(".ft-gotosns span");
  const $gotosns = $(".gotolist-sns");
  $gotosnsSpan.click(function () {
    $gotosnsSpan.toggleClass("active");
    $gotosns.slideToggle();
  });

  const $gotositeSpan = $(".ft-gotosite span");
  const $gotosite = $(".gotolist-family");
  $gotositeSpan.click(function () {
    $gotositeSpan.toggleClass("active");
    $gotosite.slideToggle();
  });
});

AOS.init({ duration: 1000, easing: "ease-in-out", once: true, dealy: 0 });
