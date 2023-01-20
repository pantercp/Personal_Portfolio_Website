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

const sunMoonContainer = document.querySelector(".sun-moon-container")

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark")
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"))
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180)
})

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyjroL7leQsxJW_QlU58HnRuaJPQzlc5PAYPis-iaiM6FqrsqumooEhD7n-vhk7x9To/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})