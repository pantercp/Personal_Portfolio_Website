const toggleBtns = document.querySelectorAll(".toggle-button");

for (let toggleBtn of toggleBtns) toggleBtn.parentElement.addEventListener('click', () => {
  toggleBtn.classList.toggle("open");
  toggleBtn.parentElement.parentElement.classList.toggle("open");
})

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

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

