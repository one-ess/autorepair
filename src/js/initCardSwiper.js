import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const initCardSwiper = () => {
  const cardSwiper = document.querySelector(".services__cards-container");
  return new Swiper(cardSwiper, {
    modules: [Pagination, Navigation],
    centeredSlides: true,
    slideToClickedSlide: true,
    speed: 500,
    navigation: {
      nextEl: ".services__nav-button-next",
      prevEl: ".services__nav-button-prev",
    },
    pagination: {
      el: ".services__dots",
      clickable: true,
      bulletClass: "services__dot",
      renderBullet: function (_, className) {
        return `<li class="${className}"></li>`;
      },
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      600: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 13,
      },
    },
  });
};

export default initCardSwiper;
