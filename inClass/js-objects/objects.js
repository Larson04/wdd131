
// const firstName = "Ruby";
// const lastName = "Larson";
// const iNumber = '123-45-6789';
// const age = 19;

const student1 = {
    firstName: "Jim",
    lastname: "Halpert",
    iNumber: '123-45-6789',
    age: 19,
    image: "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/the-office/cast-the-office-jim-halpert.jpg/_jcr_content/renditions/original.JPEG?downsize=1200:*&output-format=webp&output-quality=70",
};

const student2 = {
    firstName: "Pam",
    lastname: "Beasley",
    iNumber: '234-56-7890',
    age: 22,
    image: "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/the-office/cast-the-office-pam-beesly.jpg/_jcr_content/renditions/original.JPEG",
};

const student3 = {
    firstName: "Dwight",
    lastname: "Schrute",
    iNumber: '345-67-8901',
    age: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiF1LhA71uoEIKHARbqvyvOibTJCDwUbDV6QCMbm-RJ07dZ_UgI-qiDj5cuJrB_yYt1A&usqp=CAU",
};

const students = [student1, student2, student3];

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

