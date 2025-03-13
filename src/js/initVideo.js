const initVideo = () => {
  const video = document.querySelector(".video");
  video.addEventListener("click", () => {
    const src = video.dataset.src;
    const button = video.querySelector(".video__button");
    const link = video.querySelector(".video__inner");
    button.remove();
    link.remove();
    video.insertAdjacentHTML("afterbegin", `<iframe class="video__media" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  });
};

export default initVideo;
