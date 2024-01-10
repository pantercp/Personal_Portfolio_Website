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

const comingSoons = document.querySelectorAll(".coming-soon");

for (let comingSoon of comingSoons) comingSoon.addEventListener("click", () => {
  alert("Web Services page coming on 10/06/2023, for enquiries please fill out the contact form.")
});