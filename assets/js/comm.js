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
    hide: false,
  },
  mousewheel: true,
});

var swiper = new Swiper(".swiper-prod", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: true },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
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
  // footer
  const ftSns = $(".goto-sns");
  const ftSnsList = $(".goto-list-sns");
  ftSns.click(function () {
    ftSnsList.slideToggle();
    ftSns.toggleClass("active");
  });

  const ftFamily = $(".goto-family");
  const ftFamilyList = $(".goto-list-family");
  ftFamily.click(function () {
    ftFamilyList.slideToggle();
    ftFamily.toggleClass("active");
  });
  $("a").attr("href", "javascript:void(0)");

  //header-pc

  const pcNav = $(".gnb-pc .nav-list");
  const gnbBg = $(".gnb-pc-bg");
  const navDepth2 = $(".gnb-pc .nav-list-depth2");

  pcNav.mouseenter(function () {
    gnbBg.addClass("hover");
    navDepth2.addClass("hover");

    const listName = $(".nav-list").find("a");

    listName.mouseenter(function () {
      $(this).addClass("hover");
    });

    listName.mouseleave(function () {
      $(this).removeClass("hover");
    });

    gnbBg.mouseleave(function () {
      gnbBg.removeClass("hover");
      navDepth2.removeClass("hover");
    });
  });
  //goto버튼활성

  const gotobtn = $(".goto");
  gotobtn.click(function () {
    gotobtn.toggleClass("active");
  });
});

// gsap
$(document).ready(function () {
  const flowerFirst = $(".flower-first");
  const flowerSecond = $(".flower-second");
  const flowerthird = $(".flower-third");
  const flowerFourth = $(".flower-fourth");
  gsap.fromTo(
    flowerFirst,
    { scale: 0.8 },
    { scale: 1.5, duration: 0.5, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerSecond,
    { scale: 0.5 },
    { scale: 1.3, duration: 0.7, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerthird,
    { scale: 0.8 },
    { scale: 1.7, duration: 0.9, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerFourth,
    { scale: 1 },
    { scale: 1.5, duration: 0.7, repeat: -1, yoyo: true }
  );

  gsap.registerPlugin(ScrollTrigger);

  const hd = document.querySelector("#header");
  window.addEventListener("scroll", _.throttle(hdScroll, 300));

  function hdScroll() {
    if (window.scrollY > 100) {
      gsap.to(hd, { opacity: 0, display: "none", duration: 0.5 });
    } else {
      gsap.to(hd, { opacity: 1, display: "flex", duration: 0.5 });
    }
  }
});

//   //header-mobile
//   const mbDepth1 = $(".nav-list-depth1");
//   const mbDepth2 = $(".nav-list-depth2");

//   mbDepth1.click(function () {
//     const currentDepth2 = $(this).find(mbDepth2);
//     currentDepth2.slideToggle();
//   });
