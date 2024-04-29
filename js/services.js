
function setupToggleButtons(sectionClass) {
    const toggleBtns = document.querySelectorAll(`.${sectionClass} .toggle-button`);
  
    for (let toggleBtn of toggleBtns) {
      toggleBtn.parentElement.addEventListener('click', (event) => {
        console.log("Click");
  
        const clickedElement = event.target;
        const hasOpenClass = clickedElement.classList.contains("open") ||
          clickedElement.parentElement.classList.contains("open");
  
        const openElements = document.querySelectorAll(`.${sectionClass} .open`);
        for (let openElement of openElements) {
          openElement.classList.remove("open");
        }
  
        if (!hasOpenClass) {
          toggleBtn.classList.toggle("open");
          toggleBtn.parentElement.parentElement.classList.toggle("open");
        }
      });
    }
  }
  
  // Call the function for the first section
  setupToggleButtons("design-wrap");
  