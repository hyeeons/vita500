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

AOS.init({ duration: 1000, easing: "ease-in-out", once: true, dealy: 0 });

$(document).ready(function () {
  const ftSns = $(".ft-gotosns-wrap");
  const ftSnsList = $(".gotolist-sns");
  ftSns.click(function () {
    ftSnsList.slideToggle();
    ftSns.toggleClass("active");
  });
  const ftSite = $(".ft-gotosite-wrap");
  const ftSiteList = $(".gotolist-family");
  ftSite.click(function () {
    ftSiteList.slideToggle();
    ftSite.toggleClass("active");
  });

  const btnGoto = $(".goto-wrap");
  btnGoto.click(function () {
    $(this).toggleClass("orange");
  });

  $("a").attr("href", "javascript:void(0)");

  //header-mobile
});
