let scrollPosition = 0;

const initModal = () => {
  document.querySelectorAll(".card__button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const modal = document.querySelector(".modal-wrapper");
      if (e.target.dataset.modal === modal.dataset.modal) {
        scrollPosition = window.scrollY;
        modal.classList.add("modal-wrapper_active");
        document.body.style.cssText = `
        overflow:hidden;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px; 
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: -${scrollPosition}px;
        left: 0;
        `;
        document.documentElement.style.scrollBehavior = "unset";
      }
      modal.addEventListener("click", function (e) {
        if ((e.target.classList.contains("modal-wrapper") && e.target.classList.contains("modal-wrapper_active")) || e.target.classList.contains("modal-form__button-close")) {
          e.target.closest(".modal-wrapper").classList.remove("modal-wrapper_active");
          document.body.style.cssText = "";
          window.scroll({ top: scrollPosition });
          document.documentElement.style.scrollBehavior = "";
        }
      });
    });
  });
};

export default initModal;
