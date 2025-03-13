import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

const initPortfolioSwiper = () => {
  const portfolioSwiper = document.querySelector(".portfolio__list-container");
  return new Swiper(portfolioSwiper, {
    modules: [Pagination, EffectFade, Autoplay, Navigation],
    slidesPerView: 1,
    autoplay: true,
    speed: 600,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".portfolio__nav-button-next",
      prevEl: ".portfolio__nav-button-prev",
    },
    pagination: {
      el: ".portfolio__dots",
      clickable: true,
      bulletClass: "portfolio__dot",
      renderBullet: function (_, className) {
        return `<li class="${className}"></li>`;
      },
    },
  });
};

export default initPortfolioSwiper;
