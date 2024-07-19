// const year = document.querySelector('#year')//.textContent = new Date().getFullYear();
// const currentYear = new Date().getFullYear();
// year.textContent = currentYear;

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

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
  
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', addParticipant);
  
    function addParticipant() {
      participantCount++;
      const newParticipantHTML = participantTemplate(participantCount);
      addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    }
  
    function participantTemplate(count) {
      return `
        <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
          </div>
          <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select name="grade${count}">
              <option selected value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>
      `;
    }
  });
  