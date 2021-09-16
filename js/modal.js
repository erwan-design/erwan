const modalBtn = document.querySelector(".modal__btn");
const modalBg = document.querySelector(".modal__bg");
const modalClose = document.querySelector(".modal__close");
const modalSend = document.querySelector(".modal__send");

modalBtn.addEventListener("click", function(){
	modalBg.classList.add("bg__active");
});

modalClose.addEventListener("click", function(){
	modalBg.classList.remove("bg__active");
});

modalSend.addEventListener("click", function(){
	modalBg.classList.remove("bg__active");
});

