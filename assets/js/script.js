/*more details button*/
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

// on load name effect 
setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);
