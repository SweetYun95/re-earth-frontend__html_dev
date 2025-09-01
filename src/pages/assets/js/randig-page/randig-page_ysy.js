// 최소 설정 (반응형: 로고 2→3→5개 노출)
var partnersSwiper = new Swiper('.partners-slider', {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 16,
   breakpoints: {
      576: { slidesPerView: 3, spaceBetween: 20 },
      992: { slidesPerView: 5, spaceBetween: 24 },
   },
   pagination: { el: '.partners-slider__pagination', clickable: true },
   navigation: { nextEl: '.partners-slider__next', prevEl: '.partners-slider__prev' },
   autoplay: { delay: 2500, disableOnInteraction: false },
})
