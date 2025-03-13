import initCardSwiper from "./js/initCardSwiper";
import initPortfolioSwiper from "./js/initPortfolioSwiper";
import initModal from "./js/initModal";
import initVideo from "./js/initVideo";
import { initForms } from "./js/formController";

const init = () => {
  initModal();
  initVideo();
  initCardSwiper();
  initPortfolioSwiper();
  initForms();
};

init();
