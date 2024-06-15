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

export const students = [student1, student2, student3];

export function addStudent(firstName, lastName, iNumber, age, image) 
{
    const newStudent = {
        firstName,
        lastName,
        iNumber,
        age,
        image
    };
    students.push(newStudent);
}