const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})

let text = ["Sports Fan", "Father of two", "Coffee Drinker", "BBQ Lover"];
let counter = 0;
const changeText = document.getElementById("change-text");
let update = setInterval(change, 2500);

function change() {
  changeText.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}