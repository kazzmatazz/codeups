
jQuery(function ($) {
  // ハンバーガーメニュー
  // 背景がスクロールされないように
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
    $("body").toggleClass("active");
  });

  // スワイパー1
  const swiper1 = new Swiper(".js-mv-swiper", {
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // スワイパー2
  const swiper2 = new Swiper(".js-campaign-swiper", {
    loop: true,
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

  // アニメ出現
  let box = $('.colorbox'),
  speed = 700;
  box.each(function(){
  $(this).append('<div class="color"></div>')
  let color = $(this).find($('.color')),
  image = $(this).find('img');
  let counter = 0;
  image.css('opacity','0');
  color.css('width','0%');
  color.on('inview', function(){
    if(counter == 0){
    $(this).delay(200).animate({'width':'100%'},speed,function(){
          image.css('opacity','1');
          $(this).css({'left':'0' , 'right':'auto'});
          $(this).animate({'width':'0%'},speed);
        })
    counter = 1;
    }
  });
  });

  // ページトップボタン
  const pageTop = $(".page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $(".page-top").hide();
  $(window).on("scroll", function () {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".page-top").css({
        position: "absolute",
        bottom: footHeight,
      });
    } else {
      $(".page-top").css({
        position: "fixed",
        bottom: "0",
      });
    }
  });
});
