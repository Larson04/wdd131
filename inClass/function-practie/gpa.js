document.querySelector('button').addEventListener('click',() =>{
// Get the string of grades from the input
const grades = document.querySelector('input').value;

// Split the string into an array of grades
const gradeArray = grades.split(',');
// TEMP:
console.log(gradeArray);



const cleanGrades = gradeArray.map((grade) => grade.trim().toUpperCase());


// TEMP:
console.log(cleanGrades);
});


// // Calculate the average
// let total = 0;
// for (let i = 0; i < gradeArray.length; i++) {
//     total += Number(gradeArray[i]);
// }
// const average = total / gradeArray.length;


//     // TEMP:
//     console.log('calculating gpa...');



