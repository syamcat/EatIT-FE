const open = document.querySelector('#open');
const open_img = document.querySelector('#modal-open-image');
const close = document.querySelector('#close');
const searchModal = document.querySelector('#profile-modal');

open.addEventListener("click", () => {
	searchModal.classList.add("active");
});
close.addEventListener("click", () => {
	searchModal.classList.remove("active");
});
open_img.addEventListener("click", () => {
	searchModal.classList.add("active");
});