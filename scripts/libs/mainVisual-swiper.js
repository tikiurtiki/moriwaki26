document.addEventListener("DOMContentLoaded", function () {
  const mainVisual = new mainVisualSlider();
});

class mainVisualSlider {
  constructor() {
    this.swiper = new Swiper(".main-visual-swiper-container", {
      // Optional parameters
      loop: true,
      effect:'fade',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
       // breakpoints: {
      //   600: {
      //     // slidesPerView: 1.5,
      //     spaceBetween: 100,
      //   },
      //   960: {
      //     // slidesPerView: 1,
      //     spaceBetween: 100,
      //   },
      // },
    });
  }
}
