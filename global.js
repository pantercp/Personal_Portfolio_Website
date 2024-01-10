// ---------Header------

const burgerBtn = document.querySelector('.row-burger');
const dropMenu = document.querySelector('.drop-menu');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});

// ---------Light Mode------

let lightMode = localStorage.getItem('lightMode');

const lightModeToggle = document.querySelector('#light-mode-toggle');

const sunMoonContainer = document.querySelector(".sun-moon-container")


const enableLightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('light');
  // 3. Update darkMode in localStorage
  localStorage.setItem('lightMode', 'enabled');

}

const disableLightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('light');
  // 3. Update darkMode in localStorage 
  localStorage.setItem('lightMode', null);
}

const rotationAnimation = () => {
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"))
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180)
}

// If the user already visited and enabled darkMode
// start things off with it on
if (lightMode === 'enabled') {
  enableLightMode();
  rotationAnimation();
}
else {
  disableLightMode();
}

lightModeToggle.addEventListener("click", () => {
  // get their lightMode setting
  lightMode = localStorage.getItem('lightMode');
  // if it not current enabled, enable it
  if (lightMode !== 'enabled') {
    enableLightMode();
    // if it has been enabled, turn it off  
  } else {
    disableLightMode();
  }
  rotationAnimation();
})



