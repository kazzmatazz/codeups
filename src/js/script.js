
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // スワイパー1
  const swiper1 = new Swiper(".swiper1", {
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // スワイパー2
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
      }
    },
  });
});
