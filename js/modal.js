const refs = {
  backdrop: document.querySelector(".backdrop"),
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  refs.modal.classList.toggle("is-hidden");
  document.querySelector("body").classList.add("js-body-scroll");
  refs.backdrop.addEventListener("click", closeModalClick);
  window.addEventListener("keydown", closeModalEsc);
}

function closeModal() {
  refs.modal.classList.toggle("is-hidden");
  document.querySelector("body").classList.remove("js-body-scroll");
  refs.backdrop.removeEventListener("click", closeModal);
  window.removeEventListener("keypress", closeModalEsc);
}

function closeModalClick(e) {
  if (e.target !== refs.backdrop) {
    return;
  }
  closeModal();
}

function closeModalEsc(e) {
  if (e.code === "Escape") {
    closeModal();
  }
  return;
}
