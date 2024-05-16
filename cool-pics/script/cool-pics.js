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

handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt){
    return  `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
      </div>`
}

function viewHandler(event){
    
}