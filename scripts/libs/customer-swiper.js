document.addEventListener("DOMContentLoaded", function () {
  const customer = new customerSlider();
});

class customerSlider {
  constructor() {
    this.swiper = new Swiper(".customer-swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Optional parameters
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      slidesPerView: 1.4,
      speed: 1000,
      grabCursor: true,
      
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }
}
