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
  // footer
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
});

// gsap
$(document).ready(function () {
  const flowerFirst = $(".flower-first");
  const flowerSecond = $(".flower-second");
  const flowerthird = $(".flower-third");
  const flowerFourth = $(".flower-fourth");
  gsap.fromTo(
    flowerFirst,
    { scale: 1 },
    { scale: 1.5, duration: 1, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerSecond,
    { scale: 1 },
    { scale: 1.3, duration: 1, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerthird,
    { scale: 1 },
    { scale: 1.5, duration: 1, repeat: -1, yoyo: true }
  );
  gsap.fromTo(
    flowerFourth,
    { scale: 1 },
    { scale: 1.5, duration: 1, repeat: -1, yoyo: true }
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
