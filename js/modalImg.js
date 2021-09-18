const images = document.querySelectorAll(".portfolio__gallery img");
const modal = document.querySelector(".portfolio__modal");
const modalImg = document.querySelector(".portfolio__modalImg");
const modalTxt = document.querySelector(".portfolio__modalTxt");
const close = document.querySelector(".portfolio__close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("portfolio__appear");

    close.addEventListener("click", () => {
      modal.classList.remove("portfolio__appear");
    });
  });
});