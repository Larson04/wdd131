document.querySelector('#year')//.textContent = new Date().getFullYear();
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const menuButton = document.querySelector('.menu button');
// menuButton.classList.add('hide')
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menu = document.querySelector("#menu");
    // menu.classList.remove(".hide");

    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }

function handleResize(){
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
  
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}