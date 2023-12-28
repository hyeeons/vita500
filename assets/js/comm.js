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
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // 768: {
//     //   slidesPerView: 4,
//     //   spaceBetween: 40,
//     // },
//     // 1280: {
//     //   slidesPerView: 5,
//     //   spaceBetween: 50,
//     // },
//   },

var swiper = new Swiper(".swiper-vdo", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
