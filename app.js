// const burgerbtn = document.querySelector(".row-burger")
// burgerbtn.addEventListener("click", () => {
//     this.classList.add("open")
// });

const burgerBtn = document.querySelector('.row-burger');
const dropMenu = document.querySelector('.drop-menu');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if(!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});