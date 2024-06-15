import { addStudent, students } from './students.js';

function displayStudents() {
    const section = document.querySelector('section');

    // Clear existing students
    section.innerHTML = '';

    //Show all Students
    students.forEach((student) => {
        const article = document.createElement('article');
        const firstName = document.createElement('p');
        firstName.textContent = student.firstName;
        
        const lastName = document.createElement('p');
        lastName.textContent = student.lastName;
        
        const iNumber = document.createElement('p');
        iNumber.textContent = student.iNumber;
        
        const age = document.createElement('p');
        age.textContent = student.age;
    
        const image = document.createElement('img');
        image.setAttribute('src', student.image);
        
        article.append(firstName, lastName, iNumber, age, image);
        document.querySelector('section').append(article);
        
    });
}


document.querySelector('#firstName').focus();

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const iNumber = document.querySelector('#iNumber').value;
    const age = document.querySelector('#age').value;
    const image = document.querySelector('#image').value;
    addStudent(firstName, lastName, iNumber, age, image);
    displayStudents();
    
    //TEMP
    console.log(students)
})

displayStudents();

